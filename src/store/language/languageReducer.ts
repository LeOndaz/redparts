// application
import { LANGUAGE_SET, LanguageAction } from '~/store/language/languageActionTypes';
import { getDefaultLanguage } from '~/services/i18n/utils';
import { ILanguageState } from '~/store/language/languageTypes';
import { withClientState } from '~/store/client';

const initialState: ILanguageState = {
    current: getDefaultLanguage(),
};

export const LANGUAGE_NAMESPACE = 'language';

function languageBaseReducer(state = initialState, action: LanguageAction): ILanguageState {
    if (action.type === LANGUAGE_SET && state.current.locale !== action.language.locale) {
        return {
            ...state,
            current: JSON.parse(JSON.stringify(action.language)),
        };
    }

    return state;
}

const languageReducer = withClientState(languageBaseReducer, LANGUAGE_NAMESPACE);

export default languageReducer;
