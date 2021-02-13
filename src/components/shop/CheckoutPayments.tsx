// react
import React, {useMemo} from 'react';
// third-party
import {useFormContext} from 'react-hook-form';
import {useIntl} from 'react-intl';
// application
import Collapse from '~/components/shared/Collapse';
import RadioButton from '~/components/shared/RadioButton';
import {useDeferredData} from "~/services/hooks";
import {shopApi} from "~/api";
import {useCurrency} from "~/store/currency/currencyHooks";
import classNames from "classnames";

function CheckoutPayments() {
    const {register, watch} = useFormContext();
    const currentPayment = watch('payment');
    const currency = useCurrency();
    const payments = useDeferredData(() => shopApi.getPaymentMethods(currency), [], undefined, [currency])

    return (
        <div className="checkout__payment-methods payment-methods">
            <ul className="payment-methods__list">
                {payments.data.map((payment, paymentIndex) => (
                    <Collapse<HTMLLIElement, HTMLDivElement>
                        key={paymentIndex}
                        open={currentPayment === payment.id}
                        toggleClass="payment-methods__item--active"
                        render={({setItemRef, setContentRef}) => (
                            <li className="payment-methods__item" ref={setItemRef}>
                                <label className="payment-methods__item-header">
                                    <RadioButton
                                        name="payment"
                                        value={payment.id}
                                        className={classNames("payment-methods__item-radio")}
                                        inputRef={register({required: true})}
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
