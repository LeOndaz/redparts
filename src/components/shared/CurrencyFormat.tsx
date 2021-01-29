// react
import React from 'react';
// application
import {useCurrency} from '~/store/currency/currencyHooks';
import {ICurrency} from '~/interfaces/currency';
import {FormattedMessage, useIntl} from "react-intl";

interface Props {
    value: number;
    currency?: ICurrency;
}

function CurrencyFormat(props: Props) {
    const {value, currency: propCurrency} = props;
    const siteCurrency = useCurrency();
    const currency = propCurrency || siteCurrency;

    return (
        <React.Fragment>
            {value !== 0 &&
            <>
                {currency.symbol.length === 1 && currency.symbol}
                {currency.symbol.length > 1 && `${currency.symbol} `}
                {(value * currency.rate).toFixed(2)}
            </> }
            { value === 0 && <FormattedMessage id="TEXT_FREE"/> }
        </React.Fragment>
    );
}

export default CurrencyFormat;
