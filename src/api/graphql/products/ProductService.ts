import {GetProductByIdDocument, GetProductBySlugDocument, GetProductListDocument,} from '~/api/graphql/types';
import {queryById, queryBySlug, queryList} from "~/api/graphql/misc/helpers";
import {filterDefaultChannel, filterPublished, filterStack} from "~/api/graphql/misc/FilterService";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {handleRelayedResponse, handleSingleResponse, wrapService} from "~/api/graphql/misc/mappers/utils";
import {ApolloQueryResult} from "@apollo/client";
import {productMapIn} from "~/api/graphql/products/ProductMapper";

const handleProductSingleResponse = (res: ApolloQueryResult<any>) => handleSingleResponse({
    res,
    dataField: 'product',
    inMapper: productMapIn,
})

const handleProductRelayedResponse = (res: ApolloQueryResult<any>) => handleRelayedResponse({
    res,
    dataField: "products",
    inMapper: productMapIn,
})


const _getProductById = (id: string) => queryById(id, GetProductByIdDocument)
const _getProductBySlug = (slug: string) => queryBySlug(slug, GetProductBySlugDocument)
const _getProductList = (variables: IBaseModelProps) => queryList(
    filterStack([
        filterPublished,
        filterDefaultChannel,
    ], variables), GetProductListDocument)

/** exports */
export const getProductList = wrapService<IBaseModelProps>(_getProductList, handleProductRelayedResponse)
export const getProductById = wrapService<string>(_getProductById, handleProductSingleResponse)
export const getProductBySlug = wrapService<string>(_getProductBySlug, handleProductSingleResponse)
