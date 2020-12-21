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
    checkout,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductAnalogs,
    getRelatedProducts,
} from '~/fake-server/endpoints';

import {
    createReview,
    getBrands, getCategoryBySlug, getCategoryList,
    getProductBySlug,
    getProductList,
    getReviewsList,
} from "~/api"

import {ReviewCountableEdge} from '~/api/graphql/types';
import {CategoryFilterBuilder, RadioFilterBuilder, RangeFilterBuilder, RatingFilterBuilder,} from "~/api/filters"
import {cursorNavigationMapIn} from "~/api/graphql/misc/mappers/navigation";
import {reviewMapIn} from "~/api/graphql/reviews/ReviewMappers";
import {filterHot} from "~/api/graphql/misc/FilterService";
import {clientContext} from "~/services/utils";

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
    getCategoryBySlug(slug: string, options: IGetCategoryBySlugOptions, context: clientContext): Promise<ICategory> {
        console.log(slug, '#123')
        return getCategoryBySlug.asProducts(slug).then(r => {
            console.log('bySlug => \n', r)
            return r
        });
    }

    getCategories(options: IGetCategoriesOptions, context: clientContext): Promise<ICategory[]> {
        let depth = options?.depth || 0;
        let parent = options?.parent;
        let slugs = options?.slugs;
        let limit = options?.limit || 100

        return getCategoryList.asProducts({
            first: limit,
            level: depth,
        }).then(r => {
            const [categoryList,] = r;
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

    getBrands(options?: IGetBrandsOptions): Promise<IBrand[]> {
        return getBrands().then(r => r.slice(0, options?.limit))
    }

    getProductsList(options: IListOptions = {}, filterValues: IFilterValues = {}, context: any): Promise<IProductsList> {
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

        let categoriesPromise: Promise<ICategory[]> = this.getCategories()
        let productsPromise = getProductList({
            first: options.limit,
            after: options.after,
            before: options.before,
        })

        return Promise.all([
            categoriesPromise,
            productsPromise
        ]).then(([categories, productsResponse]) => {
            let [products, pageInfo, totalCount] = productsResponse;

            if (totalCount === 0) {
                return emptyProductList
            }

            const navigation = cursorNavigationMapIn(pageInfo, options.limit!, totalCount)
            const filterBuilders = [
                new CategoryFilterBuilder('category', 'Categories'),
                new RangeFilterBuilder('price', 'Price range'),
                new RatingFilterBuilder('rating', 'Rating'),
                new RadioFilterBuilder('discount', 'On discount'),
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

    getProductBySlug(slug: string, context: any): Promise<IProduct> {
        return getProductBySlug(slug);
    }

    getProductReviews(productId: string, options?: IListOptions): Promise<IReviewsList> {
        let variables = JSON.parse(JSON.stringify({
            first: options?.limit,
            after: options?.after,
            before: options?.before,
            filter: {
                product: productId,
            },
        }))

        return getReviewsList(variables).then(({data: {reviews}}) => ({
            items: reviews.edges.map((edge: ReviewCountableEdge) => reviewMapIn(edge.node)),
            sort: 'default',
            navigation: cursorNavigationMapIn(reviews.pageInfo, variables?.limit, reviews.totalCount),
        }))
    }

    addProductReview(productId: string, data: IAddProductReviewData): Promise<IReview> {
        /* review user is current authenticated user */
        return createReview({
            product: productId,
            content: data.content,
            rating: data.rating,
        }).then(r => r.data!.review)
    }

    getProductAnalogs(productId: string): Promise<IProduct[]> {
        return getProductAnalogs(productId);
    }

    getRelatedProducts(productId: string, limit: number): Promise<IProduct[]> {
        return getRelatedProducts(productId, limit);
    }

    getFeaturedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getFeaturedProducts(categorySlug, limit);
    }

    getPopularProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getPopularProducts(categorySlug, limit);
    }

    getTopRatedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        // to be implemented
        return this.getProductsList().then(r => r.items)
    }

    getSpecialOffers(limit: number): Promise<IProduct[]> {
        const variables = filterHot({
            first: limit
        })

        return getProductList(variables).then(([products,]) => products)
    }

    getLatestProducts(limit: number): Promise<IProduct[]> {
        return getLatestProducts(limit);
    }

    getSearchSuggestions(
        query: string,
        options?: IGetSearchSuggestionsOptions,
    ): Promise<IGetSearchSuggestionsResult> {
        const categories = getCategoryList.asProducts({
            first: options?.limitCategories,
            filter: {
                search: query
            }
        }).then(([categories]) => categories);

        const products = getProductList({
            first: options?.limitProducts,
            filter: {
                search: query
            }
        }).then(([products]) => products)

        return Promise.all([categories, products]).then(r => ({
            categories: r[0],
            products: r[1],
        })) as Promise<IGetSearchSuggestionsResult>
    }

    checkout(data: ICheckoutData): Promise<IOrder> {
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
