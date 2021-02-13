// application
import {AppAction} from '~/store/types';
import {ICartItemOption, ICartTotal} from '~/store/cart/cartTypes';
import {IProduct} from '~/interfaces/product';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_UPDATE_QUANTITIES = 'CART_UPDATE_QUANTITIES';
export const CART_UPDATE_TOTALS = 'CART_UPDATE_TOTALS'

export interface CartItemQuantity {
    itemId: number;
    value: number;
}

export interface CartAddItemAction {
    type: typeof CART_ADD_ITEM;
    product: IProduct;
    options: ICartItemOption[];
    quantity: number;
}

export interface CartRemoveItemAction {
    type: typeof CART_REMOVE_ITEM;
    itemId: number;
}

export interface CartUpdateQuantitiesAction {
    type: typeof CART_UPDATE_QUANTITIES;
    quantities: CartItemQuantity[];
}

export interface CartUpdateTotalsAction {
    type: typeof CART_UPDATE_TOTALS;
    totals: ICartTotal[]
}

export type CartAction =
    CartAddItemAction |
    CartRemoveItemAction |
    CartUpdateQuantitiesAction |
    CartUpdateTotalsAction;

export type CartThunkAction<T = void> = AppAction<CartAction, T>;
