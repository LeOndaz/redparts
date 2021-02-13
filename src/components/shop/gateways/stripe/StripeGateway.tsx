import {loadStripe, StripeError, Token} from "@stripe/stripe-js"
import {Elements, CardElement,} from "@stripe/react-stripe-js";
import React, {SyntheticEvent, useMemo} from "react";
import StripeForm from "~/components/shop/gateways/stripe/StripeForm";
import classNames from "classnames";
import {Row} from "reactstrap"

export interface IStripeResponse {
    token?: string
    error?: StripeError;
}

interface Props {
    apiKey: string;
    onSubmit: (data: IStripeResponse) => void;
    paymentIsLoading: boolean
}

function StripeGateway({onSubmit, apiKey, paymentIsLoading}: Props) {
    const stripePromise = useMemo(() => loadStripe(apiKey), [apiKey])

    return (
        <Row className={classNames('justify-content-center')}>
            <Elements stripe={stripePromise}>
                <StripeForm onSubmit={onSubmit} paymentIsLoading={paymentIsLoading}/>
            </Elements>
        </Row>
    )
}


export default StripeGateway;
