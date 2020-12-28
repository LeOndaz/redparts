/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import {IBrand} from '~/interfaces/brand';
import {IFilterValues, IListOptions, IReviewsList} from '~/interfaces/list';
import {IOrder} from '~/interfaces/order';
import {IProduct, IProductsList} from '~/interfaces/product';
import {IReview} from '~/interfaces/review';
import {ICategory} from '~/interfaces/category';
import {
    IAddProductReviewData,
    ICheckoutData,
    IGetBrandsOptions,
    IGetCategoriesOptions,
    IGetCategoryBySlugOptions,
    IGetSearchSuggestionsOptions,
    IGetSearchSuggestionsResult,
    ShopApi,
} from '~/api/base';
import {
    addProductReview,
    checkout,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductAnalogs, getProductReviews,
    getRelatedProducts,
} from '~/fake-server/endpoints';

import {
    createReview, filterNew,
    getBrands,
    getProductBySlug, getProductList,
    getReviewsList, getShopCategoryBySlugProductsLayout, getShopCategoryListProductsLayout,
} from "~/api"

import {
    CategoryFilterBuilder,
    CheckFilterBuilder,
    RadioFilterBuilder,
    RangeFilterBuilder,
    RatingFilterBuilder,
} from "~/api/filters"
import {ILanguage} from "~/interfaces/language";
import {getProductsByCollectionSlug} from "~/api/graphql/collections/CollectionService";
import {Badges, Collections} from "~/api/graphql/consts";
import {reviewMap} from "~/api/graphql/reviews/ReviewMappers";
import {sortingMap} from "~/api/graphql/misc/mappers/sorting";
import {IBaseModelProps} from "~/api/graphql/interfaces";

const emptyProductList: IProductsList = {
    navigation: {
        total: 0,
        limit: 0,
        type: 'cursor',
        endCursor: null,
        startCursor: null,
        hasPreviousPage: false,
        hasNextPage: false,
    },
    sort: '',
    items: [],
    filters: [],
}


const filterProductsByCategory = (slug: string, products: IProduct[]) => products.filter(product => product.categories!.map(cat => cat.slug).includes(slug))

export class FakeShopApi implements ShopApi {
    getCategoryBySlug(slug: string, options: IGetCategoryBySlugOptions, language: ILanguage): Promise<ICategory> {
        console.log(slug, '#123')
        return getShopCategoryBySlugProductsLayout(slug, language).then(r => {
            console.log('bySlug => \n', r)
            return r
        });
    }

    getCategories(options: IGetCategoriesOptions, language: ILanguage): Promise<ICategory[]> {
        let depth = options?.depth || 0;
        let parent = options?.parent;
        let slugs = options?.slugs;
        let limit = options?.limit || 100

        return getShopCategoryListProductsLayout({
            first: limit,
            level: depth,
        }, language).then(r => {
            const {dataList: categoryList} = r;

            if (slugs) {
                return categoryList.filter((category: ICategory) => options?.slugs?.includes(category.slug))
            }

            if (parent) {
                return categoryList.filter((category: ICategory) => category.parent == parent)
            }

            return categoryList;
        });
    }

    getBrands(options: IGetBrandsOptions, language: ILanguage): Promise<IBrand[]> {
        return getBrands(language).then(r => r.slice(0, options?.limit))
    }

    getProductsList(options: IListOptions = {}, filterValues: IFilterValues = {}, language: ILanguage): Promise<IProductsList> {
        options.limit = options.limit || 16;
        const sortBy = options.sort && options.sort !== 'default' ? sortingMap.out(options.sort) : null

        let categoriesPromise: Promise<ICategory[]> = this.getCategories({}, language)
        let productsPromise = getProductList({
            first: options.limit,
            after: options.after,
            before: options.before,
            sortBy,
        },
        language
    )

        return Promise.all([
            categoriesPromise,
            productsPromise
        ]).then(([categories, productsResponse]) => {
            let {dataList: products, getNavigation, totalCount} = productsResponse;

            if (totalCount === 0) {
                return emptyProductList
            }

            const navigation = getNavigation(options.limit || 16)

            const filterBuilders = [
                new CategoryFilterBuilder('category', 'Categories'),
                new RangeFilterBuilder('price', 'Price range'),
                new RatingFilterBuilder('rating', 'Rating'),
                new RadioFilterBuilder('discount', 'On discount'),
                new CheckFilterBuilder('brand', 'Brand'),
            ]

            filterBuilders.forEach(fb => {
                const items = fb.slug === 'category' ? categories : products
                fb.makeItems(items, filterValues[fb.slug])
                fb.calc(products, filterBuilders)
            });

            products = products.filter((product: IProduct) => filterBuilders.reduce<boolean>((acc, fb) => acc && fb.test(product), true))
            return {
                items: products,
                navigation: navigation,
                filters: filterBuilders.map(fb => fb.build()),
            };
        }) as Promise<IProductsList>

    }

