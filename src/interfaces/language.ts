import {LanguageCodeEnum} from "~/api/graphql/types";

export type IDirection = 'ltr' | 'rtl';

export interface ILanguage {
    locale: string;
    code: LanguageCodeEnum;
    name: string;
    icon: string;
    direction: IDirection;
}
