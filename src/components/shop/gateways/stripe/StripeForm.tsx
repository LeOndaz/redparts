import {
    useElements,
    useStripe,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";
import React, {SyntheticEvent, } from "react";
import classNames from "classnames";
import {Row} from "reactstrap"
import {IStripeResponse} from "~/components/shop/gateways/stripe/StripeGateway";

interface Props {
    onSubmit: (data: IStripeResponse) => void;
    isLoading: boolean
}

const style = {
    base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
            color: "#aab7c4"
        }
    },
    invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
    }
};

function StripeForm({onSubmit, isLoading}: Props) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (evt: SyntheticEvent) => {
        evt.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement('cardNumber')
        if(!cardElement) return;

        const result = await stripe.createToken(cardElement)
        onSubmit(result)
    }


    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} style={{
                minWidth: "300px",
                maxWidth: "500px",
                justifyContent: "center"
            }}>
                <Row className={classNames('mb-2')}>
                    <label htmlFor="cne">
                        Card number
                    </label>

                    <CardNumberElement
                        id="cne"
                        options={{style}}
                        className={classNames('form-control')}
                        // onChange={() => setStripeError(null)}
                    />
                </Row>

                <Row className={classNames("justify-content-between", 'mb-2')}>
                    <div style={{
                        flexGrow: 0.3
                    }}>
                        <label htmlFor="cee">
                            Expiration Date
                        </label>
                        <CardExpiryElement
                            id="cee"
                            options={{style}}
                            className={classNames('form-control')}
                            // onChange={() => setStripeError(null)}
                        />
                    </div>

                    <div style={{
                        flexGrow: 0.65
                    }}>
                        <label htmlFor="cce">
                            CVC
                        </label>

                        <CardCvcElement
                            id="cce"
                            options={{style,}}
                            className={classNames('form-control')}
                            // onChange={() => setStripeError(null)}
                        />
                    </div>
                </Row>
                <button className={classNames('btn', 'btn-primary', {
                    'btn-loading': isLoading
                })} role="link" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </React.Fragment>
    )
}

export default StripeForm;
