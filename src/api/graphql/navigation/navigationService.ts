import {ILanguage} from "~/interfaces/language";
import {client, filterDefaultChannel} from "~/api";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {GetMenuDocument} from "~/api/graphql/types";
import {navigationMenuMap} from "~/api/graphql/navigation/navigationMappers";
import {DEFAULT_CHANNEL} from "~/api/graphql/consts";


const handleMenuSingleResponse = (res: any) => handleSingleResponse({
    dataField: 'menu',
    inMapper: navigationMenuMap.in,
    res,
})

export const getMenuBySlug = (slug: string, language: ILanguage) => client.query({
    query: GetMenuDocument,
    variables: {
        slug,
        languageCode: language.code,
        channel: DEFAULT_CHANNEL,
    }
}).then(handleMenuSingleResponse)
