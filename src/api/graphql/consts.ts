/**
 * Those services will be fiderated soon, saleor #6439
 * */

const BASE_URL = "http://localhost:8000"
export const API_URL = `${BASE_URL}/graphql/`;
export const REVIEWS_PLUGIN_API_URL = `${BASE_URL}/plugins/reviews/`;
export const PLUGIN_GTAG_URL = `${BASE_URL}/plugins/gtag/`
export const PLUGIN_FACEBOOK_PIXEL_URL = `${BASE_URL}/plugins/facebook-pixel/`
export const PLUGIN_OPEN_EXCHANGE_URL = `${BASE_URL}/plugins/open-exchange/`

/** */
export const DEFAULT_CHANNEL = 'default';

export const getCurrentChannel = () => Channels.Default

/** AUTH */
export const jwtRenewalInterval = 5 * 60 * 1000; // 5 min

/** ERROR_NAME: [ ERROR_NAME, INTL DISPLAY ID ]*/

export enum Channels {
    Default = "default",
}

export enum Badges {
    Hot = "hot",
    Sale = "sale",
    New = "new"
}

export enum attrSlugsEnum {
    Brand = "brand",
    Badges = "badges",
    Tags = "tags",
    Background = "background",
}

export enum Collections {
    Featured = "featured",
    DealZone = "deal-zone",
}

export enum Placeholders {
    Product = "http://placehold.it/200",
    UserAvatar = "https://placehold.it/200"
}

export enum MenuSlugsEnum {
    Navbar = "navbar",
    Footer = "footer",
}

export enum MetadataKeysEnum {
    /** Attrs */
    Featured = "featured",

    /** User */
    Phone = "phone",

    /** Collections */
    Categories = "categories"
}

export enum PaymentGatewayEnum {
    Braintree = 'mirumee.payments.braintree',
    Razorpay = 'mirumee.payments.razorpay',
    Stripe = 'mirumee.payments.stripe',
    Adyen = 'mirumee.payments.adyen',
}

export enum PageSlugsEnum {
    Base = 'base',
    AboutUs = 'about-us',
    ContactUs = 'contact-us',
    PrivacyPolicy = 'privacy-policy',
}

export const MAX_BADGES = 3
export const BASE_CURRENCY = "EUR"
