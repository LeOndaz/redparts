import {Product} from "~/api/graphql/types";
import {
    IProductAttribute,
    IProductOption,
    IProductOptionValueBase,
    IProductTypeAttributeGroup
} from "~/interfaces/product";

export let getProductAttrs = (product: Product) => {
    const attrs: IProductAttribute[] = [];
    const attrGroups: IProductTypeAttributeGroup[] = [];

    product.attributes.forEach(({attribute, values}) => {
        let attrGroupName = 'General';
        let isFeatured = false;

        if (attribute.metadata){
            attrGroupName = attribute.metadata.find(keyVal => keyVal.key.toLowerCase() === 'group')?.value || attrGroupName
            isFeatured = (attribute.metadata.find(keyVal => keyVal.key.toLowerCase() === 'featured') !== undefined) || isFeatured
        }

        let group = attrGroups.find(group => group.slug === attrGroupName.toLowerCase());
        if (group){
            group.attributes.push(attribute.name)
        } else {
            attrGroups.push({
                name: attrGroupName,
                slug: attrGroupName.toLowerCase(),
                attributes: [attribute.name]
            })
        }

        attrs.push({
            name: attribute.name,
            slug: attribute.id, /* can't query by attribute.slug */
            featured: isFeatured,
            values: values.map(val => ({
                name: val.name,
                slug: val.id,
            }))
        })

    })

    return {
        attrs,
        attrGroups,
    }
}

export let mapVariantAttrsToOptions = (product: Product): IProductOption[] => {
    let options: IProductOption[] = [];

    product.defaultVariant?.attributes.map(defVariant => {

        let requiredAttr = defVariant.attribute;
        let requiredValues: IProductOptionValueBase[] = [];

        let selectedAttrObjects = product.variants
            ?.map(variant => variant?.attributes.filter(selectedAttr => selectedAttr.attribute.id == requiredAttr.id))
            .map(selectedAttrArray => selectedAttrArray?.[0] || null)

        selectedAttrObjects?.map(obj => obj?.values).map(values => {
            values?.forEach(val => {
                requiredValues.filter(reqVal => reqVal.slug === val?.id).length === 0 && requiredValues.push({
                    name: val?.name,
                    slug: val?.id,
                })
            })
        })

        let option: IProductOption = {
            name: requiredAttr.name,
            slug: requiredAttr.id,
            type: 'default',
            values: requiredValues,
        }
        requiredValues.length > 0 && options.push(option)
    });

    /* remove undefined key-vals */
    return JSON.parse(JSON.stringify(options));
}

