import {AttributeValue, SelectedAttribute} from "~/api/graphql/types";
import {IProductAttribute, IProductAttributeValue} from "~/interfaces/product";
import {getMetadataItem, mapTranslatable} from "~/api/graphql/misc/helpers";
import {MetadataKeysEnum} from "~/api/graphql/consts";

export const selectedAttributeValuesMapIn = (values: AttributeValue[]): IProductAttributeValue[] => {
    return values.map(value => {
        let [name] = mapTranslatable(value, ['name'])

        return {
            name,
            slug: value.slug as string,
        }
    })
}

export const selectedAttrMapIn = (selectedAttr: SelectedAttribute): IProductAttribute => {
    let [name] = mapTranslatable(selectedAttr.attribute, ['name'])

    return {
        name: name,
        slug: selectedAttr.attribute.slug as string,
        featured: !!getMetadataItem(selectedAttr.attribute.metadata, MetadataKeysEnum.Featured, false),
        values: selectedAttributeValuesMapIn(selectedAttr.values),
    }
}


export const selectedAttributesMapIn = (selectedAttrs: SelectedAttribute[]): IProductAttribute[] =>
    selectedAttrs.map(selectedAttrMapIn)
