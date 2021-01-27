import {loadStripe} from "@stripe/stripe-js"
import {Elements, CardElement,} from "@stripe/react-stripe-js";
import React, {SyntheticEvent, useMemo} from "react";
import StripeForm from "~/components/shop/gateways/stripe/StripeForm";
import classNames from "classnames";
import {Row} from "reactstrap"

interface Props {
    checkoutId: string
    apiKey: string
}

function StripeGateway(props: Props) {
    const {apiKey, checkoutId} = props;
    const stripePromise = useMemo(() => loadStripe(apiKey), [])

    return (
        <Row className={classNames('justify-content-center')}>
            <Elements stripe={stripePromise}>
                <StripeForm checkoutId={checkoutId}/>
            </Elements>
        </Row>
    )
}


export default StripeGateway;
