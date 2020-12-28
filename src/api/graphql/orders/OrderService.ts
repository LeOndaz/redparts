import {client} from "~/api";
import {GetOrderByIdDocument, GetOrderByTokenDocument, GetOrderListDocument} from "~/api/graphql/types";
import {IBaseModelProps} from "~/api/graphql/interfaces";


export const getOrderById = (id: string) => client.query({
    query: GetOrderByIdDocument,
    variables: {
        id,
    }
})

export const getOrderByToken = (token: string) => client.query({
    query: GetOrderByTokenDocument,
    variables: {
        token,
    }
})

export const getOrdersList = (variables: IBaseModelProps) => client.query({
    query: GetOrderListDocument,
    variables,
})
