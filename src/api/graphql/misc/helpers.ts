import {DocumentNode} from '@apollo/client';
import {client} from "~/api";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {ICustomFields} from "~/interfaces/custom-fields";
import {AuthError} from "~/api/errors";
import {
    Attribute,
    AttributeValue,
    Category,
    Collection,
    MenuItem,
    MetadataItem, PaymentGateway,
    Product,
    SelectedAttribute
} from "~/api/graphql/types";

interface IAttr {
    attr: string
    value: string
}

interface IQueryByAttr extends IAttr {
    query: DocumentNode
}

interface IMutateByAttr extends IAttr {
    mutation: DocumentNode
}

const queryByAttr = (conf: IQueryByAttr, variables: ICustomFields = {}) => client.query({
    query: conf.query,
    variables: {
        [conf.attr]: conf.value,
        ...variables,
    },
});

const mutateByAttr = (conf: IMutateByAttr, variables: ICustomFields = {}) => client.mutate({
    mutation: conf.mutation,
    variables: {
        [conf.attr]: conf.value,
        ...variables,
    }
})

export const queryById = (id: string, query: DocumentNode, variables: ICustomFields = {}) => queryByAttr({
    attr: 'id',
    value: id,
    query: query,
}, variables);

export const queryBySlug = (slug: string, query: DocumentNode, variables: ICustomFields = {}) => queryByAttr({
    attr: 'slug',
    value: slug,
    query: query,
}, variables);


export const mutateById = (id: string, mutation: DocumentNode, variables: ICustomFields = {}) => mutateByAttr({
    attr: 'id',
    value: id,
    mutation,
}, variables)

export const mutateBySlug = (slug: string, mutation: DocumentNode, variables: ICustomFields = {}) => mutateByAttr({
    attr: 'slug',
    value: slug,
    mutation,
}, variables)


/** throw error with Intl ID to be able to handle it */
let throwErrorFromObj = (code: string, obj: Enumerable<any>) => {
    throw new Error(obj[code])
}

export let throwAuthError = (code: string) => {
    throwErrorFromObj(code, AuthError)
}


export const getMetadataItem = (metadata: MetadataItem[], key: string, defaultTo: any = '') => {
    const item = metadata.find(item => item.key.toLowerCase() === key.toLowerCase())
    return item ? item.value : defaultTo
}

export const getAttribute = (slug: string, selectedAttrs: SelectedAttribute[]) =>
    selectedAttrs.filter(sa => sa.attribute.slug === slug)

export const getAttributeValues = (slug: string, selectedAttrs: SelectedAttribute[], mapTo = 'name') => {
    let result = getAttribute(slug, selectedAttrs).map(sa => sa.values)

    if (result.length === 0) {
        return []
    }

    // @ts-ignore value not indexable
    return result
        .flat(1)
        .map(value => value ? value.translation ? value.translation[mapTo] : value[mapTo] : null)
        .filter(Boolean)
}

export const getAttributeValue = (slug: string, selectedAttrs: SelectedAttribute[], defaultTo?: string, mapTo?: string) => {
    const result = getAttributeValues(slug, selectedAttrs, mapTo)

    return result[0] || defaultTo
}

export const handleAccountErrors = (traverse: string) => {
    return (res: any) => {
        const {accountErrors} = res.data[traverse];

        if (!isEmpty(accountErrors)) {
            throw new Error(accountErrors[0].code)
        }

        return res
    }
}
export const handleMetadataErrors = (res: any) => {
    return res
}

export const loadLocal = (key: string) => JSON.parse(localStorage.getItem(key) || "null")


export const saveLocal = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value))


export const clone = (obj: any) => JSON.parse(JSON.stringify(obj))
export const removeUndefined = clone;

type translatable = Product | Attribute | Category | Collection | MenuItem | AttributeValue | null

export const mapTranslatable = (obj: translatable, attrs: string[]) => {
    if (obj === null) throw Error('NULL object passed as a translatable.')

    if (obj.translation) {
        // @ts-ignore index-error
        return attrs.map(attrName => obj.translation[attrName])
    } else {
        // @ts-ignore index-error
        return attrs.map(attrName => obj[attrName])
    }
}

/** a hack to create a relay response like object to use handlers on the object */
export const mockRelayResponse = (obj: any, key: string) => {
    return {
        data: {
            [key]: obj
        }
    }
}

export const isEmpty = (arr: any[]) => arr.length === 0

export const getFieldFromGatewayConfig = (field: string, gateway: PaymentGateway) => gateway.config.find(o => o.field === field)?.value


export const getCurrencySymbol = (locale: string, code: string) => {
    return (0).toLocaleString(
        locale,
        {
            style: 'currency',
            currency: code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    ).replace(/\d/g, '').trim()
}
