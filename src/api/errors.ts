export enum AuthError {
    INVALID_PASSWORD = "AUTH_WRONG_PASSWORD",
    INVALID = "UNKNOWN_ERROR_HAS_OCCURRED",
    JWT_DECODE_ERROR = "UNKNOWN_ERROR_HAS_OCCURRED",
    JWT_INVALID_TOKEN = "JWT_INVALID_TOKEN",
    REQUIRED = "",
    UNIQUE = "AUTH_EMAIL_ALREADY_IN_USE",
    PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
    PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
    PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR ",
}
