// application
import {IAddressData} from '~/interfaces/address';
import {IBrand} from '~/interfaces/brand';
import {IFilterValues, IListOptions, IReviewsList} from '~/interfaces/list';
import {IOrder} from '~/interfaces/order';
import {IProduct, IProductsList} from '~/interfaces/product';
import {IReview} from '~/interfaces/review';
import {ICategory, IShopCategory} from '~/interfaces/category';
import {Category} from '~/api/graphql/types';
import {IInfo} from "~/store/interfaces";
import {ILanguage} from "~/interfaces/language";

export interface IGetCategoryBySlugOptions {
    depth?: number;
}

export interface IGetCategoriesOptions {
    parent?: Partial<IShopCategory>;
    slugs?: string[];
    depth?: number;
    limit?: number;
}

export interface IGetBrandsOptions {
    limit?: number;
}

export interface IAddProductReviewData {
    rating: number;
    author: string;
    email: string;
    content: string;
}

export interface IGetSearchSuggestionsOptions {
    limitProducts?: number;
    limitCategories?: number;
}

export interface IGetSearchSuggestionsResult {
    products: IProduct[];
    categories: IShopCategory[];
}

export interface ICheckoutItemOptionData {
    name: string;
    value: string;
}

export interface ICheckoutItemData {
    product: IProduct;
    options: ICheckoutItemOptionData[];
    quantity: number;
}

export interface ICheckoutData {
    payment: string;
    items: ICheckoutItemData[];
    billingAddress: IAddressData;
    shippingAddress: IAddressData;
    comment: string;
}

export abstract class ShopApi {
    abstract getCategoryBySlug(slug: string, options: IGetCategoryBySlugOptions, language: ILanguage): Promise<ICategory>;

    abstract getCategories(options: IGetCategoriesOptions, language: ILanguage): Promise<ICategory[]>;

    abstract getBrands(options: IGetBrandsOptions, language: ILanguage): Promise<IBrand[]>;

    abstract getProductsList(option: IListOptions, filters: IFilterValues, language: ILanguage): Promise<IProductsList>;

    abstract getProductBySlug(slug: string, language: ILanguage): Promise<IProduct>;

    abstract getProductReviews(productId: string, options?: IListOptions): Promise<IReviewsList>;

    abstract addProductReview(productId: string, data: IAddProductReviewData): Promise<IReview>;

    abstract getProductAnalogs(product: IProduct, language: ILanguage): Promise<IProduct[]>;

    abstract getRelatedProducts(productId: string, limit: number, language: ILanguage): Promise<IProduct[]>;

    abstract getFeaturedProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]>;

    abstract getPopularProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]>;

    abstract getTopRatedProducts(categorySlug: string | null, limit: number, language: ILanguage): Promise<IProduct[]>;

    abstract getSpecialOffers(limit: number, language: ILanguage): Promise<IProduct[]>;

    abstract getLatestProducts(limit: number, language: ILanguage): Promise<IProduct[]>;

    abstract getSearchSuggestions(
        query: string,
        options?: IGetSearchSuggestionsOptions,
        language?: ILanguage
    ): Promise<IGetSearchSuggestionsResult>;

    abstract checkout(data: ICheckoutData): Promise<IOrder>;
}
