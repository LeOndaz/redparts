import {DocumentNode} from '@apollo/client';
import {DEFAULT_CHANNEL} from "~/api/graphql/consts";

let queryByAttr = (attr: string, value: string, query: DocumentNode) => ({
    query: query,
    variables: {
        [attr]: value
    },
});

export let queryById = (id: string, query: DocumentNode) => queryByAttr('id', id, query);
export let queryBySlug = (slug: string, query: DocumentNode) => queryByAttr('slug', slug, query);

export let title = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};


export let getOrNull = (obj: any) => obj ?? null
/** throw error with Intl ID to be able to handle it */
let throwErrorOrPass = (code: string, obj: any) => {
    if (code) {
        throw new Error(obj[code][1])
    }
}

export let throwAuthErrorOrPass = (code: string) => {
    throwErrorOrPass(code, SERVER_ERRORS.AUTH)
}
