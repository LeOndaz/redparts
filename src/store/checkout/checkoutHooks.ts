import {useAppAction, useAppSelector, useIsUnmountedRef} from "~/store/hooks";
import {CHECKOUT_NAMESPACE} from "~/store/checkout/checkoutReducers";
import {checkoutSet, paymentSet} from "~/store/checkout/checkoutActions";
import {useUser} from "~/store/user/userHooks";
import {useRouter} from "next/router";
import {useEffect, useMemo} from "react";
import {useDeferredData} from "~/services/hooks";
import {accountApi} from "~/api";
import {useLanguage} from "~/services/i18n/hooks";
import url from "~/services/url";

// checkout
export function useCheckout() {
    const user = useUser();
    const router = useRouter();
    const setCheckout = useSetCheckout();
    const language = useLanguage();
    const stateCheckout = useAppSelector((state) => state[CHECKOUT_NAMESPACE].current.checkout)
    const {token} = router.query;
    const checkout = useDeferredData(() => accountApi.getCheckoutByToken(token, language), null)
    const isUnMounted = useIsUnmountedRef();

    useEffect(() => {
        if (!user) return;

        if (!checkout.isLoading && user && !checkout.data) {
            router.push(url.checkout()).then()
        }

        const {token} = router.query
        accountApi.getCheckoutByToken(token, language).then(c => {
            if (isUnMounted.current) return;

            if (c) setCheckout(c);
        })
    }, [checkout.isLoading, setCheckout, user, isUnMounted])

    return useMemo(() => {
        return user ? checkout.data : stateCheckout
    }, [user, stateCheckout, checkout.isLoading]);
}

export function useSetCheckout() {
    return useAppAction(checkoutSet)
}

// payment
export function usePaymentMethod() {
    return useAppSelector(state => state[CHECKOUT_NAMESPACE].current.paymentMethod)
}

export function useSetPayment() {
    return useAppAction(paymentSet)
}
