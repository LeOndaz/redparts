import {
    AddressInput,
    Channel, CheckoutAddPromoCode, CheckoutShippingMethodUpdate,
    GetCountriesDocument,
    GetPaymentGatewaysDocument, GetSiteDetailsDocument,
    MetadataItem, PaymentGateway, SetShippingMethodDocument, ShippingMethod,
    UpdateMetadataDocument
} from "~/api/graphql/types";
import {client, getAttributeBySlug} from "~/api";
import {IBrand} from "~/interfaces/brand";
import {ICountry} from "~/interfaces/country";
import {withAuth} from "~/api/graphql/users/authService";
import {getMetadataItem, handleMetadataErrors} from "~/api/graphql/misc/helpers";
import {
    DefaultAttrSlugs,
    PLUGIN_FACEBOOK_PIXEL_URL,
    PLUGIN_GTAG_URL,
    PLUGIN_OPEN_EXCHANGE_URL
} from "~/api/graphql/consts";
import {ILanguage} from "~/interfaces/language";
import {IAddress} from "~/interfaces/address";
import {addressMap} from "~/api/graphql/addresses/addressMappers";
import {ICurrency} from "~/interfaces/currency";

export const getCountries = (language: ILanguage): Promise<ICountry[]> => {
    return client.query({
        query: GetCountriesDocument,
        variables: {
            languageCode: language.code,
        }
    }).then(r => r.data.shop.countries)
}

export const getBrands = (language: ILanguage): Promise<IBrand[]> => {
    /**
     * IBrands require an image: string and not IImage.
     * */
    return getAttributeBySlug(DefaultAttrSlugs.Brand, language).then(r => {
        const {attribute} = r.data;

        if (!attribute) return [];

        const images: MetadataItem[] = attribute.metadata
        const {values} = attribute;

        let genericImageUrl = "http://placehold.it/200",
            genericImage = getMetadataItem(attribute.metadata, 'generic', genericImageUrl)

        return values.map((value: IBrand) => {
            const brandImageUrl = getMetadataItem(images, value.slug)

            return {
                ...value,
                image: brandImageUrl ? brandImageUrl : genericImage.value
            }
        })
    })
}

export const updateMetadata = (id: string, input: MetadataItem[]) => {
    return withAuth(client.mutate)({
        mutation: UpdateMetadataDocument,
        variables: {
            id,
            input,
        }
    }).then(handleMetadataErrors).then(res => res.data.updateMetadata.item.metadata)
}

export const getGoogleTagManagerId = (): Promise<{ gtag: string }> => {
    return fetch(PLUGIN_GTAG_URL).then(r => r.json())
}

export const getFacebookPixelId = (): Promise<{ pixelId: string }> => {
    return fetch(PLUGIN_FACEBOOK_PIXEL_URL).then(r => r.json())
}

export const getOpenExchangeAppId = (): Promise<{ appId: string }> => {
    return fetch(PLUGIN_OPEN_EXCHANGE_URL).then(r => r.json())
}

export const getSiteDetails = (): Promise<{ address: IAddress | null, description: string | null }> => {
    return client.query({
        query: GetSiteDetailsDocument,
    }).then(r => r.data.shop)
        .then(shop => {
            const address = shop.companyAddress ? addressMap.in(shop.companyAddress) : null
            const description = shop.description;

            return {
                address,
                description
            }
        })
}

export const setShippingMethod = (checkoutId: string, shippingMethodId: string, language: ILanguage): Promise<CheckoutShippingMethodUpdate> => {
    return client.mutate({
        mutation: SetShippingMethodDocument,
        variables: {
            checkoutId,
            shippingMethodId,
            languageCode: language.code
        }
    }).then(r => r.data.checkoutShippingMethodUpdate)
}
