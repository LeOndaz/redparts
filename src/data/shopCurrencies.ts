// application
import { ICurrency } from '~/interfaces/currency';
import {shopApi} from "~/api";

const dataShopCurrencies: ICurrency[] = [
    {
        code: 'EUR',
        symbol: '€',
        name: 'Euro',
        rate: 1,
    },
    {
        code: 'GBP',
        symbol: '£',
        name: 'Pound Sterling',
        rate: 0.847,
    },
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 1.087,
    },
    {
        code: 'RUB',
        symbol: '₽',
        name: 'Russian Ruble',
        rate: 69.6,
    },
];

const dataShopDefaultCurrencyCode = 'EUR';

export const dataShopDefaultCurrency: ICurrency = dataShopCurrencies.find((x) => (
    x.code === dataShopDefaultCurrencyCode
))!;

export default dataShopCurrencies;
