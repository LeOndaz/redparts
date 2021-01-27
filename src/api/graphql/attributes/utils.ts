import {Product} from "~/api/graphql/types";
import {IProductAttribute} from "~/interfaces/product";
import {selectedAttributeValuesMapIn, selectedAttrMapIn} from "~/api/graphql/attributes/attributeMappers";

export const getAttrsFromVariants = (product: Product): IProductAttribute[] => {
    const variants = product.variants;
    const variantAttrSlugs = product.productType.variantAttributes?.map(va => va!.slug)
    const variantAttrs: IProductAttribute[] = [];

    variantAttrSlugs?.forEach(slug => {

        variants?.forEach(variant => {
            const selectedAttr = variant!.attributes.find(selectedAttr => selectedAttr.attribute.slug === slug)
            if (selectedAttr) {
                // check if it exists in variantAttrs
                // if it does, add the new values and not the attribute as whole
                const va = variantAttrs.find(va => va.slug === selectedAttr.attribute.slug)

                if (va) {
                    va.values = [...va.values, ...selectedAttributeValuesMapIn(selectedAttr.values)]
                } else {
                    variantAttrs.push(selectedAttrMapIn(selectedAttr))
                }
            }
        })
    })

    return variantAttrs

}
