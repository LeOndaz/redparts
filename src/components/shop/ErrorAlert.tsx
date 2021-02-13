import {FormattedMessage} from "react-intl";
import React from "react";
import {AccountError, CheckoutError, PaymentError} from "~/api/graphql/types";

interface Props {
    error: CheckoutError | AccountError | PaymentError
}

function ErrorAlert({error}: Props) {
    return <div className="alert alert-lg alert-danger">
        <FormattedMessage id={error.code}/>
    </div>
}

export default ErrorAlert;
