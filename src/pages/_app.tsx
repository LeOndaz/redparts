// react
import React, {ComponentType, useEffect, useMemo} from 'react';
// third-party
import AppBase, {AppContext, AppProps} from 'next/app';
import Head from 'next/head';
import {NextComponentType, NextPageContext} from 'next';
import {useStore} from 'react-redux';

// application
import LanguageProvider, {getLanguageInitialProps, ILanguageProviderProps} from '~/services/i18n/provider';
import Layout from '~/components/Layout';
import PageTitle from '~/components/shared/PageTitle';
import {AppDispatch} from '~/store/types';
import {CurrentVehicleGarageProvider} from '~/services/current-vehicle';
import {getDefaultLanguage, getLanguageByLocale, getLanguageByPath, getLanguageServerSide} from '~/services/i18n/utils';
import {load, save, wrapper} from '~/store/store';
import {optionsSetAll} from '~/store/options/optionsActions';
import {useApplyClientState} from '~/store/client';
import {useLoadUserVehicles} from '~/store/garage/garageHooks';
// styles
import '../scss/index.scss';
import '../scss/style.header-spaceship-variant-one.scss';
import '../scss/style.header-spaceship-variant-two.scss';
import '../scss/style.header-spaceship-variant-three.scss';
import '../scss/style.header-classic-variant-one.scss';
import '../scss/style.header-classic-variant-two.scss';
import '../scss/style.header-classic-variant-three.scss';
import '../scss/style.header-classic-variant-four.scss';
import '../scss/style.header-classic-variant-five.scss';
import '../scss/style.mobile-header-variant-one.scss';
import '../scss/style.mobile-header-variant-two.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AuthFlow from "~/components/auth/AuthFlow";
import {languageSet} from "~/store/language/languageActions";
import {GoogleTagManager} from "~/components/site/GoogleTagManager";
import FacebookPixel from "~/components/site/FacebookPixel";
import {ICurrency} from "~/interfaces/currency";
import {cmsApi} from "~/api";
import {PageSlugsEnum} from "~/api/graphql/consts";
import {ILanguage} from "~/interfaces/language";
import {getAttributeValue} from "~/api/graphql/misc/helpers";

interface Props extends AppProps {
    languageInitialProps: ILanguageProviderProps;
    Component: NextComponentType<NextPageContext, any> & {
        Layout: ComponentType,
    };
    defaultCurrency: ICurrency;
}

function App({Component, pageProps, languageInitialProps}: Props) {
    const store = useStore();
    const applyClientState = useApplyClientState();
    const loadUserVehicles = useLoadUserVehicles();

    // Loading and saving state on the client side (cart, wishlist, etc.).
    useEffect(() => {
        const state = load();

        applyClientState(state || {});

        if (process.browser) {
            store.subscribe(() => {
                save(store.getState());
            });

        }
    }, [store, applyClientState,]);


    // Load user vehicles
    useEffect(() => {
        loadUserVehicles().then();
    }, [loadUserVehicles]);

    // preloader
    useEffect(() => {
        const preloader = document.querySelector('.site-preloader');

        if (!preloader) {
            return;
        }

        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 100);
    }, []);

    const page = useMemo(() => {
        const PageLayout = Component.Layout || React.Fragment;

        return (
            <Layout>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Layout>
        );
    }, [Component, pageProps]);

    // noinspection HtmlRequiredTitleElement
    return (
        <LanguageProvider {...languageInitialProps}>
            <GoogleTagManager>
                <FacebookPixel>
                    <AuthFlow/>
                    <CurrentVehicleGarageProvider>
                        <PageTitle/>

                        <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        </Head>

                        {page}
                    </CurrentVehicleGarageProvider>
                </FacebookPixel>
            </GoogleTagManager>
        </LanguageProvider>
    );
}

App.getInitialProps = async (context: AppContext) => {
    const dispatch = context.ctx.store.dispatch as AppDispatch;

    let language;

    if (typeof context.ctx.query.lang === 'string') {
        language = getLanguageByLocale(context.ctx.query.lang);
    } else {
        language = getLanguageByPath(context.ctx.asPath || context.ctx.pathname);
    }

    language = language || getDefaultLanguage();

    const basePage = await cmsApi.getPage(PageSlugsEnum.Base, language as ILanguage)
    const desktopHeaderVariant = getAttributeValue('desktop-header-variant', basePage.attributes, 'classic-one', 'slug')
    const mobileHeaderVariant = getAttributeValue('mobile-header-variant', basePage.attributes, "one", 'slug')

    await dispatch(optionsSetAll({
        desktopHeaderVariant,
        mobileHeaderVariant,
    }));

    dispatch(languageSet(language));

    return {
        ...(await AppBase.getInitialProps(context)),
        languageInitialProps: await getLanguageInitialProps(language),
    };
};

const WrappedApp = wrapper.withRedux(App);

// noinspection JSUnusedGlobalSymbols
export default WrappedApp;
