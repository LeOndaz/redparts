import {client} from "~/api";
import {GetPageBySlugDocument} from "~/api/graphql/types";
import {ILanguage} from "~/interfaces/language";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {IPage} from "~/interfaces/page";
import {pageMap} from "~/api/graphql/pages/pageMappers";

export const handlePageSingleResponse = (res: any): IPage => handleSingleResponse({
    inMapper: pageMap.in,
    dataField: 'page',
    res,
})

export const getPageBySlug = (slug: string, language: ILanguage): Promise<IPage> => client.query({
    query: GetPageBySlugDocument,
    variables: {
        slug,
        languageCode: language.code,
    }
}).then(handlePageSingleResponse)

