import {GetPaymentGatewaysDocument, PaymentGateway} from "~/api/graphql/types";
import {client} from "~/api";

export const getPaymentGateways = (): Promise<PaymentGateway[]> => {
    return client.query({
        query: GetPaymentGatewaysDocument,
    }).then(res => res.data.shop.availablePaymentGateways)
}
