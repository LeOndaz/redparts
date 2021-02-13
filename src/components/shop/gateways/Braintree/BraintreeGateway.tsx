import React, {SyntheticEvent, useCallback, useMemo, useRef, useState} from "react";
import StripeForm from "~/components/shop/gateways/stripe/StripeForm";
import classNames from "classnames";
import {create, Dropin} from "braintree-web-drop-in"
import BraintreeForm from "~/components/shop/gateways/Braintree/BraintreeForm";
import {Braintree, BraintreeSet, useSetBraintree} from "~/components/shop/gateways/Braintree/context";

export interface IBraintreeResponse {
    token?: string
    error: object | null;
}

interface Props {
    apiKey: string;
    onSubmit: (data: IBraintreeResponse) => void;
    paymentIsLoading: boolean
}

function BraintreeGateway({onSubmit, apiKey, paymentIsLoading}: Props) {
    const braintreePromise = useMemo(() => create({
        authorization: apiKey,
        container: '.braintree-container', // a class inside the form
        vaultManager: true,
    }), [apiKey])

    return (<Braintree.Provider value={braintreePromise}>
                <BraintreeForm apiKey={apiKey} onSubmit={onSubmit} paymentIsLoading={paymentIsLoading}/>
        </Braintree.Provider>
    )
}

export default BraintreeGateway;
