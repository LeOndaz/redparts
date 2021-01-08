import {PageInfo, Product} from "~/api/graphql/types";
import {
    IProductAttribute,
    IProductOption,
    IProductOptionValueBase,
    IProductTypeAttributeGroup
} from "~/interfaces/product";
import {ApolloQueryResult} from "@apollo/client";
import {cursorNavigationMap} from "~/api/graphql/misc/mappers/navigation";
import {ICursorBasedNavigation} from "~/interfaces/list";

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
    res: ApolloQueryResult<any>;
    dataField: string;
    errorsField?: string;
    inMapper: (arg: any) => any;
    relay?: boolean;
}


export const handleSingleResponse = (config: handlerArgs) => {
    const {res, dataField, inMapper, errorsField } = config

    const item = res.data[dataField] || null
    // const errors = errorsField ? res.data[errorsField] : []

    return item ? inMapper(item) : null

    // return {
    //     item,
    //     errors,
    // }
}

export interface RelayedResponse<T> {
    dataList: T[],
    getNavigation: (first: number) => ICursorBasedNavigation;
    totalCount: number;
    errors: any[];
}

export const handleRelayedResponse = (config: handlerArgs): RelayedResponse<any> => {
    const {res, dataField, errorsField, inMapper, relay = true} = config

    let dataList: any[];

    if (relay){
        dataList = res.data[dataField].edges.map(edge => edge.node).map(inMapper)
    } else {
        dataList = res.data[dataField].map(inMapper)
    }

    const totalCount = res.data.totalCount;

    let pageInfo = res.data[dataField].pageInfo
    let getNavigation = (first: number) => cursorNavigationMap.in(pageInfo, first, totalCount)

    const errors = res.data[errorsField!] || [];

    return {
        dataList,
        getNavigation,
        totalCount,
        errors,
    }

}

/** wraps a service (a promise returning data) with a handler that's called on the response
 * -returns handler(response)
 *
 **/
/// export const wrapService = <T>(service: (...args: any[]) => Promise<any>, responseHandler: (res: ApolloQueryResult<any>, ...args: any) => any, ...handlerArgs: any[]) =>
//     (serviceArgs: T) => {
//         console.log(handlerArgs, ' #handlerArgs')
//         return service(serviceArgs).then(r => responseHandler(r, ...handlerArgs))
//     }

//
// export const wrapService = (service: (...args: any[]) => Promise<any>, responseHandler: (res: any, ...handlerAgs: any) => any, ...handlerArgs: any[]) =>
//     (...serviceArgs: any[]) => {
//         console.log(handlerArgs, ' #handlerArgs')
//         return service(...serviceArgs).then(r => responseHandler(r, ...handlerArgs))
//     }
