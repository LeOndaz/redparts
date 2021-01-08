
/**
 * Those services will be fiderated soon, saleor #6439
 * */
export const API_URL = 'http://localhost:8000/graphql/';
export const REVIEWS_PLUGIN_API_URL = 'http://localhost:8000/plugins/reviews/';

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

export enum DefaultAttrSlugs {
    Brand = "brand",
    Badges = "badges",
    Tags = "tags",
}

export enum Collections {
    Featured = "featured",
    DealZone = "deal-zone",
}

export enum Placeholders {
    Product = "http://placehold.it/200",
    UserAvatar = "https://placehold.it/200"
}

export enum MenuSlugs {
    Navbar = "navbar",
    Footer = "footer",
}

export enum MetadataKeys {
    /** Attrs */
    Featured = "featured",

    /** User */
    Phone = "phone",

    /** Collections */
    Categories = "categories"
}

export const MAX_BADGES = 3
export const BASE_CURRENCY = "EUR"
