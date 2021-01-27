import {ILanguage} from "~/interfaces/language";
import {client, filterDefaultChannel} from "~/api";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {GetMenuDocument} from "~/api/graphql/types";
import {DEFAULT_CHANNEL, MenuSlugs} from "~/api/graphql/consts";
import {footerMap, navbarMap} from "~/api/graphql/navigation/navigationMappers";

const handleMenuForNavSingleResponse = (res: any) => handleSingleResponse({
    inMapper: navbarMap.in,
    dataField: 'menu',
    res,
})

const handleMenuForFooterSingleResponse = (res: any) => handleSingleResponse({
    inMapper: footerMap.in,
    dataField: 'menu',
    res,
})

export const getMenuBySlug = (slug: string, language: ILanguage) => client.query({
    query: GetMenuDocument,
    variables: {
        slug,
        languageCode: language.code,
        channel: DEFAULT_CHANNEL,
    }
})

export const getNavbarLinks = (language: ILanguage) => getMenuBySlug(MenuSlugs.Navbar, language).then(handleMenuForNavSingleResponse)
export const getFooterLinks = (language: ILanguage) => getMenuBySlug(MenuSlugs.Footer, language).then(handleMenuForFooterSingleResponse)
