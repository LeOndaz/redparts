import {FormattedMessage, useIntl} from "react-intl";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import React, {useEffect, useState} from "react";
import {shopApi} from "~/api";
import {hrefToRouterArgs, useAppRouter} from "~/services/router";
import url from "~/services/url";
import {useForm} from "react-hook-form";
import Collapse from "~/components/shared/Collapse";
import RadioButton from "~/components/shared/RadioButton";
import {useCheckout, usePaymentMethod, useSetCheckout} from "~/store/checkout/checkoutHooks";
import classNames from "classnames";
import {useAsyncAction, useIsUnmountedRef} from "~/store/hooks";
import PageTitle from "~/components/shared/PageTitle";
import BlockHeader from "~/components/blocks/BlockHeader";
import CurrencyFormat from "~/components/shared/CurrencyFormat";
import {useLanguage} from "~/services/i18n/hooks";
import CheckoutCart from "~/components/shop/CheckoutCart";
import VoucherForm from "~/components/shop/gateways/VoucherForm";
import BlockSpace from "~/components/blocks/BlockSpace";
import {applyVoucher, removeVoucher} from "~/api/graphql/vouchers/vouchersService";
import {CheckoutError} from "~/api/graphql/types";
import ErrorAlert from "~/components/shop/ErrorAlert";
import {useCartUpdateShippingTotal, useCartUpdateTotals, useCartUpdateVoucherTotal} from "~/store/cart/cartHooks";

interface Props {

}

interface IForm {
    method: string;
}

function Page({}: Props) {
    const intl = useIntl();
    const checkout = useCheckout();
    const setCheckout = useSetCheckout();
    const [checkoutErrors, setCheckoutErrors] = useState<CheckoutError[]>([]);
    const language = useLanguage();
    const router = useAppRouter();
    const isUnmountedRef = useIsUnmountedRef();
    const paymentMethod = usePaymentMethod();
    const {register, watch, handleSubmit} = useForm()
    const currentMethod = watch('method')
    const updateShippingTotal = useCartUpdateShippingTotal()
    const updateVoucherTotal = useCartUpdateVoucherTotal();

    const [setShippingMethod, setShippingMethodInProgress] = useAsyncAction(async (data: IForm) => {
        if (!checkout || !currentMethod) return;

        const checkoutId = checkout.id
        const response = await shopApi.setShippingMethod(checkoutId, currentMethod, language)

        if (response.checkoutErrors.length > 0) {
            return;
        }

        if (response.checkout && !isUnmountedRef.current) {
            setCheckout(response.checkout)
            await updateShippingTotal(response.checkout.shippingMethod!.price!.amount)
        }

    }, [checkout, setCheckout, router, currentMethod, updateShippingTotal])

    const [setVoucher, setVoucherInProgress] = useAsyncAction(async (data: { voucher: string }) => {
        if (!checkout || isUnmountedRef.current) return;

        const response = await applyVoucher(checkout.id, data.voucher, language)
        if (!response.checkout || response.checkoutErrors.length > 0) {
            setCheckoutErrors(response.checkoutErrors)

            return;
        }
        console.log('setcheckout')
        setCheckout(response.checkout)
        console.log(checkout)
    })

    const [resetVoucher, resetVoucherInProgress] = useAsyncAction(async (data: IForm) => {
        if (!checkout) return;

        const response = await removeVoucher(checkout.id,)
    })

    useEffect(() => {
        if (!paymentMethod || !checkout) {
            router.push(...hrefToRouterArgs(url.checkout())).then();
        }
    }, [paymentMethod, checkout, router])

    // voucher total tracker
    useEffect(() => {
        if (isUnmountedRef.current) return;

        if (checkout && checkout.voucherCode && checkout.discount && !isUnmountedRef.current) {
            updateVoucherTotal(-checkout.discount.amount)
        }
    }, [updateVoucherTotal, checkout, isUnmountedRef])

    useEffect(() => {
        if (isUnmountedRef.current) return;

        if (currentMethod) {
            setShippingMethod({
                method: currentMethod,
            })
        }
    }, [currentMethod, isUnmountedRef])

    const onSubmit = (data: IForm) => {
        console.log('12321')
        if (checkout?.shippingMethod) {
            console.log('123')
            router.push(...hrefToRouterArgs(url.pay(checkout!, paymentMethod))).then()
        }
    }

    return <React.Fragment>
        {!checkout && <SitePageNotFound/>}
        {checkout && <>
            <PageTitle>{intl.formatMessage({id: 'HEADER_SHIPPING'})}</PageTitle>

            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_CHECKOUT"/>}
                breadcrumb={[
                    {title: (<FormattedMessage id="LINK_HOME"/>), url: url.home()},
                    {title: (<FormattedMessage id="LINK_CART"/>), url: url.cart()},
                    {title: (<FormattedMessage id="LINK_CHECKOUT"/>), url: url.checkout()},
                    {title: (<FormattedMessage id="LINK_SHIPPING"/>), url: url.shipping(checkout, '')},
                ]}
            />
            <div className={classNames('container')}>

                {checkoutErrors.length > 0 && checkoutErrors.map((err, idx) => {
                    return <ErrorAlert error={err} key={idx}/>
                })}

                <div className={classNames("row")}>

                    <form
                        className={classNames('col-sm-12', 'col-lg-8')}>
                        <div
                            className="checkout__payment-methods payment-methods">
                            <ul
                                className="payment-methods__list">
                                {checkout && checkout.availableShippingMethods.filter(method => method!.type === 'PRICE').map((method, idx) => (
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
                                                        <CurrencyFormat value={method!.price!.amount}/>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    />
                                ))
                                }
                            </ul>
                        </div>
                    </form>
                    <BlockSpace layout='divider-sm'/>
                    <div className={classNames('col-sm-12', 'col-lg-4')}>
                        <CheckoutCart/>
                        <VoucherForm onSubmit={setVoucher}
                                     isLoading={setVoucherInProgress}
                                     onChange={() => setCheckoutErrors([])}
                        />
                        <button
                            type="submit"
                            className={classNames(
                                'btn',
                                'btn-primary',
                                'btn-block',
                                {
                                    'btn-loading': setShippingMethodInProgress || setVoucherInProgress,
                                },
                            )}
                            disabled={!checkout.shippingMethod}
                            onClick={handleSubmit(onSubmit)}>
                            <FormattedMessage id="BUTTON_PROCEED_TO_PAYMENT"/>
                        </button>
                    </div>

                </div>
            </div>
        </>
        }
        <BlockSpace layout="before-footer"/>
    </React.Fragment>
}

export default Page;
