import {GetCountriesDocument, LanguageCodeEnum} from "~/api/graphql/types";
import {client} from "~/api";

export class UtilsService {
    getCountries(languageCode?: LanguageCodeEnum) {
        return client.query({
            query: GetCountriesDocument,
            variables: {
                languageCode,
            }
        })
    }
}
