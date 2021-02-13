// react
import {
    DependencyList,
    useCallback,
    useEffect, useMemo,
    useRef,
    useState,
} from 'react';
// third-party
import {ValidationRules} from 'react-hook-form';
import {
    FieldElement,
    FieldName,
    Ref,
    UseFormMethods,
} from 'react-hook-form/dist/types/form';
// application
import {IListOptions, INavigableList} from '~/interfaces/list';
import {INavigationEvent} from '~/components/shared/Navigation';
import {IProduct} from '~/interfaces/product';
import {useIsUnmountedRef} from '~/store/hooks';
import {useUser} from "~/store/user/userHooks";
import {useLanguage, useLocale} from "~/services/i18n/hooks";
import {useCurrency} from "~/store/currency/currencyHooks";
import {ICollection} from "~/api/graphql/collections/collectionMappers";
import {getPageBySlug} from "~/api/graphql/pages/pageService";
import {cmsApi, shopApi} from "~/api";
import {ILanguage} from "~/interfaces/language";
import {headerMap} from "~/api/graphql/navigation/navigationMappers";
import {ICurrency} from "~/interfaces/currency";
import {PageSlugsEnum, PLUGIN_OPEN_EXCHANGE_URL} from "~/api/graphql/consts";
import {getCurrencySymbol} from "~/api/graphql/misc/helpers";

export function useGlobalMousedown(callback: (event: MouseEvent) => void, deps?: DependencyList) {
    const memoCallback = useCallback(callback, deps || []);

    useEffect(() => {
        document.addEventListener('mousedown', memoCallback);

        return () => document.removeEventListener('mousedown', memoCallback);
    }, [memoCallback]);
}

export type IDeferredDataSource<T> = () => Promise<T>;
export type IDeferredDataState<T> = { isLoading: boolean, data: T };

export function useDeferredData<T>(
    source: IDeferredDataSource<T>,
    defaultData: T,
    initialData?: T,
    deps: any[] = [],
): IDeferredDataState<T> {
    const [state, setState] = useState(() => ({
        isLoading: initialData === undefined,
        data: initialData || defaultData,
    }));
    const memoizedSource = useCallback(source, deps);
    const skipNextRef = useRef(initialData !== undefined);

    useEffect(() => {
        if (skipNextRef.current) {
            skipNextRef.current = false;

            return () => {
            };
        }

        let canceled = false;

        setState((curState) => {
            if (!curState.isLoading) {
                return {...curState, isLoading: true};
            }

            return curState;
        });

        memoizedSource().then((data) => {
            if (canceled) {
                return;
            }

            setState(() => ({isLoading: false, data}));
        });

        return () => {
            canceled = true;
        };
    }, [memoizedSource]);

    return state;
}

export type IProductTab = { id: number; name: string };
export type IWithCurrent<T> = T & { current: boolean };
export type IProductTabSource<T extends IProductTab> = (tab: T) => Promise<IProduct[]>;
export type IProductTabsState<T extends IProductTab> = {
    tabs: IWithCurrent<T>[];
    handleTabChange: (tab: IWithCurrent<T>) => void;
} & IDeferredDataState<IProduct[]>;

export function useProductTabs<T extends IProductTab>(
    tabs: T[],
    productsSource: IProductTabSource<T>,
    initialData?: IProduct[],
): IProductTabsState<T> {
    const [currentTabId, setCurrentTabId] = useState(1);
    const memoizedTabs = useMemo(() => (
        tabs.map((tab) => ({
            ...tab,
            current: currentTabId === tab.id,
        }))
    ), [tabs, currentTabId]);
    const currentTab = memoizedTabs.find((x) => x.current);
    const products = useDeferredData(() => (
        currentTab ? productsSource(currentTab) : Promise.resolve([])
    ), [], initialData, [currentTab]);
    const handleTabChange = useCallback((tab) => {
        setCurrentTabId(tab.id);
    }, [setCurrentTabId]);

    return useMemo(() => ({
        tabs: memoizedTabs,
        handleTabChange,
        ...products,
    }), [memoizedTabs, handleTabChange, products]);
}

export type IProductColumn = {
    title: string;
    source: IDeferredDataSource<IProduct[]>;
};

export function useProductColumns(columns: IProductColumn[]) {
    const products = useDeferredData(() => (
        Promise.all(columns.map((column) => column.source()))
    ), [], undefined, [columns]);

    return useMemo(() => (
        columns.map((column, index) => ({
            ...column,
            products: products.data[index] || [],
        }))
    ), [columns, products]);
}

export function useDetachableForm<T extends Record<string, any>>(formMethods: UseFormMethods<T>, detached: boolean) {
    const {register: originalRegister, unregister, trigger} = formMethods;

    const fieldNamesRef = useRef<(string | FieldName<T>)[]>([]);

    useEffect(() => {
        if (detached) {
            unregister(fieldNamesRef.current as FieldName<T>[]);

            fieldNamesRef.current = [];
            trigger([]).then();
        }
    }, [detached, unregister, trigger]);

    return (rules: ValidationRules = {}) => (ref: FieldElement<T> & Ref | null) => {
        if (!detached) {
            if (ref && !fieldNamesRef.current.includes(ref.name)) {
                fieldNamesRef.current.push(ref.name);
            }

            originalRegister(rules)(ref);
        }
    };
}

