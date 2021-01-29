import {useAppAction, useAppSelector} from "~/store/hooks";
import {CHECKOUT_NAMESPACE} from "~/store/checkout/checkoutReducers";
import {checkoutSet, paymentSet} from "~/store/checkout/checkoutActions";

// checkout
export function useCheckout(){
    return useAppSelector((state) => state[CHECKOUT_NAMESPACE].current.checkout)
}
export function useSetCheckout() {
    return useAppAction(checkoutSet)
}

// payment
export function usePaymentMethod(){
    return useAppSelector(state => state[CHECKOUT_NAMESPACE].current.paymentMethod)
}

export function useSetPayment (){
    return useAppAction(paymentSet)
}
