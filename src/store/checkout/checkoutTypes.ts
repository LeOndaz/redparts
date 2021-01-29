import {Checkout} from "~/api/graphql/types";

export interface ICheckoutState {
    current: {
        checkout: Checkout | null;
        paymentMethod: string | null;
    }
}
