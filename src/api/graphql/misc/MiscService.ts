import {GetCountriesDocument, LanguageCodeEnum, MetadataItem, UpdateMetadataDocument} from "~/api/graphql/types";
import {client, getAttributeBySlug} from "~/api";
import {IBrand} from "~/interfaces/brand";
import {ICountry} from "~/interfaces/country";
import {withAuth} from "~/api/graphql/users/authService";
import {getMetadataItem, handleMetadataErrors} from "~/api/graphql/misc/helpers";
import {DefaultAttrSlugs} from "~/api/graphql/consts";
import {ILanguage} from "~/interfaces/language";

export const getCountries = (languageCode?: LanguageCodeEnum): Promise<ICountry[]> => {
    return client.query({
        query: GetCountriesDocument,
        variables: {
            languageCode,
        }
    }).then(r => r.data.shop.countries)
}

export const getBrands = (language: ILanguage): Promise<IBrand[]> => {
    return getAttributeBySlug(DefaultAttrSlugs.Brand, language).then(r => {
        const {attribute} = r.data;
        const images: MetadataItem[] = attribute.metadata

        const {values} = attribute;
        let genericImage = {
            value: "http://placehold.it/200",
        }

        genericImage = getMetadataItem(attribute.metadata, 'generic', genericImage)

        return values.map((value: IBrand) => {
            const brandImage = getMetadataItem(images, value.slug)
            
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
