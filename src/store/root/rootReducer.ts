// third-party
import { combineReducers } from 'redux';
// application
import version from '~/store/version';
import cartReducer, { CART_NAMESPACE } from '~/store/cart/cartReducer';
import compareReducer, { COMPARE_NAMESPACE } from '~/store/compare/compareReducer';
import currencyReducer, { CURRENCY_NAMESPACE } from '~/store/currency/currencyReducer';
import garageReducer, { GARAGE_NAMESPACE } from '~/store/garage/garageReducer';
import languageReducer, { LANGUAGE_NAMESPACE } from '~/store/language/languageReducer';
import mobileMenuReducer, { MOBILE_MENU_NAMESPACE } from '~/store/mobile-menu/mobileMenuReducer';
import optionsReducer, { OPTIONS_NAMESPACE } from '~/store/options/optionsReducer';
import quickviewReducer, { QUICKVIEW_NAMESPACE } from '~/store/quickview/quickviewReducer';
import shopReducer from '~/store/shop/shopReducer';
import userReducer, { USER_NAMESPACE } from '~/store/user/userReducer';
import wishlistReducer, { WISHLIST_NAMESPACE } from '~/store/wishlist/wishlistReducer';
import { SHOP_NAMESPACE } from '~/store/shop/shopTypes';
import checkoutReducer, {CHECKOUT_NAMESPACE} from "~/store/checkout/checkoutReducers";

export default combineReducers({
    version: (state: number = version) => state,
    [CART_NAMESPACE]: cartReducer,
    [CHECKOUT_NAMESPACE]: checkoutReducer,
    [COMPARE_NAMESPACE]: compareReducer,
    [CURRENCY_NAMESPACE]: currencyReducer,
    [GARAGE_NAMESPACE]: garageReducer,
    [LANGUAGE_NAMESPACE]: languageReducer,
    [MOBILE_MENU_NAMESPACE]: mobileMenuReducer,
    [OPTIONS_NAMESPACE]: optionsReducer,
    [QUICKVIEW_NAMESPACE]: quickviewReducer,
    [SHOP_NAMESPACE]: shopReducer,
    [USER_NAMESPACE]: userReducer,
    [WISHLIST_NAMESPACE]: wishlistReducer,
});
