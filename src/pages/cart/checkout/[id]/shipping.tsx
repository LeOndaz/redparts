import {useIntl} from "react-intl";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import React, {useMemo} from "react";
import {getFieldFromGatewayConfig} from "~/api/graphql/misc/helpers";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {GetServerSideProps} from "next";
import {getPaymentGateways} from "~/api";

interface Props: {

}

function Page({checkoutId}: Props) {

}

export const getServerSideProps: GetServerSideProps<Props> = async ({query, params}) => {


    return {
        props: {
            availableShippingMethods: [],
        }
    }
}

export default Page;
