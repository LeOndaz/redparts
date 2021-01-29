import {useContext} from "react";
import {ProductSetVariantContext, ProductVariantContext} from "~/services/shop/context";
import {useAppSelector} from "~/store/hooks";
import {CHECKOUT_NAMESPACE} from "~/store/checkout/checkoutReducers";

export function useVariant() {
    return useContext(ProductVariantContext)
}

export function useSetVariant() {
    return useContext(ProductSetVariantContext)
}
