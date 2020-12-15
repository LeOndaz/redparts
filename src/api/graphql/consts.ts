import {APIErrors} from "~/api/errors";

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
const SERVER_ERRORS: any = {
    AUTH: {
        UNIQUE: ["UNIQUE", APIErrors.AUTH_EMAIL_ALREADY_IN_USE],
        INVALID: ["INVALID", APIErrors.INVALID_EMAIL_OR_PASSWORD],
        UNKNOWN_ERROR: ["UNKNOWN_ERROR", APIErrors.UNKNOWN_ERROR_HAS_OCCURRED],
        PASSWORD_TOO_SHORT: ["PASSWORD_TOO_SHORT", APIErrors.AUTH_WEAK_PASSWORD],
        JWT_SIGNATURE_EXPIRED: ["JWT_SIGNATURE_EXPIRED", APIErrors.UNKNOWN_ERROR_HAS_OCCURRED]
    }
}


export const DEFAULT_ATTR_SLUGS = {
    BRAND: "brand",
    BADGES: "badges",
    TAGS: "tags",
}

export const MAX_BADGES = 3
