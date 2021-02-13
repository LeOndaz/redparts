import {IProduct} from "~/interfaces/product";
import {ICartItemOption} from "~/store/cart/cartTypes";

export const getDefaultVariantFromCartOptions = (product: IProduct, options: ICartItemOption[]) => {
    let variantOptions: ICartItemOption[] = [];

    product.defaultVariantOptions.every(opt => {

        const variant = product.variants
            .find(variant => variant.attributes
                .flat(1)
                .filter(attr => attr.name === opt.name && attr.values
                    .find(v => v.name === opt.slug)))

        if (variant) {
            variantOptions = variant.attributes.map(attr => ({
                name: attr.name,
                value: attr.values[0].name
            }))
        }
    })


    return variantOptions
}
