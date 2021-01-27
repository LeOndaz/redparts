import {getFacebookPixelId, getGoogleTagManagerId, getOpenExchangeAppId, getSiteDetails,} from "~/api";
import {IAddress} from "~/interfaces/address";
import {ILanguage} from "~/interfaces/language";
import {IMainMenuLink} from "~/interfaces/main-menu-link";
import {getFooterLinks, getNavbarLinks} from "~/api/graphql/navigation/navigationService";
import {IFooterLinks} from "~/components/footer/FooterLinks";
import {PLUGIN_OPEN_EXCHANGE_URL} from "~/api/graphql/consts";

export class CmsApi {
    getGoogleTagManagerId(): Promise<string | void> {
        return getGoogleTagManagerId().then(r => r.gtag).catch(() => console.info('Not using gtag.'))
    }

    getFacebookPixelId(): Promise<string | void> {
        return getFacebookPixelId().then(r => r.pixelId).catch(() => console.info('Not using facebook pixel.'))
    }

    getSiteDetails(): Promise<{ address: IAddress | null, description: string | null }> {
        return getSiteDetails()
    }

    getNavbarLinks(language: ILanguage): Promise<IMainMenuLink[]> {
        return getNavbarLinks(language)
    }

    getFooterLinks(language: ILanguage): Promise<IFooterLinks[]> {
        return getFooterLinks(language)
    }

    getCurrencyRates() {
        return fetch(`${PLUGIN_OPEN_EXCHANGE_URL}rates/`).then(r => r.json())
    }

    getCurrencyNames() {
        return fetch('https://openexchangerates.org/api/currencies.json').then(r => r.json());
    }
}
