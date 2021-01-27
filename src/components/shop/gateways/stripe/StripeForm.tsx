import {
    useElements,
    useStripe,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";
import React, {SyntheticEvent, useMemo, useState} from "react";
import classNames from "classnames";
import {useAppRouter} from "~/services/router";
import {Checkout} from "~/api/graphql/types";
import {completeCheckout, createPayment} from "~/api/graphql/checkouts/checkoutService";
import {ToastContainer, useToast} from "react-toastify";
import {Row} from "reactstrap"
import {useLanguage} from "~/services/i18n/hooks";
import {PaymentGatewayEnum} from "~/pages/cart/checkout/[id]/pay";

interface Props {
    checkoutId: string
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

function StripeForm({checkoutId}: Props) {
    const stripe = useStripe()
    const elements = useElements()
    const language = useLanguage()

    const [stripeError, setStripeError] = useState<any>(null);

    const handleSubmit = async (evt: SyntheticEvent) => {
        evt.preventDefault();

        if (!stripe || !elements) {
            return null;
        }

        const cardElement = elements.getElement('cardNumber')
        const result = await stripe.createToken(cardElement)

        if (result.error) {
            setStripeError(result.error)
        } else {
            // const {payment, checkout: updatedCheckout, paymentErrors} = await createPayment(checkoutId, {
            //     token: result.token!.id,
            //     returnUrl: 'http://localhost:3000/',
            //     gateway: PaymentGatewayEnum.Stripe,
            // }, language)

            // console.log(payment, updatedCheckout, paymentErrors)
            // const shit = await completeCheckout(
            //     updatedCheckout!.id,
            //     "",
            //     "http://localhost:3000/",
            //     true,
            //     language,
            // )
            // console.log(shit.data)
        }
    }

    return (
        <React.Fragment>
            {stripeError && <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            > {stripeError.message}
            </ToastContainer>
            }

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
                        onChange={() => setStripeError(null)}
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
                            onChange={() => setStripeError(null)}
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
                            onChange={() => setStripeError(null)}
                        />
                    </div>
                </Row>
                <button className={classNames('btn', 'btn-primary')} role="link" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </React.Fragment>
    )
}

export default StripeForm;
