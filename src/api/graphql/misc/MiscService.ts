import {GetCountriesDocument, LanguageCodeEnum, MetadataItem} from "~/api/graphql/types";
import {client, getAttributeBySlug} from "~/api";
import {IBrand} from "~/interfaces/brand";
import {DEFAULT_ATTR_SLUGS} from "~/api/graphql/consts";

export function getCountries(languageCode?: LanguageCodeEnum) {
    return client.query({
        query: GetCountriesDocument,
        variables: {
            languageCode,
        }
    })
}

export function getBrands(): Promise<IBrand[]> {
    return getAttributeBySlug(DEFAULT_ATTR_SLUGS.BRAND).then(r => {
        const {attribute} = r.data;
        const images: MetadataItem[] = attribute.metadata
        const {values} = attribute;
        let genericImage = {
            value: "http://placehold.it/200",
        }

        genericImage = images.find(image => image.key.toLowerCase() === 'generic') || genericImage

        return values.map((value: IBrand) => {
            const brandImage = images.find(image => image.key === value.slug)
            return {
                ...value,
                image: brandImage ? brandImage.value : genericImage.value
            }
        })
    })
}
