import {client, filterDefaultChannel, filterPublished, handleProductRelayedResponse} from "~/api";
import {GetCollectionBySlugDocument} from "~/api/graphql/types";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {ILanguage} from "~/interfaces/language";
import {collectionMap, ICollection} from "~/api/graphql/collections/collectionMappers";

const handleCollectionSingleResponse = (res: any) => handleSingleResponse({
    dataField: 'collection',
    // this is just for creating a response like object so that
    // we can use handleProductRelayedResponse
    inMapper: collectionMap.in,
    res,
})

export const getCollectionBySlug = (slug: string, productVariables: IBaseModelProps, language: ILanguage): Promise<ICollection> => client.query({
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

