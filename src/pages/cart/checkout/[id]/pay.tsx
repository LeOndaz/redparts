import React, {useMemo} from "react";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {Checkout, GatewayConfigLine, PaymentGateway} from "~/api/graphql/types";
import {GetServerSideProps} from "next";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import {getFieldFromGatewayConfig} from "~/api/graphql/misc/helpers";
import {getPaymentGateways} from "~/api";
import PageTitle from "~/components/shared/PageTitle";
import BlockHeader from "~/components/blocks/BlockHeader";
import {FormattedMessage, useIntl} from "react-intl";
import url from "~/services/url";
import {PaymentMethodUnavailable} from "~/components/site/PaymentMethodUnavailable";

interface Props {
    checkoutId: string;
    gatewayId: string;
    gateway: PaymentGateway
}

export enum PaymentGatewayEnum {
    Stripe = 'mirumee.payments.stripe',
}

function Page({gatewayId, gateway, checkoutId}: Props) {
    const intl = useIntl();

    if (!gatewayId || !gateway) return <PaymentMethodUnavailable/>
    if (!gatewayId || !gateway) console.log('ABCD')

    const apiKey = useMemo(() => {
        return getFieldFromGatewayConfig('api_key', gateway)
    }, [gateway])

    if (!apiKey) return <PaymentMethodUnavailable/>
    if (!apiKey) return console.log('!apiKey')

    const gatewayBody = (
        <>
            {gatewayId === PaymentGatewayEnum.Stripe &&
            <StripeGateway checkoutId={checkoutId} apiKey={apiKey}/>
            }

            {/*    more cases */}
        </>)

    console.info('Payment with:', gateway.name)
    return (<>
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
        {gatewayBody}
    </>)
}

export const getServerSideProps: GetServerSideProps<Props> = async ({query, params}) => {
    const checkoutId = typeof params?.id === 'string' ? params.id : null;
    const gatewayId = typeof query?.with === 'string' ? query.with : null;

    const availablePaymentMethods = await getPaymentGateways()
    const gateway = availablePaymentMethods.find(gateway => gateway.id === gatewayId)


    return {
        props: {
            checkoutId,
            gatewayId,
            gateway,
        }
    }
}

export default Page;
