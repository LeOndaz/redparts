import {ICheckoutState} from "~/store/checkout/checkoutTypes";
import {CHECKOUT_SET, CheckoutAction, PAYMENT_SET, PaymentAction} from "~/store/checkout/checkoutActionTypes";
import {withClientState} from "~/store/client";

const initialState: ICheckoutState = {
    current: {
        checkout: null,
        paymentMethod: null
    },
};

export const CHECKOUT_NAMESPACE = 'checkout';

function checkoutBaseReducer(state = initialState, action: CheckoutAction | PaymentAction): ICheckoutState {
    if (action.type === CHECKOUT_SET) {
        return {
            current: {
                ...state.current,
                checkout: action.checkout,
            }
        };
    }

    if (action.type === PAYMENT_SET){
        return {
            current: {
                ...state.current,
                paymentMethod: action.paymentMethod,
            }
        }
    }

    return state;
}

const checkoutReducer = withClientState(checkoutBaseReducer, CHECKOUT_NAMESPACE);

export default checkoutReducer;
