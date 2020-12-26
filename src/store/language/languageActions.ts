/* eslint-disable import/prefer-default-export */

// application
import { LANGUAGE_SET, LanguageSetAction } from '~/store/language/languageActionTypes';
import { ILanguage } from '~/interfaces/language';

export function languageSet(language: ILanguage): LanguageSetAction {
    return {
        type: LANGUAGE_SET,
        language,
    };
}
