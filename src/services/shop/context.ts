// react
import React from 'react';
import {IProductVariant} from "~/interfaces/product";

export const ProductVariantContext = React.createContext<IProductVariant | null>(null);

export const ProductSetVariantContext = React.createContext<(variant: IProductVariant | null) => void>(() => {})

ProductVariantContext.displayName = "VariantContext";
ProductSetVariantContext.displayName = "SetVariantContext";