export function useList<T extends INavigableList<any>>(
    loader: (options: IListOptions) => Promise<T>,
    reloadingDeps: any[] = [],
): {
    list: T | null,
    options: IListOptions,
    load: (options?: IListOptions) => Promise<any>,
    onNavigate: (event: INavigationEvent) => void,
} {
    const [, rerender] = useState<boolean>(false);
    const [list, setList] = useState<T | null>(null);
    const optionsRef = useRef<IListOptions>({});
    const cancelRequestRef = useRef<() => void>(() => {
    });
    const isUnmountedRef = useIsUnmountedRef();

    const load = async (options: IListOptions = optionsRef.current) => {
        cancelRequestRef.current();

        const canceledRef = {current: false};

        cancelRequestRef.current = () => {
            canceledRef.current = true;
        };

        loader(options).then((result) => {
            if (isUnmountedRef.current || canceledRef.current) {
                return;
            }

            setList(result);

            if (result.navigation.type === 'page') {
                const {page} = result.navigation;

                optionsRef.current = {...optionsRef.current, page};

                rerender((state) => !state);
            }
        });
    };

    const onNavigate = useCallback((event: INavigationEvent) => {
        if (event.type === 'page') {
            optionsRef.current = {...optionsRef.current, page: event.page};
        } else if (event.type === 'before') {
            optionsRef.current = {...optionsRef.current, before: event.before};
        } else if (event.type === 'after') {
            optionsRef.current = {...optionsRef.current, after: event.after};
        }

        rerender((state) => !state);

        load().then();
    }, []);

    // Initial loading and reloading when changing deps.
    useEffect(() => {
        load().then();
    }, reloadingDeps);

    return {
        list,
        options: optionsRef.current,
        load,
        onNavigate,
    };
}

// export function useCollection<T extends IProductTab>(
//     collectionSource: () => Promise<ICollection>,
//     initialData?: ICollection,
// ) {
//     const tabs = [];
//     const collection = useDeferredData(() => collectionSource(), {})
//     const products = useProductTabs(tabs, () => Promise.resolve(collection.data.products), [])
//
//     return {
//         ...collection,
//         tabs: products.tabs,
//         handleTabChange: products.handleTabChange,
//     }
// }

// export function usePage(slug: string){
//     const language = useLanguage();
//     const page = useDeferredData(() => getPageBySlug(slug, language), {})
//
//
// }

export const useNetworkStatus = (callBack?: (online?: boolean) => void) => {
    const [online, setOnline] = useState(
        "onLine" in navigator ? navigator.onLine : true
    );

    const updateOnlineStatus = () => {
        const status = navigator.onLine;

        if (callBack) {
            callBack(status);
        }
        setOnline(navigator.onLine);
    };

    useEffect(() => {
        addEventListener("offline", updateOnlineStatus);
        addEventListener("online", updateOnlineStatus);

        return () => {
            removeEventListener("offline", updateOnlineStatus);
            removeEventListener("online", updateOnlineStatus);
        };
    }, []);

    return {online};
};


export function useSiteDetails() {
    return useDeferredData(() => cmsApi.getSiteDetails(), null)
}

export function useNavbarLinks(language: ILanguage) {
    return useDeferredData(() => cmsApi.getNavbarLinks(language), [], undefined, [language])
}

export function useFooterLinks(language: ILanguage) {
    return useDeferredData(() => cmsApi.getFooterLinks(language), [], undefined, [language])
}

export function useHeaderDepartments(language: ILanguage) {
    const categories = useDeferredData(() => shopApi.getCategories({}, language), [], undefined, [language])
    return useMemo(() => ({
        ...categories,
        data: headerMap.in(categories.data),
    }), [language, categories.isLoading])
}

export function useAvailableCurrencies() {
    const activeCurrency = useCurrency();
    const language = useLanguage();

    // get all available currency names as {code1: name1, code2: name2, ...}
    const availableCurrencyNames = useDeferredData(() => cmsApi.getCurrencyNames(), null)

    // get all currency rates as { rates: { code1: rate1, code2: name2, ... } }
    const response = useDeferredData(() => cmsApi.getCurrencyRates(), null)

    const isLoading = availableCurrencyNames.isLoading || response.isLoading
    const [state, setState] = useState<{
        data: ICurrency[],
        isLoading: boolean;
    }>({
        data: [],
        isLoading,
    })

    return useMemo(() => {
        if (isLoading) return state;

        const data: ICurrency[] = [];
        const rates = response.data.rates;
        const entries = Object.entries(rates);

        // create ICurrency objects out of the data provided
        entries.forEach(entry => {
            const [code, rate] = entry;
            data.push({
                name: availableCurrencyNames.data[code],
                code,
                rate: rate / rates[activeCurrency.code],
                symbol: getCurrencySymbol(language.locale, code)
            })
        })

        setState({
            data,
            isLoading: false,
        })

        return state
    }, [availableCurrencyNames, response, language])
}

function usePage(slug: string) {
    const language = useLanguage();
    return useDeferredData(() => cmsApi.getPage(slug, language), null, undefined, [language])
}

export function useAboutUsPage() {
    return usePage(PageSlugsEnum.AboutUs)
}

export function useContactUsPage() {
    return usePage(PageSlugsEnum.ContactUs)
}

export function usePrivacyPolicyPage() {
    return usePage(PageSlugsEnum.PrivacyPolicy)
}
