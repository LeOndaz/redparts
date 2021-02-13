import {Checkout, Order} from "~/api/graphql/types";
import {IOrder, IOrderItem, IOrderTotal} from "~/interfaces/order";
import {addressMap} from "~/api/graphql/addresses/addressMappers";
import {productMap} from "~/api/graphql/products/productMappers";
import {mapVariantAttrsToOptions} from "~/api/graphql/misc/mappers/utils";

const getOrderTotal = (order: Order) => {
    return order.lines.reduce((total, line) => total += line!.totalPrice.gross.amount, 0) as number
}

const getOrderQuantity = (order: Order) => {
    return order.lines.reduce((quantity, line) => quantity += line!.quantity, 0)
}

const getOrderTotals = (order: Order): IOrderTotal[] => {
    return order.lines.map(line => {
        const title = line!.translatedProductName || line!.translatedProductName

        return {
            title,
            price: line!.totalPrice.gross.amount,
        }
    })
}

const orderMapIn = (order: Order): IOrder => {
    const total = getOrderTotal(order);
    const quantity = getOrderQuantity(order);
    const totals: IOrderTotal[] = getOrderTotals(order);
    const billingAddress = addressMap.in(order.billingAddress!)
    const shippingAddress = addressMap.in(order.shippingAddress!);

    const items: IOrderItem[] = order.lines.map(line => {
        const product = productMap.in(line!.variant!.product)
        const options = mapVariantAttrsToOptions([line!.variant!], line!.variant!.product.productType)

        return {
            total: line!.totalPrice.gross.amount,
            price: line!.unitPrice.gross.amount,
            quantity: line!.quantity,
            product,
            options,
        }
    });

    return {
        id: order.id,
        status: order.status,
        token: order.token,
        createdAt: order.created,
        note: order.customerNote,
        number: order.number as string,
        subtotal: order.subtotal.gross.amount,
        payment: '',
        paymentStatus: order.paymentStatus,
        totals,
        total,
        items,
        quantity,
        billingAddress,
        shippingAddress,
    }
}

export const orderMap = {
    in: orderMapIn
}
