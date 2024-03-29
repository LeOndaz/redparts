/* eslint-disable @typescript-eslint/no-unused-vars */

// application
import {IAddress} from '~/interfaces/address';
import {IAppLinkHref} from '~/components/shared/AppLink';
import {IBrand} from '~/interfaces/brand';
import {CategoryType, ICategory, IShopCategory} from '~/interfaces/category';
import {IOrder} from '~/interfaces/order';
import {IPost} from '~/interfaces/post';
import {IProduct} from '~/interfaces/product';
import {ICollection} from "~/api/graphql/collections/collectionMappers";
import {Checkout} from "~/api/graphql/types";

const url = {
    // common
    home: () => '/',
    category: (category: ICategory): IAppLinkHref => {
        if (category.type === CategoryType.SHOP) {
            return url.shopCategory(category);
        }

        return '/';
    },
    collection: (collection: ICollection) => {

    },
    // shop pages
    shop: () => '/catalog',
    shopCategory: (category: IShopCategory): IAppLinkHref => {
        return {
            href: `/catalog/[slug]${category.layout === 'products' ? '/products' : ''}?slug=${category.slug}`,
            as: `/catalog/${category.slug}${category.layout === 'products' ? '/products' : ''}`,
        }
    },
    products: ({filters}: { filters?: Record<string, string> } = {}): IAppLinkHref => ({
        href: {
            pathname: '/catalog/products',
            query: {
                ...filters,
            },
        },
    }),
    product: (product: IProduct): IAppLinkHref => ({
        href: `/products/[slug]?slug=${product.slug}`,
        as: `/products/${product.slug}`,
    }),
    brand: (brand: IBrand) => '/',
    cart: () => '/cart',
    checkout: () => '/cart/checkout',
    shipping: (checkout: Checkout, method: string) => `/cart/checkout/${checkout.token}/shipping?with=${method}`,
    pay: (checkout: Checkout, method: string) => `/cart/checkout/${checkout.token}/pay?with=${method}`,
    checkoutSuccess: (order: IOrder): IAppLinkHref => ({
        href: `/orders/[id]?token=${order.token}`,
        as: `/orders/${order.token}`,
    }),
    wishlist: () => '/wishlist',
    compare: () => '/compare',
    trackOrder: () => '/track-order',

    // blog pages
    blog: () => '/demo/blog/classic-right-sidebar',
    post: (post: IPost) => '/demo/blog/post-full-width',

    // auth pages
    signIn: () => '/account/login',
    signUp: () => '/account/login',
    passwordRecovery: () => '/account/password-reset',

    // account pages
    accountDashboard: (): IAppLinkHref => '/account/dashboard',
    accountGarage: () => '/account/garage',
    accountProfile: () => '/account/profile',
    accountPassword: () => '/account/password',
    accountOrders: () => '/account/orders',
    accountOrderView: (order: Partial<IOrder>): IAppLinkHref => ({
        href: `/account/orders/[id]?id=${order.id}`,
        as: `/account/orders/${order.id}`,
    }),
    accountAddresses: () => '/account/addresses',
    accountAddressNew: (): IAppLinkHref => ({
        href: '/account/addresses/[id]?id=new',
        as: '/account/addresses/new',
    }),
    accountAddressEdit: (address: IAddress): IAppLinkHref => ({
        href: `/account/addresses/[id]?id=${address.id}`,
        as: `/account/addresses/${address.id}`,
    }),

    // site pages
    pageAboutUs: () => '/about-us',
    pageContactUs: () => '/contact-us',
    pageStoreLocation: () => '/',
    pageTerms: () => '/terms',
};


export default url;
