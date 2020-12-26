
/**
 * Those services will be fiderated soon, saleor #6439
 * */
export const API_URL = 'http://localhost:8000/graphql/';
export const REVIEWS_PLUGIN_API_URL = 'http://localhost:8000/plugins/reviews/';

/** */
export const DEFAULT_CHANNEL = 'default';

/** AUTH */
export const jwtRenewalInterval = 5 * 60 * 1000; // 5 min

/** ERROR_NAME: [ ERROR_NAME, INTL DISPLAY ID ]*/

export enum BADGES {
    HOT = "hot",
    SALE = "sale",
    NEW = "new"
}

export enum DEFAULT_ATTR_SLUGS {
    BRAND = "brand",
    BADGES = "badges",
    TAGS = "tags",
}

export const MAX_BADGES = 3
export const BASE_CURRENCY = "EUR"
