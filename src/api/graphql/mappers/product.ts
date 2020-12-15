import {Mapper} from "~/api/graphql/mappers/interfaces";
import {Product, ProductCountableConnection, SelectedAttribute, StockAvailability} from "~/api/graphql/types";
import {IImage, IProduct, IProductsList} from "~/interfaces/product";
import {ICustomFields} from "~/interfaces/custom-fields";
import {mapVariantAttrsToOptions} from "~/api/graphql/mappers/utils";
import {cursorNavigationMapper, shopCategoryMapper} from "~/api";
import {IListOptions} from "~/interfaces/list";
import {IFilter} from "~/interfaces/filter";
import {attributes} from "~/api/services";
import {DEFAULT_ATTR_SLUGS, MAX_BADGES} from "~/api/graphql/consts";
import _ from "lodash";
import {customEditorjsParser} from "~/components/utils";
import {getOrNull} from "~/api/graphql/utils";

export class ProductMapper implements Mapper<Product, IProduct> {
    toInternal = (product: Product, {customFields}: { customFields?: ICustomFields } = {}): IProduct => {

        /** Handle pricing & discounts */
        let finalPrice = product.pricing?.priceRange?.start?.gross.amount
        let compareAtPrice = product.pricing?.priceRangeUndiscounted?.start?.gross.amount || null

        /** Handle markdown description */
        let description = JSON.parse(getOrNull(product.descriptionJson))
        description = customEditorjsParser.parse(description)

        /** Handle badges */
        const badgesAttr = attributes.utils.getSelectedAttr(
            DEFAULT_ATTR_SLUGS.BADGES,
            product.attributes
        )

        let badgeClasses = [];
        if (badgesAttr && !_.isEmpty(badgesAttr.values)) {
            badgeClasses = _.map(badgesAttr.values, 'slug').slice(0, MAX_BADGES)
        }

        /** Handle tags */
        const tagsAttr = attributes.utils.getSelectedAttr(
            DEFAULT_ATTR_SLUGS.TAGS,
            product.attributes
        )

        let tags = [];
        if (tagsAttr && !_.isEmpty(tagsAttr.values)) {
            tags = _.map(tagsAttr.values, 'slug')
        }

        /** Handle excerpt */

        /** Handle options */
        const options = mapVariantAttrsToOptions(product)

        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            description: description,
            excerpt: '',
            price: finalPrice,
            compareAtPrice: compareAtPrice,
            stock: product.isAvailable ? StockAvailability.InStock : StockAvailability.OutOfStock,
            availability: "",
            images: product.images as IImage[],
            partNumber: "",
            compatibility: "all",
            options: options,
            type: {
                slug: 'default',
                name: 'Default',
                attributeGroups: [
                    {
                        name: 'General',
                        slug: 'general',
                        attributes: [
                            'speed',
                            'power-source',
                            'battery-cell-type',
                            'voltage',
                            'battery-capacity',
                            'material',
                            'engine-type',
                        ],
                    },
                    {
                        name: 'Dimensions',
                        slug: 'dimensions',
                        attributes: [
                            'length',
                            'width',
                            'height',
                        ],
                    },
                ],
            },
            attributes: [
                {
                    name: 'speed',
                    values: [{
                        name: 'bolbol',
                        slug: '223',
                    }],
                    featured: true,
                    slug: 'speed'
                }
            ],
            brand: {
                name: product.attributes.filter(attrVal => attrVal.attribute.name?.toLowerCase() === "brand").map(attrVal => attrVal.values.map(value => value !== null && value.name)) || 'Generic',
                country: 'USA',
                image: '',
                slug: '',
            },
            customFields: {
                ...customFields,
            },
            categories: product.category ? [shopCategoryMapper.toInternal(product.category)] : undefined,
            sku: product.defaultVariant?.sku || product.variants?.[0]?.sku,
            badges: badgeClasses,
            rating: 2,
            reviews: 4,
            tags: tags,
        }
    }
}
