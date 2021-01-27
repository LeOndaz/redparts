import {useContext} from "react";
import {ProductSetVariantContext, ProductVariantContext} from "~/services/shop/context";

export function useVariant() {
    return useContext(ProductVariantContext)
}

export function useSetVariant() {
    return useContext(ProductSetVariantContext)
}

