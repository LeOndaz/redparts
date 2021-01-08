import {GetCountriesDocument, LanguageCodeEnum, MetadataItem, UpdateMetadataDocument} from "~/api/graphql/types";
import {client, getAttributeBySlug} from "~/api";
import {IBrand} from "~/interfaces/brand";
import {ICountry} from "~/interfaces/country";
import {withAuth} from "~/api/graphql/users/authService";
import {getMetadataItem, handleMetadataErrors} from "~/api/graphql/misc/helpers";
import {DefaultAttrSlugs} from "~/api/graphql/consts";
import {ILanguage} from "~/interfaces/language";

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
