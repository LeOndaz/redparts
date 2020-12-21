import {BADGES, DEFAULT_ATTR_SLUGS, DEFAULT_CHANNEL} from "~/api/graphql/consts";
import {ICustomFields} from "~/interfaces/custom-fields";
import * as util from "util";
import {AttributeValue} from "~/api/graphql/types";

interface filterable {
    filter?: {
        [propName: string]: any
    }

    [propName: string]: any
}

export const filterStack = (callables: any[], filterable: filterable) => {
    return callables.reduce((acc, filterFn) => filterFn(acc), filterable)
}

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
        channel: DEFAULT_CHANNEL,
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

export const filterHot = (filterable: filterable) => filterAttribute(filterable, DEFAULT_ATTR_SLUGS.BADGES, BADGES.HOT)
export const filterSale = (filterable: filterable) => filterAttribute(filterable, DEFAULT_ATTR_SLUGS.BADGES, BADGES.SALE)
export const filterNew = (filterable: filterable) => filterAttribute(filterable, DEFAULT_ATTR_SLUGS.BADGES, BADGES.NEW)
