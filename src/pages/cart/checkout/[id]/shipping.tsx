import {FormattedMessage, useIntl} from "react-intl";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import React, {useEffect, useMemo, useState} from "react";
import {getFieldFromGatewayConfig, loadLocal} from "~/api/graphql/misc/helpers";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {GetServerSideProps} from "next";
import {shopApi} from "~/api";
import {hrefToRouterArgs, useAppRouter} from "~/services/router";
import url from "~/services/url";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import Collapse from "~/components/shared/Collapse";
import RadioButton from "~/components/shared/RadioButton";
import {useCheckout, useSetCheckout} from "~/store/checkout/checkoutHooks";
import classNames from "classnames";
import {useAsyncAction} from "~/store/hooks";
import {IAddressForm} from "~/components/shared/AddressForm";
import {IRegisterForm} from "~/components/shared/RegisterForm";
import PageTitle from "~/components/shared/PageTitle";
import BlockHeader from "~/components/blocks/BlockHeader";
import CurrencyFormat from "~/components/shared/CurrencyFormat";
import {useLanguage} from "~/services/i18n/hooks";

interface Props {

}

interface IForm {
    method: string;
}

function Page({}: Props) {
    const intl = useIntl();
    const checkout = useCheckout();
    const setCheckout = useSetCheckout();
    const language = useLanguage();
    const router = useAppRouter();
    const {register, watch, handleSubmit} = useForm()

    const [setShippingMethod, setShippingMethodInProgress] = useAsyncAction(async (data: IForm) => {
        const checkoutId = checkout.id
        const shippingMethodId = data.method;

        const response = await shopApi.setShippingMethod(checkoutId, shippingMethodId, language)

        if (response.checkoutErrors.length === 0 && response.checkout) {
            setCheckout(response.checkout)
            await router.push(...hrefToRouterArgs(url.pay(checkout!, '')))
        }
        console.log(response);

    }, [checkout])

    const availableShippingMethods = checkout ? checkout.availableShippingMethods : [];
    const currentMethod = watch('method')

    return <React.Fragment>
        {checkout && <>
            <PageTitle>{intl.formatMessage({id: 'HEADER_CHECKOUT'})}</PageTitle>

            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_CHECKOUT"/>}
                breadcrumb={[
                    {title: (<FormattedMessage id="LINK_HOME"/>), url: url.home()},
                    {title: (<FormattedMessage id="LINK_CART"/>), url: url.cart()},
                    {title: (<FormattedMessage id="LINK_CHECKOUT"/>), url: url.checkout()},
                    {title: (<FormattedMessage id="LINK_SHIPPING"/>), url: url.shipping(checkout, '')},
                ]}
            />
            <div className={classNames("container")}>
                <form onSubmit={handleSubmit(setShippingMethod)}>
                    <div className="checkout__payment-methods payment-methods">
                        <ul className="payment-methods__list">
                            {availableShippingMethods.filter(method => method!.type === 'PRICE').map((method, idx) => (
                                <Collapse<HTMLLIElement, HTMLDivElement>
                                    key={idx}
                                    open={currentMethod === method!.id}
                                    toggleClass="payment-methods__item--active"
                                    render={({setItemRef, setContentRef}) => (
                                        <li className="payment-methods__item" ref={setItemRef}>
                                            <label className="payment-methods__item-header">
                                                <RadioButton
                                                    name="method"
                                                    value={method!.id}
                                                    className="payment-methods__item-radio"
                                                    inputRef={register}
                                                />
                                                <span className="payment-methods__item-title">
                                        {method!.name}
                                    </span>
                                            </label>
                                            <div className="payment-methods__item-container" ref={setContentRef}>
                                                <div className="payment-methods__item-details text-muted">
                                                    <CurrencyFormat value={method!.price?.amount || 0}/>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                />
                            ))}
                        </ul>
                    </div>
                    <button
                        type="submit"
                        className={classNames(
                            'btn',
                            'btn-primary',
                            'btn-block',
                            {
                                'btn-loading': setShippingMethodInProgress,
                            },
                        )}>
                        <FormattedMessage id="BUTTON_PLACE_ORDER"/>
                    </button>
                </form>
            </div>
        </>}
        {!checkout && <SitePageNotFound/>}
    </React.Fragment>
}

export const getServerSideProps: GetServerSideProps<Props> = async ({query, params}) => {
    return {
        props: {}
    }
};

export default Page;
