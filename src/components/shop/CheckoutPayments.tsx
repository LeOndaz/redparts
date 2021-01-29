// react
import React, { useMemo } from 'react';
// third-party
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
// application
import Collapse from '~/components/shared/Collapse';
import RadioButton from '~/components/shared/RadioButton';
import {useDeferredData} from "~/services/hooks";
import {shopApi} from "~/api";

function CheckoutPayments() {
    // const intl = useIntl();
    const { register, watch } = useFormContext();
    const currentPayment = watch('payment');
    const payments = useDeferredData(shopApi.getPaymentMethods, [])

    // const payments = useMemo(() => [
    //     {
    //         name: 'bank',
    //         label: intl.formatMessage({ id: 'TEXT_PAYMENT_BANK_LABEL' }),
    //         description: intl.formatMessage({ id: 'TEXT_PAYMENT_BANK_DESCRIPTION' }),
    //     },
    //     {
    //         name: 'check',
    //         label: intl.formatMessage({ id: 'TEXT_PAYMENT_CHECK_LABEL' }),
    //         description: intl.formatMessage({ id: 'TEXT_PAYMENT_CHECK_DESCRIPTION' }),
    //     },
    //     {
    //         name: 'cash',
    //         label: intl.formatMessage({ id: 'TEXT_PAYMENT_CASH_LABEL' }),
    //         description: intl.formatMessage({ id: 'TEXT_PAYMENT_CASH_DESCRIPTION' }),
    //     },
    //     {
    //         name: 'paypal',
    //         label: intl.formatMessage({ id: 'TEXT_PAYMENT_PAYPAL_LABEL' }),
    //         description: intl.formatMessage({ id: 'TEXT_PAYMENT_PAYPAL_DESCRIPTION' }),
    //     },
    // ], [intl]);

    return (
        <div className="checkout__payment-methods payment-methods">
            <ul className="payment-methods__list">
                {payments.data.map((payment, paymentIndex) => (
                    <Collapse<HTMLLIElement, HTMLDivElement>
                        key={paymentIndex}
                        open={currentPayment === payment.id}
                        toggleClass="payment-methods__item--active"
                        render={({ setItemRef, setContentRef }) => (
                            <li className="payment-methods__item" ref={setItemRef}>
                                <label className="payment-methods__item-header">
                                    <RadioButton
                                        name="payment"
                                        value={payment.id}
                                        className="payment-methods__item-radio"
                                        inputRef={register}
                                    />
                                    <span className="payment-methods__item-title">
                                        {payment.name}
                                    </span>
                                </label>
                                <div className="payment-methods__item-container" ref={setContentRef}>
                                    <div className="payment-methods__item-details text-muted">
                                        {payment.name}
                                    </div>
                                </div>
                            </li>
                        )}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CheckoutPayments;
