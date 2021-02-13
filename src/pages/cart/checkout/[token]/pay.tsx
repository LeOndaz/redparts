import React, {useCallback, useEffect, useMemo, useState} from "react";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {getFieldFromGatewayConfig} from "~/api/graphql/misc/helpers";
import PageTitle from "~/components/shared/PageTitle";
import BlockHeader from "~/components/blocks/BlockHeader";
import {FormattedMessage, useIntl} from "react-intl";
import url from "~/services/url";
import {PaymentMethodUnavailable} from "~/components/site/PaymentMethodUnavailable";
import {useCheckout, usePaymentMethod, useSetCheckout} from "~/store/checkout/checkoutHooks";
import {hrefToRouterArgs, useAppRouter} from "~/services/router";
import {useAsyncAction, useIsUnmountedRef} from "~/store/hooks";
import {useLanguage} from "~/services/i18n/hooks";
import {shopApi} from "~/api";
import {PaymentError} from "~/api/graphql/types";
import BraintreeGateway from "~/components/shop/gateways/Braintree/BraintreeGateway";
import BlockSpace from "~/components/blocks/BlockSpace";
import ErrorAlert from "~/components/shop/ErrorAlert";
import {PaymentGatewayEnum} from "~/api/graphql/consts";
import {useUser} from "~/store/user/userHooks";


function Page() {
    const intl = useIntl();
    const checkout = useCheckout();
    const setCheckout = useSetCheckout();
    const paymentMethod = usePaymentMethod();
    const router = useAppRouter();
    const language = useLanguage();
    const isUnmounted = useIsUnmountedRef();
    const [paymentErrors, setPaymentErrors] = useState<PaymentError[]>([]);

    const apiKey = useMemo(() => {
        if (!checkout) return null

        const gateway = checkout.availablePaymentGateways.find(gateway => gateway.id === paymentMethod)

        if (!gateway) return null

        return getFieldFromGatewayConfig('api_key', gateway) || getFieldFromGatewayConfig('client_token', gateway)
    }, [checkout])

    const [checkoutPay, payingInProgress] = useAsyncAction(async (data: any) => {
        console.info('creating payment.')

        if (!isUnmounted.current) {
            const {payment, checkout: updatedCheckout, paymentErrors} = await shopApi.createPayment(checkout!.id, {
                gateway: paymentMethod,
                returnUrl: window.location.href + url.home(),
                token: data.token,
            }, language)

            if (paymentErrors.length > 0) {
                console.log(paymentErrors)
                setPaymentErrors(paymentErrors)

                return;
            }

            setCheckout(updatedCheckout!);
            const {confirmationNeeded, order, checkoutErrors, confirmationData} = await shopApi.completeCheckout(
                checkout!.id,
                window.location.href,
                true,
                language,
            )

            if (checkoutErrors.length > 0) {
                console.log(checkoutErrors)
                setPaymentErrors(checkoutErrors)

                return;
            }

            console.log(confirmationData)
            console.log(confirmationNeeded)
            if (confirmationNeeded) {
                // do whatever with confirmation data
            }

            await router.push(...hrefToRouterArgs(url.checkoutSuccess(order)))

        }

    }, [router, setCheckout])

    useEffect(() => {
        if (!paymentMethod || !checkout) {
            router.push(url.checkout()).then()
        }
    }, [checkout, paymentMethod, router])

    const gateway = ( // no need to test for apiKey, testing is done in render
        <React.Fragment>
            {paymentMethod === PaymentGatewayEnum.Stripe &&
            <StripeGateway apiKey={apiKey!} onSubmit={checkoutPay} paymentIsLoading={payingInProgress}/>
            }

            {paymentMethod === PaymentGatewayEnum.Braintree &&
            <BraintreeGateway apiKey={apiKey!} onSubmit={checkoutPay} paymentIsLoading={payingInProgress}/>}

            {paymentMethod === PaymentGatewayEnum.Razorpay && null}

            {paymentMethod === PaymentGatewayEnum.Adyen && null}

        </React.Fragment>
    )

    console.info('Payment with:', paymentMethod)

    return (<>
        {!apiKey && <PaymentMethodUnavailable/>}
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

            {paymentErrors && paymentErrors.map(err => {
                return <ErrorAlert error={err}/>
            })}

            {gateway}
        </>}
        <BlockSpace layout="before-footer"/>
    </>)
}

export default Page;
