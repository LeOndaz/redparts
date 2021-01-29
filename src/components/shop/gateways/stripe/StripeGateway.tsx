import {loadStripe, StripeError, Token} from "@stripe/stripe-js"
import {Elements, CardElement,} from "@stripe/react-stripe-js";
import React, {SyntheticEvent, useMemo} from "react";
import StripeForm from "~/components/shop/gateways/stripe/StripeForm";
import classNames from "classnames";
import {Row} from "reactstrap"

export interface IStripeResponse {
    token?: Token
    error?: StripeError;
}

interface Props {
    apiKey: string;
    onSubmit: (data: IStripeResponse) => void;
    isLoading: boolean
}

function StripeGateway({onSubmit, apiKey, isLoading}: Props) {
    const stripePromise = useMemo(() => loadStripe(apiKey), [])

    return (
        <Row className={classNames('justify-content-center')}>
            <Elements stripe={stripePromise}>
                <StripeForm onSubmit={onSubmit} isLoading={isLoading}/>
            </Elements>
        </Row>
    )
}


export default StripeGateway;
