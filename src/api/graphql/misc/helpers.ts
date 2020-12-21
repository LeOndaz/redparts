import {ApolloClient, DocumentNode} from '@apollo/client';
import {DEFAULT_CHANNEL} from "~/api/graphql/consts";
import {client} from "~/api";
import {IBaseModelProps} from "~/api/graphql/interfaces";

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

const queryByAttr = (conf: IQueryByAttr) => client.query({
    query: conf.query,
    variables: {
        [conf.attr]: conf.value
    },
});

const mutateByAttr = (conf: IMutateByAttr) => client.mutate({
    mutation: conf.mutation,
    variables: {
        [conf.attr]: conf.value
    }
})

export const queryById = (id: string, query: DocumentNode) => queryByAttr({
    attr: 'id',
    value: id,
    query: query,
});

export const queryBySlug = (slug: string, query: DocumentNode) => queryByAttr({
    attr: 'slug',
    value: slug,
    query: query,
});

export const queryList = (variables: IBaseModelProps, query: DocumentNode) => client.query({
    query,
    variables,
})

export const mutateById = (id: string, mutation: DocumentNode) => mutateByAttr({
    attr: 'id',
    value: id,
    mutation,
})

export const mutateBySlug = (slug: string, mutation: DocumentNode) => mutateByAttr({
    attr: 'slug',
    value: slug,
    mutation,
})

/** throw error with Intl ID to be able to handle it */
let throwErrorOrPass = (code: string, obj: any) => {
    if (code) {
        throw new Error(obj[code][1])
    }
}

export let throwAuthErrorOrPass = (code: string) => {
    throwErrorOrPass(code, SERVER_ERRORS.AUTH)
}
