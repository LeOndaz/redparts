import React, {useMemo} from "react";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {Checkout} from "~/api/graphql/types";
import {GetServerSideProps} from "next";
import {getCheckoutByToken} from "~/api/graphql/checkouts/checkoutService";
import {getLanguageServerSide} from "~/services/i18n/utils";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import {getFieldFromGatewayConfig} from "~/api/graphql/misc/helpers";

interface Props {
    checkout: Checkout;
    gatewayId: string;
    loggedIn: boolean
}

enum PaymentGateways {
    Stripe = 'mirumee.payments.stripe',
}

function Page({checkout, gatewayId}: Props) {
    if (!checkout) return <SitePageNotFound/>

    const gateway = checkout.availablePaymentGateways.find(gateway => gateway.id === gatewayId)

    if (!gateway || !getFieldFromGatewayConfig('api_key', gateway)) {
        return <SitePageNotFound/>
    }

    switch (gatewayId) {
        case PaymentGateways.Stripe:
            return <StripeGateway checkout={checkout} gatewayId={gatewayId}/>
    }
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const {params, query} = ctx;

    const token = typeof params?.token === 'string' ? params.token : null;
    const gatewayId = typeof query?.with === 'string' ? query.with : null
    const language = getLanguageServerSide(ctx)
    // const loggedIn = !!ctx.req.cookies?.jwt
    let checkout = null;

    // if (loggedIn && token && gatewayId) {
    //     checkout = await getCheckoutByToken(token, language, {
    //         headers: {
    //             Authorization: `JWT ${ctx.req.cookies!.jwt}`
    //         }
    //     })
    // }

    return {
        props: {
            checkout,
            gatewayId,
        }
    }
}


export default Page;
