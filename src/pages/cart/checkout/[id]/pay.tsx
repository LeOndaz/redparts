import React, {useCallback, useMemo, useState} from "react";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {getFieldFromGatewayConfig} from "~/api/graphql/misc/helpers";
import PageTitle from "~/components/shared/PageTitle";
import BlockHeader from "~/components/blocks/BlockHeader";
import {FormattedMessage, useIntl} from "react-intl";
import url from "~/services/url";
import {PaymentMethodUnavailable} from "~/components/site/PaymentMethodUnavailable";
import {useCheckout, usePaymentMethod, useSetCheckout} from "~/store/checkout/checkoutHooks";
import {useAppRouter} from "~/services/router";
import {useAsyncAction} from "~/store/hooks";
import {useLanguage} from "~/services/i18n/hooks";
import {shopApi} from "~/api";

export enum PaymentGatewayEnum {
    Stripe = 'mirumee.payments.stripe',
}

function Page() {
    const intl = useIntl();
    const checkout = useCheckout();
    const setCheckout = useSetCheckout();
    const paymentMethod = usePaymentMethod();
    const router = useAppRouter();
    const language = useLanguage();
    const [errors, setErrors] = useState<any[]>([]);

    const apiKey = useMemo(() => {
        if (!checkout) return null

        const gateway = checkout.availablePaymentGateways.find(gateway => gateway.id === paymentMethod)

        if (!gateway) return null

        return getFieldFromGatewayConfig('api_key', gateway)
    }, [checkout])

    const [checkoutPay, payingInProgress] = useAsyncAction(async (data: any) => {
        const {payment, checkout: updatedCheckout, paymentErrors} = await shopApi.createPayment(checkout!.id, {
            gateway: paymentMethod,
            returnUrl: window.location.href + url.home(),
            token: data.token.id,
        }, language)

        if (!updatedCheckout || paymentErrors.length !== 0) {
            setErrors(paymentErrors)
        } else {
            setCheckout(updatedCheckout);
            const data = await shopApi.completeCheckout(
                updatedCheckout.id,
                window.location.href,
                true,
                language,
            )

        console.log(data)
        }

    }, [])

    if (!paymentMethod) {
        router.push(url.checkout()).then()
    }

    console.info('Payment with:', paymentMethod)

    return (<>
        {!apiKey || !checkout && <PaymentMethodUnavailable/>}
        {apiKey && <>
            <PageTitle>{intl.formatMessage({id: 'HEADER_PAYMENT'})}</PageTitle>
            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_PAYMENT"/>}
                breadcrumb={[
                    {title: (<FormattedMessage id="LINK_HOME"/>), url: url.home()},
                    {title: (<FormattedMessage id="LINK_CART"/>), url: url.cart()},
                    {title: (<FormattedMessage id="LINK_CHECKOUT"/>), url: url.checkout()},
                    {title: (<FormattedMessage id="LINK_PAYMENT"/>)},
                ]}
            />
            {paymentMethod === PaymentGatewayEnum.Stripe &&
            <StripeGateway apiKey={apiKey} onSubmit={checkoutPay} isLoading={payingInProgress}/>
            }
        </>}
    </>)
}

export default Page;
