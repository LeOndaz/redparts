import {Checkout} from "~/api/graphql/types";
import {
    CheckoutAction,
    CHECKOUT_SET,
    PaymentAction,
    PAYMENT_SET,
} from "~/store/checkout/checkoutActionTypes";

export function checkoutSet (checkout: Checkout | null): CheckoutAction {
    return {
        type: CHECKOUT_SET,
        checkout,
    }
}

export function paymentSet (paymentMethod: string): PaymentAction {
    return {
        type: PAYMENT_SET,
        paymentMethod,
    }
}
