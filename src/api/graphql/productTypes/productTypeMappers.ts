import {Product} from "~/api/graphql/types";
import {IProductType} from "~/interfaces/product";


const productTypeMapIn = (product: Product): IProductType => {
    const productType = product.productType;
    const variantAttrSlugs = productType.variantAttributes?.map(value => value!.slug) as string[]
    const productTypeAttrSlugs = productType.productAttributes?.map(value => value!.slug) as string[]

    return {
        name: productType.name,
        slug: productType.slug,
        attributeGroups: [
            {
                name: 'General',
                slug: 'general-specs',
                attributes: productTypeAttrSlugs,
            },
            {
                name: "Specific",
                slug: "variant-specs",
                attributes: variantAttrSlugs,
            }
        ]
    }
}

export const productTypeMap = {
    in: productTypeMapIn,
}
