import {GetPaymentGatewaysDocument, PaymentGateway} from "~/api/graphql/types";
import {client} from "~/api";
import {ICurrency} from "~/interfaces/currency";

export const getPaymentGateways = (currency: ICurrency): Promise<PaymentGateway[]> => {
    return client.query({
        query: GetPaymentGatewaysDocument,
    }).then(res => res.data.shop.availablePaymentGateways)
        .then(gateways => gateways.filter(gateway => gateway.currencies.includes(currency.code)))
}
