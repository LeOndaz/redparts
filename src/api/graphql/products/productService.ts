/* eslint-disable no-underscore-dangle */

import {ApolloQueryResult} from '@apollo/client';
import {
    GetProductByIdDocument,
    GetProductBySlugDocument,
    GetProductListDocument,
} from '~/api/graphql/types';
import {filterDefaultChannel, filterPublished} from '~/api/graphql/misc/FilterService';
import {IBaseModelProps} from '~/api/graphql/interfaces';
import {handleRelayedResponse, handleSingleResponse} from '~/api/graphql/misc/mappers/utils';
import {productMap} from '~/api/graphql/products/productMappers';
import {ILanguage} from "~/interfaces/language";
import {client} from "~/api";
import {getCurrentChannel} from "~/api/graphql/consts";

export const handleProductSingleResponse = (res: ApolloQueryResult<any> | any) => handleSingleResponse({
    res,
    dataField: 'product',
    inMapper: productMap.in,
});

export const handleProductRelayedResponse = (res: ApolloQueryResult<any> | any) => handleRelayedResponse({
    res,
    dataField: 'products',
    inMapper: productMap.in,
});

export const getProductById = (id: string, language: ILanguage) => client.query({
    query: GetProductByIdDocument,
    variables: {
        id,
        channel: getCurrentChannel(),
        languageCode: language.code,
    }
}).then(handleProductSingleResponse);

export const getProductBySlug = (slug: string, language: ILanguage) => client.query({
    query: GetProductBySlugDocument,
    variables: {
        slug,
        channel: getCurrentChannel(),
        languageCode: language.code,
    }
}).then(handleProductSingleResponse);

export const getProductList = (variables: IBaseModelProps, language: ILanguage) => client.query({
    query: GetProductListDocument,
    variables:
        filterPublished(
            filterDefaultChannel(
                {
                    ...variables,
                    languageCode: language.code,
                }
            )
        )
}).then(handleProductRelayedResponse);

/** exports */
// export const getProductList = (variables: IBaseModelProps) => wrapService(_getProductList, handleProductRelayedResponse)(variables);
// export const getProductById = (id: string, languageCode: LanguageCodeEnum = LanguageCodeEnum.En) => wrapService(_getProductById, handleProductSingleResponse)(id, languageCode);
// export const getProductBySlug = (slug: string, language: ILanguage) => wrapService(_getProductBySlug, handleProductSingleResponse)(slug, language.code);
