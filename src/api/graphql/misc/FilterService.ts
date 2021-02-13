import {Badges, DEFAULT_CHANNEL, attrSlugsEnum, getCurrentChannel, MetadataKeysEnum} from "~/api/graphql/consts";
import {ICustomFields} from "~/interfaces/custom-fields";
import * as util from "util";
import {AttributeValue, MetadataItem} from "~/api/graphql/types";

interface filterable {
    filter?: {
        [propName: string]: any
    }

    [propName: string]: any
}

// export const filterStack = (filterFns: any[], filterable: filterable) => {
//     return filterFns.reduce((acc, filterFn) => filterFn(acc), filterable)
// }

const filter = (filterable: filterable, filters: ICustomFields): filterable => {
    /** All filters are stackable, you can filter1(filter(2filterN((filterableObj))) */
    return {
        ...filterable,
        filter: {
            ...filterable.filter,
            ...filters,
        }
    }
}

export const filterPublished = (filterable: filterable): filterable => {
    return filter(filterable, {
        isPublished: true,
    })
}

export const filterDefaultChannel = (filterable: filterable): filterable => {
    return filter(filterable, {
        channel: getCurrentChannel(),
    })
}

export const filterMetadata = (filterable: filterable, obj: MetadataItem): filterable => {
    return filter(filterable, {
        metadata: [...filterable.metadata, obj]
    })
}

const filterAttribute = (filterable: filterable, slug: string, value?: string, values?: AttributeValue[]): filterable => {
    return filter(filterable, {
        attributes: [
            ...(filterable.filter?.attributes ? filterable.filter.attributes : []),
            {
                slug,
                ...(value ? {value} : {}),
                ...(values ? {values} : {})
            }],
    })
}


export const filterHot = (filterable: filterable) => filterAttribute(filterable, attrSlugsEnum.Badges, Badges.Hot)
export const filterSale = (filterable: filterable) => filterAttribute(filterable, attrSlugsEnum.Badges, Badges.Sale)
export const filterNew = (filterable: filterable) => filterAttribute(filterable, attrSlugsEnum.Badges, Badges.New)

/** filter featured */
export const FilterFeatured = (filterable: filterable) => filterMetadata(filterable, {
    key: MetadataKeysEnum.Featured,
    value: "On"
})
