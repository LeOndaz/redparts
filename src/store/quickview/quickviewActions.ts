// application
import {IProduct} from '~/interfaces/product';
import {shopApi} from '~/api';
import {
    QUICKVIEW_CLOSE,
    QUICKVIEW_OPEN,
    QuickviewCloseAction,
    QuickviewOpenAction,
    QuickviewThunkAction,
} from '~/store/quickview/quickviewActionTypes';
import {LANGUAGE_NAMESPACE} from "~/store/language/languageReducer";

let cancelPreviousRequest = () => {};

export function quickviewOpenSuccess(product: IProduct): QuickviewOpenAction {
    return {
        type: QUICKVIEW_OPEN,
        product,
    };
}

export function quickviewClose(): QuickviewCloseAction {
    return {
        type: QUICKVIEW_CLOSE,
    };
}

export function quickviewOpen(productSlug: string): QuickviewThunkAction<Promise<void>> {
    return (dispatch, getState) => {
        cancelPreviousRequest();

        const language = getState()[LANGUAGE_NAMESPACE].current
        return new Promise((resolve) => {
            let canceled = false;
            // sending request to server, timeout is used as a stub
            const timer = setTimeout(() => {
                shopApi.getProductBySlug(productSlug, language).then((product) => {
                    if (canceled) {
                        return;
                    }

                    if (product) {
                        dispatch(quickviewOpenSuccess(product));
                    }

                    resolve();
                });
            }, 250);

            cancelPreviousRequest = () => {
                canceled = true;
                clearTimeout(timer);
                resolve();
            };
        });
    };
}
