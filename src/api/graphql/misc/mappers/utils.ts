import {Product} from "~/api/graphql/types";
import {
    IProductAttribute,
    IProductOption,
    IProductOptionValueBase,
    IProductTypeAttributeGroup
} from "~/interfaces/product";
import _ from "lodash"
import {ApolloQueryResult} from "@apollo/client";
import {productMapIn} from "~/api/graphql/products/ProductMapper";
import {CategoryType, IShopCategoryLayout} from "~/interfaces/category";
import {blogCategoryMapIn, categoryMapIn, shopCategoryMapIn} from "~/api/graphql/categories/CategoryMapper";
import {ICustomFields} from "~/interfaces/custom-fields";

export let getProductAttrs = (product: Product) => {
    const attrs: IProductAttribute[] = [];
    const attrGroups: IProductTypeAttributeGroup[] = [];

    product.attributes.forEach(({attribute, values}) => {
        let attrGroupName = 'General';
        let isFeatured = false;

        if (attribute.metadata) {
            attrGroupName = attribute.metadata.find(keyVal => keyVal.key.toLowerCase() === 'group')?.value || attrGroupName
            isFeatured = (attribute.metadata.find(keyVal => keyVal.key.toLowerCase() === 'featured') !== undefined) || isFeatured
        }

        let group = attrGroups.find(group => group.slug === attrGroupName.toLowerCase());
        if (group) {
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

    product.defaultVariant!.attributes.map(defVariant => {

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

interface handlerArgs {
    res: ApolloQueryResult<any>,
    dataField: string,
    errorsField?: string,
    inMapper: (arg: any) => any
}

export const handleSingleResponse = (config: handlerArgs) => {
    const {res, dataField, inMapper} = config
    let item = res.data[dataField]

    if (item) {
        return inMapper(item)
    }

    return null
}


export const handleRelayedResponse = (config: handlerArgs) => {
    const {res, dataField, errorsField, inMapper} = config

    const dataList = _.map(res.data[dataField].edges, 'node').map(inMapper)
    const pageInfo = res.data[dataField].pageInfo
    const totalCount = res.data.totalCount;
    const errors = errorsField ? _.defaultTo(res.data[errorsField], []) : [];

    return [
        dataList,
        pageInfo,
        totalCount,
        errors,
    ]

}

/** wraps a service (a promise returning data) with a handler that's called on the response
 * -returns handler(response)
 *
 **/
export const wrapService = <T>(service: (...args: any[]) => Promise<any>, responseHandler: (res: ApolloQueryResult<any>, ...args: any) => any, ...handlerArgs: any[]) => (input: T) => {
    console.log(handlerArgs, ' #handlerArgs')
    return service(input).then(r => responseHandler(r, ...handlerArgs))
}
