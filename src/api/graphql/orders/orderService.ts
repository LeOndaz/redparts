import {client} from "~/api";
import {
    GetOrderByIdDocument,
    GetOrderByTokenDocument,
    GetOrdersListDocument, User,
} from "~/api/graphql/types";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {handleRelayedResponse, handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {orderMap} from "~/api/graphql/orders/orderMappers";
import {DEFAULT_CHANNEL} from "~/api/graphql/consts";
import {withAuth} from "~/api/graphql/users/authService";
import {ILanguage} from "~/interfaces/language";
import {ApolloQueryResult} from "@apollo/client";
import {mockRelayResponse} from "~/api/graphql/misc/helpers";


const handleOrderSingleResponse = (res: any) => handleSingleResponse({
    inMapper: orderMap.in,
    dataField: 'order',
    res,
})

const handleOrderByTokenResponse = (res: any) => handleSingleResponse({
    inMapper: orderMap.in,
    dataField: 'orderByToken',
    res,
})

const handleOrderRelayedResponse = (res: any) => handleRelayedResponse({
    inMapper: orderMap.in,
    dataField: 'orders',
    res,
})


export const getOrderById = (id: string, language: ILanguage) => client.query({
    query: GetOrderByIdDocument,
    variables: {
        id,
        languageCode: language.code,
    }
}).then(handleOrderSingleResponse)

export const getOrderByToken = (token: string, language: ILanguage) => client.query({
    query: GetOrderByTokenDocument,
    variables: {
        token,
        languageCode: language.code,
    }
}).then(handleOrderByTokenResponse)

export const getOrdersList = (variables: IBaseModelProps, language: ILanguage) => withAuth(client.query)({
    query: GetOrdersListDocument,
    variables: {
        channel: DEFAULT_CHANNEL,
        ...variables,
        languageCode: language.code
    },
}).then(res => {
    const orderRelayedResponse = mockRelayResponse(res.data.user.orders, 'orders')
    return handleOrderRelayedResponse(orderRelayedResponse)
})
