import {AttributeValue, PageInfo, Product, SelectedAttribute} from "~/api/graphql/types";
import {
    IProductAttribute,
    IProductOption,
    IProductOptionValueBase,
    IProductTypeAttributeGroup
} from "~/interfaces/product";
import {ApolloQueryResult} from "@apollo/client";
import {cursorNavigationMap} from "~/api/graphql/misc/mappers/navigation";
import {ICursorBasedNavigation} from "~/interfaces/list";
import {mapTranslatable, removeUndefined} from "~/api/graphql/misc/helpers";

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
            slug: attribute.slug,
            featured: isFeatured,
            values: values.map(val => ({
                name: val.name,
                slug: val.slug,
            }))
        })

    })

    return {
        attrs,
        attrGroups,
    }
}

export let mapVariantAttrsToOptions = (product: Product): IProductOption[] => {
    const variants = product.variants || [];
    const variantAttrs = product.productType.variantAttributes || [];
    const options: IProductOption[] = [];

    variantAttrs.forEach(variantAttr => {
        const [attrName] = mapTranslatable(variantAttr, ['name']);
        let option: IProductOption;

        const values = variants.map(v => v?.attributes || [])
            .flat(1)
            .filter(({attribute}) => attribute.slug === variantAttr?.slug)
            .map(a => a.values)
            .flat(1)

        const existingAttrIdx = options.findIndex((i) => i.slug === variantAttr?.slug)
        if (existingAttrIdx !== -1) {  // -1 means not found
            const existingAttr = options[existingAttrIdx];
            const newValues = [...existingAttr.values];

            values.forEach(val => {
                newValues.push({
                    name: val.name,
                    slug: val.slug,
                })
            })

            // @ts-ignore
            options[existingAttrIdx] = {
                ...existingAttr,
                values: newValues,
            }
        } else {
            option = {
                name: attrName,
                slug: variantAttr.slug as string,
                values: values.map(v => {
                    let [name] = mapTranslatable(v, ['name'])

                    return {
                        name,
                        slug: v!.slug as string
                    }
                }),
                type: "default",
            }

            options.push(option)
        }

    })
    console.log(options)
    return options

    // let options: IProductOption[] = [];
    //
    //
    // product.defaultVariant!.attributes.map(defVariant => {
    //
    //     let requiredAttr = defVariant.attribute;
    //     let requiredValues: IProductOptionValueBase[] = [];
    //
    //     let selectedAttrObjects = product.variants
    //         ?.map(variant => variant?.attributes.filter(selectedAttr => selectedAttr.attribute.id == requiredAttr.id))
    //         .map(selectedAttrArray => selectedAttrArray?.[0] || null)
    //
    //     selectedAttrObjects?.map(obj => obj?.values).map(values => {
    //         values?.forEach(val => {
    //             requiredValues.filter(reqVal => reqVal.slug === val?.id).length === 0 && requiredValues.push({
    //                 name: val?.name,
    //                 slug: val?.slug,
    //             })
    //         })
    //     })
    //
    //     let option: IProductOption = {
    //         name: requiredAttr.name,
    //         slug: requiredAttr.slug,
    //         type: 'default',
    //         values: requiredValues,
    //     }
    //     requiredValues.length > 0 && options.push(option)
    // });
    //
    // /* remove undefined key-vals */
    // return removeUndefined(options);
}

interface handlerArgs {
    res: ApolloQueryResult<any>;
    dataField: string;
    errorsField?: string;
    inMapper?: (arg: any) => any;
    relay?: boolean;
}


export const handleSingleResponse = (config: handlerArgs) => {
    const {res, dataField, inMapper} = config

    let item = res.data[dataField] || null

    if (item) {
        item = inMapper ? inMapper(item) : item

        return item
    }

    return null
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

    if (relay) {
        dataList = res.data[dataField].edges.map(edge => edge.node).map(inMapper)
    } else {
        dataList = res.data[dataField].map(inMapper)
    }

    const totalCount = res.data.totalCount;
    const pageInfo = res.data[dataField].pageInfo
    const getNavigation = (first: number) => cursorNavigationMap.in(pageInfo, first, totalCount)
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
