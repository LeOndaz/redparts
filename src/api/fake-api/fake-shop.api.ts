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
    // checkout,
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
    getReviewsList, getShopCategoryBySlugProductsLayout, getShopCategoryListProductsLayout, setShippingMethod,
} from "~/api"

import {
    CategoryFilterBuilder,
    CheckFilterBuilder,
    RadioFilterBuilder,
    RangeFilterBuilder,
    RatingFilterBuilder,
} from "~/api/filters"
import {ILanguage} from "~/interfaces/language";
import {getCollectionBySlug} from "~/api/graphql/collections/collectionService";
import {Badges, Collections} from "~/api/graphql/consts";
import {reviewMap} from "~/api/graphql/reviews/ReviewMappers";
import {sortingMap} from "~/api/graphql/misc/mappers/sorting";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {
    Checkout,
    CheckoutAddPromoCode, CheckoutComplete, CheckoutPaymentCreate, CheckoutRemovePromoCode,
    CheckoutShippingMethodUpdate,
    Collection,
    PaymentGateway, PaymentInput
} from "~/api/graphql/types";
import {ICollection} from "~/api/graphql/collections/collectionMappers";
import {addressMap} from "~/api/graphql/addresses/addressMappers";
import * as util from "util";
import {ICurrency} from "~/interfaces/currency";
import {getPaymentGateways} from "~/api/graphql/payments/paymentService";
import {applyVoucher, removeVoucher} from "~/api/graphql/vouchers/vouchersService";
import {checkout, completeCheckout, createPayment} from "~/api/graphql/checkouts/checkoutService";

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

interface PaymentMethod {
    name: string;
    label: string;
    description: string;
}


export const filterProductsByCategory = (slug: string, products: IProduct[]): IProduct[] => products.filter(product => product.categories!.map(cat => cat.slug).includes(slug))

export class FakeShopApi implements ShopApi {
    getCategoryBySlug(slug: string, options: IGetCategoryBySlugOptions, language: ILanguage): Promise<ICategory> {
        return getShopCategoryBySlugProductsLayout(slug, language);
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
            const filterBuilders = products.length > 0 ? [
                new CategoryFilterBuilder('category', 'Categories'),
                new RangeFilterBuilder('price', 'Price range'),
                new RatingFilterBuilder('rating', 'Rating'),
                new RadioFilterBuilder('discount', 'On discount'),
                new CheckFilterBuilder('brand', 'Brand'),
            ] : [];

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
        return this.getFeaturedCollection(limit, language)
            .then(collection => {
                if (categorySlug && collection) {
                    return filterProductsByCategory(categorySlug, collection.products)
                }

                if (!categorySlug && collection) {
                    return collection.products
                }

                return [];
            })
    }

    getFeaturedCollection(limit: number, language: ILanguage): Promise<ICollection> {
        return getCollectionBySlug(Collections.Featured, {
            first: limit,
        }, language)
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
        return getCollectionBySlug(
            Collections.DealZone,
            {
                first: limit,
            }, language).then(collection => collection ? collection.products : [])
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

        return Promise.all([categories, products]).then(([categories, products]) => ({
            categories: categories,
            products: products,
        })) as Promise<IGetSearchSuggestionsResult>
    }

    checkout(data: ICheckoutData, isAnonymous: boolean, language: ILanguage): Promise<Checkout> {
        return checkout(data, isAnonymous, language)
    }

    createPayment(checkoutId: string, input: PaymentInput, language: ILanguage): Promise<CheckoutPaymentCreate> {
        return createPayment(checkoutId, input, language)
    }

    completeCheckout(checkoutId: string, redirectUrl: string, storeSource: boolean, language: ILanguage, paymentData?: string): Promise<CheckoutComplete> {
        return completeCheckout(checkoutId, redirectUrl, storeSource, language, paymentData)
    }

    getPaymentMethods(): Promise<PaymentGateway[]> {
        return getPaymentGateways()
    }

    setShippingMethod(checkoutId: string, shippingMethodId: string, language: ILanguage): Promise<CheckoutShippingMethodUpdate> {
        return setShippingMethod(checkoutId, shippingMethodId, language)
    }

    applyVoucher(checkoutId: string, voucher: string, language: ILanguage): Promise<CheckoutAddPromoCode> {
        return applyVoucher(checkoutId, voucher, language)
    }

    removeVoucher(checkoutId: string, voucher: string, language: ILanguage): Promise<CheckoutRemovePromoCode> {
        return removeVoucher(checkoutId, voucher, language)
    }
}

