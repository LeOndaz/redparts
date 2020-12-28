import {client, filterDefaultChannel, filterPublished, handleProductRelayedResponse} from "~/api";
import {Collection, GetCollectionBySlugDocument} from "~/api/graphql/types";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {ILanguage} from "~/interfaces/language";

const handleCollectionSingleResponse = (res: any) => handleSingleResponse({
    dataField: 'collection',
    // this is just for creating a response like object so that
    // we can use handleProductRelayedResponse
    inMapper: (collection: Collection) => ({
        data: {
            products: collection.products,
        },
    }),
    res,
})

const getCollectionBySlug = (slug: string, productVariables: IBaseModelProps, language: ILanguage) => client.query({
    query: GetCollectionBySlugDocument,
    variables: {
        slug,
        languageCode: language.code,
        ...filterPublished(
            filterDefaultChannel(
                productVariables,
            )
        ),
    }
}).then(handleCollectionSingleResponse)

export const getProductsByCollectionSlug = (slug: string, productVariables: IBaseModelProps, language: ILanguage) => getCollectionBySlug(slug, productVariables, language)
    .then(handleProductRelayedResponse)
