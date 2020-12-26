// application
import { ILanguage } from '~/interfaces/language';

export const LANGUAGE_SET = 'LANGUAGE_SET';

export interface LanguageSetAction {
    type: typeof LANGUAGE_SET;
    language: ILanguage;
}

export type LanguageAction = LanguageSetAction;
