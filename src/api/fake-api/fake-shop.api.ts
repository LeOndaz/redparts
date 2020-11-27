/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import {getBrands} from '~/fake-server/endpoints/brands';
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
    getSpecialOffers,
    getTopRatedProducts,
} from '~/fake-server/endpoints';

import {
    categoryResolver,
    cursorNavigationMapper,
    productMapper,
    productResolver,
    reviewsMapper,
    reviewsResolver,
    shopCategoryMapper
} from '~/api';
import {CategoryCountableEdge, ProductCountableEdge, ReviewCountableEdge} from '~/api/graphql/types';
import {CategoryFilterBuilder, RadioFilterBuilder, RangeFilterBuilder, RatingFilterBuilder,} from "~/api/filters"
import {getOrNull} from "~/api/graphql/utils";

export class FakeShopApi implements ShopApi {
    getCategoryBySlug(slug: string, options?: IGetCategoryBySlugOptions): Promise<ICategory> {
        console.log(slug, '#123')
        return categoryResolver.getBySlug(slug).then(({category}) => getOrNull(category) && shopCategoryMapper.toInternal(category));
    }

    getCategories(options?: IGetCategoriesOptions): Promise<ICategory[]> {
        let depth = options?.depth || 0;
        let parent = options?.parent;
        let slugs = options?.slugs;
        let limit = options?.limit || 100

        return categoryResolver.all({
            first: limit,
            level: depth,
        }).then(({data: {categories}}) => {
            let categoryList = categories.edges.map((e: CategoryCountableEdge) => shopCategoryMapper.toInternal(e.node));

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
        return getBrands(options);
    }

    getProductsList(options: IListOptions = {}, filterValues: IFilterValues = {}): Promise<IProductsList> {
        console.log(options, filterValues);

        options.limit = options.limit || 16;

        let categoriesPromise: Promise<ICategory[]> = this.getCategories()
        let productsPromise = productResolver.all({
            first: options.limit,
            after: options.after,
            before: options.before,
        }).then(({data: {products}}) => products)

        return Promise.all([
            categoriesPromise,
            productsPromise
        ]).then(([categories, productCountableConnection]) => {
            let products = productCountableConnection.edges.map((e: ProductCountableEdge) => productMapper.toInternal(e.node))

            const navigation = cursorNavigationMapper.toInternal(productCountableConnection.pageInfo, options.limit, productCountableConnection.totalCount)
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

    getProductBySlug(slug: string): Promise<IProduct> {
        return productResolver.getBySlug(slug).then(({data}) => getOrNull(data.product) && productMapper.toInternal(data.product));
    }

    getProductReviews(productId: string, options?: IListOptions): Promise<IReviewsList> {
        let queryOptions = JSON.parse(JSON.stringify({
            first: options?.limit,
            after: options?.after,
            before: options?.before,
            filter: {
                product: productId,
            },
        }))
        return reviewsResolver.all(queryOptions).then(({data: {reviews}}) => ({
                items: reviews.edges.map((edge: ReviewCountableEdge) => reviewsMapper.toInternal(edge.node)),
                sort: 'default',
                navigation: cursorNavigationMapper.toInternal(reviews.pageInfo, options?.limit, reviews.totalCount),
            }))
    }

    addProductReview(productId: string, data: IAddProductReviewData): Promise<IReview> {
        /* review user is current authenticated user */
        return reviewsResolver.create({
            product: productId,
            content: data.content,
            rating: data.rating,
        })
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
        return getTopRatedProducts(categorySlug, limit);
    }

    getSpecialOffers(limit: number): Promise<IProduct[]> {
        return getSpecialOffers(limit);
    }

    getLatestProducts(limit: number): Promise<IProduct[]> {
        return getLatestProducts(limit);
    }

    getSearchSuggestions(
        query: string,
        options?: IGetSearchSuggestionsOptions,
    ): Promise<IGetSearchSuggestionsResult> {
        let categories = categoryResolver.all({
            first: options?.limitCategories,
            filter: {
                search: query
            }
        }).then(({data: {categories}}) => categories.edges.map(edge => edge.node));

        let products = productResolver.all({
            first: options?.limitProducts,
            filter: {
                search: query
            }
        }).then(({data: {products}}) => products.edges.map(edge => productMapper.toInternal(edge.node)))

        return Promise.all([categories, products]).then(r => ({
            categories: categories,
            products: products,
        })) as Promise<IGetSearchSuggestionsResult>
    }

    checkout(data: ICheckoutData): Promise<IOrder> {
        return checkout(data);
    }
}
