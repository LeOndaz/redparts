import {
    GetAttributeBySlugDocument,
} from "~/api/graphql/types";
import {client} from "~/api";
import {ILanguage} from "~/interfaces/language";


export const getAttributeBySlug = (slug: string, language: ILanguage) => client.query({
    query: GetAttributeBySlugDocument,
    variables: {
        slug,
        languageCode: language.code
    },
})

