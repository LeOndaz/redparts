import {DocumentNode} from '@apollo/client';
import {client} from "~/api";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {ICustomFields} from "~/interfaces/custom-fields";
import {AuthError} from "~/api/errors";
import {Attribute, Category, MetadataItem, Product, SelectedAttribute} from "~/api/graphql/types";
import _ from "lodash";

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

export const queryList = (variables: IBaseModelProps, query: DocumentNode) => client.query({
    query,
    variables,
})

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


export interface idArg {
    id: string
}

export interface slugArg {
    slug: string
}

export interface userIdArg {
    userId: string
}


export const getMetadataItem = (metadata: MetadataItem[], key: string, defaultTo: any = '') => {
    const item = metadata.find(item => item.key.toLowerCase() === key.toLowerCase())
    return item ? item.value : defaultTo
}

export const getAttribute = (slug: string, selectedAttrs: SelectedAttribute[]) =>
    selectedAttrs.filter(sa => sa.attribute.slug === slug)

export const getAttributeValues = (slug: string, selectedAttrs: SelectedAttribute[], mapTo = 'name') => {
    let result = getAttribute(slug, selectedAttrs).map(sa => sa.values)

    if (_.isEmpty(result)) {
        return []
    }

    // @ts-ignore
    return _.flatten(result).map(value => value ? value[mapTo] : null).filter(Boolean)
}

export const getAttributeValue = (slug: string, selectedAttrs: SelectedAttribute[], defaultTo?: string, mapTo?: string) => {
    const result = getAttributeValues(slug, selectedAttrs, mapTo)

    if (!_.isEmpty(result)) {
        return _.head(result)
    }

    return defaultTo || ''
}

export const handleAccountErrors = (traverse: string) => {
    return (res: any) => {
        const {accountErrors} = res.data[traverse];

        if (!_.isEmpty(accountErrors)) {
            throw new Error(accountErrors[0].code)
        }

        return res
    }
}
export const handleMetadataErrors = (res: any) => {
    return res
}

export const loadLocal = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "null")
}

export const saveLocal = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

export const clone = (obj: any) => JSON.parse(JSON.stringify(obj))

export const mapTranslatable = (obj: Product | Attribute | Category, attrs: string[]) => {
    if (obj.translation) {
        // @ts-ignore
        return attrs.map(attrName => obj.translation[attrName])
    } else {
        // @ts-ignore
        return attrs.map(attrName => obj[attrName])
    }
}
