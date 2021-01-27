import {ICheckoutItemOptionData} from "~/api/base";
import {IProduct, IProductVariant} from "~/interfaces/product";

export const getVariantByOptions = (product: IProduct, options: ICheckoutItemOptionData[], by = 'slug'): IProductVariant | null => {
    const variants = product.variants;
    const result = variants.filter(variant => {
        const attributes = variant.attributes;

        return options.every(opt => {
            const {name: attrSlug, value: valueSlug } = opt;
            const attribute = attributes.find(attr => attr[by] === attrSlug)

            if (!attribute) {
                console.log('return false')
                return false;
            }
            return attribute.values.find(value => value[by] === valueSlug)

        })
    })

    return result.length === 1 ? result[0] : null
}
