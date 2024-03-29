import {IActiveFilter} from '~/interfaces/filter';
import {IFilterValues, IListOptions} from '~/interfaces/list';
import {IProductsList} from '~/interfaces/product';
import {IShopCategory} from '~/interfaces/category';
import {LANGUAGE_NAMESPACE} from '~/store/language/languageReducer';
import {SHOP_NAMESPACE} from '~/store/shop/shopTypes';
import {shopApi} from '~/api';
import {
    SHOP_FETCH_CATEGORY_SUCCESS,
    SHOP_FETCH_PRODUCTS_LIST_START,
    SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
    SHOP_INIT,
    SHOP_RESET_FILTER,
    SHOP_RESET_FILTERS,
    SHOP_SET_FILTER_VALUE,
    SHOP_SET_OPTION_VALUE,
    ShopFetchCategorySuccessAction,
    ShopFetchProductsListStartAction,
    ShopFetchProductsListSuccessAction,
    ShopInitAction, ShopResetFilterAction,
    ShopResetFiltersAction,
    ShopSetFilterValueAction,
    ShopSetOptionValueAction,
    ShopThunkAction,
} from '~/store/shop/shopActionTypes';

let cancelPreviousCategoryRequest = () => {
};
let cancelPreviousProductsListRequest = () => {
};

export function shopInit(
    categorySlug: string | null,
    options: IListOptions = {},
    filters: IFilterValues = {},
): ShopInitAction {
    return {
        type: SHOP_INIT,
        categorySlug,
        options,
        filters,
    };
}

export function shopFetchCategorySuccess(category: IShopCategory | null): ShopFetchCategorySuccessAction {
    return {
        type: SHOP_FETCH_CATEGORY_SUCCESS,
        category,
    };
}

export function shopFetchProductsListStart(): ShopFetchProductsListStartAction {
    return {
        type: SHOP_FETCH_PRODUCTS_LIST_START,
    };
}

export function shopFetchProductsListSuccess(productsList: IProductsList): ShopFetchProductsListSuccessAction {
    return {
        type: SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
        productsList,
    };
}

export function shopResetFilters(): ShopResetFiltersAction {
    return {
        type: SHOP_RESET_FILTERS,
    };
}

export function shopResetFilter(activeFilter: IActiveFilter): ShopResetFilterAction {
    return {
        type: SHOP_RESET_FILTER,
        activeFilter,
    };
}

export function shopSetOptionValue(option: string, value: string): ShopSetOptionValueAction {
    return {
        type: SHOP_SET_OPTION_VALUE,
        option,
        value,
    };
}

export function shopSetFilterValue(filter: string, value: string | null): ShopSetFilterValueAction {
    return {
        type: SHOP_SET_FILTER_VALUE,
        filter,
        value,
    };
}

export function shopFetchCategoryThunk(categorySlug: string | null): ShopThunkAction<Promise<void>> {
    return async (dispatch, getState) => {
        let canceled = false;

        cancelPreviousCategoryRequest();
        cancelPreviousCategoryRequest = () => {
            canceled = true;
        };

        const language = getState()[LANGUAGE_NAMESPACE].current

        let request: Promise<IShopCategory | null>;

        if (categorySlug) {
            request = shopApi.getCategoryBySlug(categorySlug, {}, language);
        } else {
            request = Promise.resolve(null);
        }

        const category = await request;

        if (canceled && process.browser) {
            return;
        }

        dispatch(shopFetchCategorySuccess(category));
    };
}

export function shopFetchProductsListThunk(): ShopThunkAction<Promise<void>> {
    return async (dispatch, getState) => {
        let canceled = false;

        cancelPreviousProductsListRequest();

        cancelPreviousProductsListRequest = () => {
            canceled = true;
        };
        dispatch(shopFetchProductsListStart());

        const state = getState()
        const shopState = state[SHOP_NAMESPACE];
        const language = state[LANGUAGE_NAMESPACE].current;


        let {filters} = shopState;

        if (shopState.categorySlug !== null) {
            filters = {...filters, category: shopState.categorySlug};
        }

        const productsList = await shopApi.getProductsList(shopState.options, filters, language);

        if (canceled && process.browser) {
            return;
        }

        dispatch(shopFetchProductsListSuccess(productsList));
    };
}

export function shopSetOptionValueThunk(option: string, value: string): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopSetOptionValue(option, value));
        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopSetFilterValueThunk(filter: string, value: string | null): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopSetFilterValue(filter, value));
        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopResetFiltersThunk(): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopResetFilters());
        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopResetFilterThunk(activeFilter: IActiveFilter): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopResetFilter(activeFilter));
        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopInitThunk(
    categorySlug: string | null,
    options: IListOptions = {},
    filters: IFilterValues = {},
): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopInit(categorySlug, options, filters));

        await Promise.all([
            dispatch(shopFetchCategoryThunk(categorySlug)),
            dispatch(shopFetchProductsListThunk()),
        ]);
    };
}
