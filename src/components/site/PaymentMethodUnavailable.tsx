import CustomPage from "~/components/site/CustomPage";
import React from "react";

export function PaymentMethodUnavailable() {
    const text = "Payment method unavailable";
    const description = "The payment method you've selected is not available right now, You may choose another one.";

    const props = {
        text,
        description,
    }

    return <CustomPage {...props}/>
}
