import {Order} from "~/api/graphql/types";
import {IOrder} from "~/interfaces/order";
import {addressMap} from "~/api/graphql/addresses/addressMappers";


const getOrderTotal = (order: Order) => {
    return order.lines.reduce((tot, line) => {
        tot += line.totalPrice.gross.amount
    }, 0)
}


const orderMapIn = (order: Order): IOrder => {

    return {
        id: order.id,
        status: order.status,
        token: order.token,
        createdAt: order.created,
        note: order.customerNote,
        number: 123,
        total: 200,
        subtotal: [],
        totals: [],
        items: [],
        quantity: 0,
        payment: '',
        billingAddress: addressMap.in(order.billingAddress),
        shippingAddress: addressMap.in(order.shippingAddress),
    }
}

export const orderMap = {
    in: orderMapIn
}
