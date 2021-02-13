// react
import React, { useMemo } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import Dropdown, { IDropdownItem } from '~/components/header/Dropdown';
import { ICurrency } from '~/interfaces/currency';
import { useCurrency, useCurrencyChange } from '~/store/currency/currencyHooks';
// data
import dataShopCurrencies from '~/data/shopCurrencies';
import {useAvailableCurrencies} from "~/services/hooks";

interface Item extends IDropdownItem {
    currency: ICurrency;
}

function DropdownCurrency() {
    const currency = useCurrency();
    const currencyChange = useCurrencyChange();
    const currencies = useAvailableCurrencies();

    const handleItemClick = (item: Item) => {
        currencyChange(item.currency);
    };

    const items: Item[] = useMemo(() => (
        currencies.data.map(((eachCurrency) => ({
            title: `${eachCurrency.name}`,
            currency: eachCurrency,
        })))
    ), [currencies]);

    const label = (
        <React.Fragment>
            <FormattedMessage id="TEXT_TOPBAR_CURRENCY" />
            :
        </React.Fragment>
    );

    return (
        <Dropdown
            label={label}
            title={currency.code}
            items={items}
            onItemClick={handleItemClick}
        />
    );
}

export default DropdownCurrency;
