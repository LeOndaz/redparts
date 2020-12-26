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
    createReview,
    getBrands,
    getProductBySlug, getProductList,
    getReviewsList, getShopCategoryBySlugProductsLayout, getShopCategoryListProductsLayout,
} from "~/api"

import {ReviewCountableEdge} from '~/api/graphql/types';
import {
    CategoryFilterBuilder,
    CheckFilterBuilder,
    RadioFilterBuilder,
    RangeFilterBuilder,
    RatingFilterBuilder,
} from "~/api/filters"
import {cursorNavigationMapIn} from "~/api/graphql/misc/mappers/navigation";
import {filterHot} from "~/api/graphql/misc/FilterService";
import {reviewMap} from "~/api/graphql/reviews/ReviewMappers";
import {ILanguage} from "~/interfaces/language";
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
            console.log('categoryList => \n ', categoryList)

            if (slugs) {
                return categoryList.filter((category: ICategory) => options?.slugs?.includes(category.slug))
            }

            if (parent) {
                return categoryList.filter((category: ICategory) => category.parent == parent)
            }

            return categoryList;
        });
    }

    getBrands(options?: IGetBrandsOptions, language?: ILanguage): Promise<IBrand[]> {
        return getBrands().then(r => r.slice(0, options?.limit))
    }

    getProductsList(options: IListOptions = {}, filterValues: IFilterValues = {}, language: ILanguage): Promise<IProductsList> {
        // if (typeof window !== "undefined") {
        //     client.query({
        //         query: TestErrorDocument,
        //     }).then(r => {
        //         console.log('########')
        //         console.log(r)
        //         console.log(r.errors)
        //         console.log('########')
        //     }).catch(err => {
        //         console.log('err', '   ', err)
        //     })
        // }

        console.log(options, filterValues);

        options.limit = options.limit || 16;

        let categoriesPromise: Promise<ICategory[]> = this.getCategories({}, language)
        let productsPromise = getProductList({
            first: options.limit,
            after: options.after,
            before: options.before,
        }, language)

        return Promise.all([
            categoriesPromise,
            productsPromise
        ]).then(([categories, productsResponse]) => {
            let {dataList: products, pageInfo, totalCount} = productsResponse;

            if (totalCount === 0) {
                return emptyProductList
            }

            const navigation = cursorNavigationMapIn(pageInfo, options.limit!, totalCount)
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
        return getProductReviews(productId, options)
        // let variables = JSON.parse(JSON.stringify({
        //     first: options?.limit,
        //     after: options?.after,
        //     before: options?.before,
        //     filter: {
        //         product: productId,
        //     },
        // }))
        //
        // return getReviewsList(variables).then(({data: {reviews}}) => ({
        //     items: reviews.edges.map((edge: ReviewCountableEdge) => reviewMap.in(edge.node)),
        //     sort: 'default',
        //     navigation: cursorNavigationMapIn(reviews.pageInfo, variables?.limit, reviews.totalCount),
        // }))
    }

    addProductReview(productId: string, data: IAddProductReviewData): Promise<IReview> {
        return addProductReview(productId, data)
        /* review user is current authenticated user */
        // return createReview({
        //     product: productId,
        //     content: data.content,
        //     rating: data.rating,
        // }).then(r => r.data!.review)
    }

    getProductAnalogs(productId: string, language: ILanguage): Promise<IProduct[]> {
        return getProductAnalogs(productId);
    }

    getRelatedProducts(productId: string, limit: number, language: ILanguage): Promise<IProduct[]> {
        return getRelatedProducts(productId, limit);
    }

    getFeaturedProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]> {
        return getFeaturedProducts(categorySlug, limit);
    }

    getPopularProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]> {
        return getPopularProducts(categorySlug, limit);
    }

    getTopRatedProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]> {
        // to be implemented
        return this.getProductsList({}, {}, language).then(r => r.items)
    }

    getSpecialOffers(limit: number, language: ILanguage): Promise<IProduct[]> {
        const variables: IBaseModelProps = filterHot({
            first: limit,
        })

        return getProductList(variables, language).then(r => r.dataList)
    }

    getLatestProducts(limit: number, language: ILanguage): Promise<IProduct[]> {
        return getLatestProducts(limit);
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
