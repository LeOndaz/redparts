// application
import {ILanguage} from '~/interfaces/language';
import {LanguageCodeEnum} from "~/api/graphql/types";

const dataShopLanguages: ILanguage[] = [
    {
        locale: 'en',
        code: LanguageCodeEnum.En,
        name: 'English',
        icon: '/images/languages/language-1.png',
        direction: 'ltr',
    },
    {
        locale: 'ru',
        code: LanguageCodeEnum.Ru,
        name: 'Russian',
        icon: '/images/languages/language-2.png',
        direction: 'ltr',
    },
    {
        locale: 'ar',
        code: LanguageCodeEnum.Ar,
        name: 'RTL',
        icon: '/images/languages/language-3.png',
        direction: 'rtl',
    },
];

export const dataShopDefaultLocale = 'en';

export default dataShopLanguages;
