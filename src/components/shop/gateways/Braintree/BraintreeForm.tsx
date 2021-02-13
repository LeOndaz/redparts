import classNames from "classnames";
import React, {SyntheticEvent, useCallback} from "react";
import {useBraintree} from "~/components/shop/gateways/Braintree/context";

interface Props {
    apiKey: string;
    onSubmit: (data: any) => void;
    paymentIsLoading: boolean
}


function BraintreeForm({paymentIsLoading, onSubmit}: Props) {
    const braintree = useBraintree();

    const handleClick = useCallback(async (evt: SyntheticEvent) => {
        evt.preventDefault();
        const dropIn = await braintree;

        if (!dropIn) return;

        dropIn.requestPaymentMethod(((err, payload) => {
            onSubmit({
                error: err,
                token: payload.nonce
            })
        }))
    }, [braintree])

    return (
        <form className={classNames('d-flex', 'flex-column', 'justify-content-center', 'align-items-center')}>
            <div className={classNames('braintree-container')}/>
            <button className={classNames('btn', 'btn-primary', 'mt-2')} onClick={handleClick}
                    disabled={paymentIsLoading}>Pay
            </button>
        </form>
    )
}

export default BraintreeForm