    getProductBySlug(slug: string, language: ILanguage): Promise<IProduct> {
        return getProductBySlug(slug, language);
    }

    getProductReviews(productId: string, options?: IListOptions): Promise<IReviewsList> {
        let variables: IBaseModelProps = {
            first: options?.limit || 8,
            after: options?.after,
            before: options?.before,
            filter: {
                product: productId,
            },
            ...(options?.sort ? {sortBy: sortingMap.out(options?.sort)} : {})
        }

        return getReviewsList(variables).then(r => ({
            items: r.dataList,
            navigation: r.getNavigation(variables.first!),
            sort: options?.sort || 'default',
        }))
    }

    addProductReview(productId: string, data: IAddProductReviewData): Promise<IReview> {
        /* review user is current authenticated user */
        return createReview(productId, {
            content: data.content,
            rating: data.rating,
        }).then(r => r.data!.review)
    }

    getProductAnalogs(product: IProduct, language: ILanguage): Promise<IProduct[]> {
        const productCategoryIds = product.categories!.map(cat => cat.id)

        return getProductList({
            first: 8,
            filter: {
                price: {
                    lte: product.price + 100,
                    gte: product.price - 100,
                },
                ...(productCategoryIds.length > 0 && {categories: productCategoryIds})
            }
        }, language).then(r => r.dataList.filter(pr => pr.id !== product.id));
    }

    getRelatedProducts(productId: string, limit: number, language: ILanguage): Promise<IProduct[]> {
        return getRelatedProducts(productId, limit);
    }

    getFeaturedProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]> {
        return getProductsByCollectionSlug(
            Collections.Featured,
            {
                first: limit,
            }, language).then(r => categorySlug ? filterProductsByCategory(categorySlug, r.dataList) : r.dataList)
    }

    getPopularProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]> {
        return getProductList({
            first: limit
        }, language).then(r => categorySlug ? filterProductsByCategory(categorySlug, r.dataList) : r.dataList)
    }

    getTopRatedProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]> {
        // to be implemented
        return this.getProductsList({}, {}, language).then(r => r.items)
    }

    getSpecialOffers(limit: number, language: ILanguage): Promise<IProduct[]> {
        return getProductsByCollectionSlug(
            Collections.DealZone,
            {
                first: limit,
            }, language).then(r => r.dataList.map(product => {
            if (!(Badges.Hot in product.badges)) {
                product.badges.push(Badges.Hot)
            }

            return product
        }))
    }

    getLatestProducts(limit: number, language: ILanguage): Promise<IProduct[]> {
        return getProductList(filterNew({
            first: limit,
        }), language).then(r => r.dataList)
    }

    getSearchSuggestions(
        query: string,
        options: IGetSearchSuggestionsOptions,
        language: ILanguage
    ): Promise<IGetSearchSuggestionsResult> {
        const categories = getShopCategoryListProductsLayout({
            first: options.limitCategories,
            filter: {
                search: query
            },
        }, language).then((r) => r.dataList);

        const products = getProductList({
            first: options.limitProducts,
            filter: {
                search: query
            }
        }, language).then(r => r.dataList)

        return Promise.all([categories, products]).then(r => ({
            categories: r[0],
            products: r[1],
        })) as Promise<IGetSearchSuggestionsResult>
    }

    checkout(data: ICheckoutData): Promise<IOrder> {
        console.log(data.items, '####@')
        return checkout(data);
    }

    //
    // getCurrencies(baseCurrency = BASE_CURRENCY): Promise<ICurrency[]> {
    //     return Promise.all([
    //         fetch('https://openexchangerates.org/api/latest.json?app_id=82c358b9713144acb488030de522eb42').then(r => r.json().then()),
    //         fetch('https://openexchangerates.org/api/currencies.json').then(r => r.json().then())
    //     ]).then(([latest, currencyNames]) => {
    //         const {rates, base} = latest;
    //         return Object.entries(rates).map(([code, rate]) => {
    //             if(base !== baseCurrency){
    //                 rate = rate / rates[baseCurrency]
    //             }
    //             return {
    //                 code: code,
    //                 rate: rate,
    //                 symbol: '',
    //                 name: currencyNames[code],
    //             } as ICurrency
    //         })
    //     })
    // }

}
