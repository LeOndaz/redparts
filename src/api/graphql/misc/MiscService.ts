import {GetCountriesDocument, LanguageCodeEnum, MetadataItem, UpdateMetadataDocument} from "~/api/graphql/types";
import {client, getAttributeBySlug} from "~/api";
import {IBrand} from "~/interfaces/brand";
import {DEFAULT_ATTR_SLUGS} from "~/api/graphql/consts";
import {ICountry} from "~/interfaces/country";
import {withAuth} from "~/api/graphql/users/authService";
import {handleMetadataErrors} from "~/api/graphql/misc/helpers";

export const getCountries = (languageCode?: LanguageCodeEnum): Promise<ICountry[]> => {
    return client.query({
        query: GetCountriesDocument,
        variables: {
            languageCode,
        }
    }).then(r => r.data.shop.countries)
}

export const getBrands = (): Promise<IBrand[]> => {
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

export const updateMetadata = (id: string, input: MetadataItem[]) => {
    return withAuth(client.mutate)({
        mutation: UpdateMetadataDocument,
        variables: {
            id,
            input,
        }
    }).then(handleMetadataErrors).then(res => res.data.updateMetadata.item.metadata)
}
