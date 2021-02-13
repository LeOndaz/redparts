import {CheckoutComplete} from "~/api/graphql/types";
import {IOrder} from "~/interfaces/order";

export type MappedCheckoutComplete = Omit<CheckoutComplete, 'order'> & {order: IOrder}
