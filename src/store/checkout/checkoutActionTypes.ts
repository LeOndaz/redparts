import {Checkout} from "~/api/graphql/types";

export const CHECKOUT_SET = 'CHECKOUT_SET';
export const PAYMENT_SET = 'PAYMENT_SET';

export interface CheckoutSetAction {
    type: typeof CHECKOUT_SET;
    checkout: Checkout | null;
}

export interface PaymentSetAction {
    type: typeof PAYMENT_SET;
    paymentMethod: string | null;
}

export type CheckoutAction = CheckoutSetAction;
export type PaymentAction = PaymentSetAction;
