import {client} from "~/api";
import {GetPageBySlugDocument} from "~/api/graphql/types";
import {ILanguage} from "~/interfaces/language";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";

export const handlePageSingleResponse = (res: any) => handleSingleResponse({
    inMapper: (p: any) => p,
    dataField: 'page',
    res,
})

export const getPageBySlug = (slug: string, language: ILanguage) => client.query({
    query: GetPageBySlugDocument,
    variables: {
        slug,
        languageCode: language.code,
    }
})
