import {client, filterDefaultChannel} from "~/api";
import {
    Checkout, CheckoutCreateInput, CheckoutLineInput,
    CreateCheckoutDocument,
    GetOrderByIdDocument,
    GetOrderByTokenDocument,
    GetOrderListDocument, Order, PaymentInput
} from "~/api/graphql/types";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {handleRelayedResponse, handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {orderMap} from "~/api/graphql/orders/orderMappers";
import {DEFAULT_CHANNEL, getCurrentChannel} from "~/api/graphql/consts";
import {withAuth} from "~/api/graphql/users/authService";
import {ICheckoutData} from "~/api/base";
import {addressMap} from "~/api/graphql/addresses/addressMappers";
import {IOrder} from "~/interfaces/order";
import {getVariantByOptions} from "~/api/graphql/productVariants/utils";


const handleOrderSingleResponse = (res: any) => handleSingleResponse({
    inMapper: orderMap.in,
    dataField: 'order',
    res,
})

const handleOrderRelayedResponse = (res: any) => handleRelayedResponse({
    inMapper: orderMap.in,
    dataField: 'orders',
    res,
})


export const getOrderById = (id: string) => client.query({
    query: GetOrderByIdDocument,
    variables: {
        id,
    }
}).then(handleOrderSingleResponse)

export const getOrderByToken = (token: string) => client.query({
    query: GetOrderByTokenDocument,
    variables: {
        token,
    }
}).then(handleOrderSingleResponse)

export const getOrdersList = (variables: IBaseModelProps) => withAuth(client.query)({
    query: GetOrderListDocument,
    variables: {
        channel: DEFAULT_CHANNEL,
        ...variables,
    },
}).then(handleOrderRelayedResponse)
