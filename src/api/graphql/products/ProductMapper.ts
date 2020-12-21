import {Product, ProductCountableConnection, SelectedAttribute, StockAvailability} from "~/api/graphql/types";
import {IImage, IProduct, IProductsList} from "~/interfaces/product";
import {ICustomFields} from "~/interfaces/custom-fields";
import {IListOptions} from "~/interfaces/list";
import {IFilter} from "~/interfaces/filter";
import {DEFAULT_ATTR_SLUGS, MAX_BADGES} from "~/api/graphql/consts";
import _ from "lodash";
import {attrUtils} from "~/api/graphql/attributes/AttributeService"
import {customEditorjsParser} from "~/components/utils";
import {mapVariantAttrsToOptions} from "~/api/graphql/misc/mappers/utils";
import {shopCategoryMapIn} from "~/api/graphql/categories/CategoryMapper";

export const productMapIn = (product: Product): IProduct => {
        /** Handle pricing & discounts */
        let finalPrice = product.pricing!.priceRange!.start!.gross.amount
        let compareAtPrice = product.pricing!.priceRangeUndiscounted!.start!.gross.amount || null

        /** Handle markdown description */
        let description = JSON.parse(_.defaultTo(product.descriptionJson, null))
        description = customEditorjsParser.parse(description)

        /** Handle badges */
        const badgesAttr = attrUtils.getSelectedAttr(
            DEFAULT_ATTR_SLUGS.BADGES,
            product.attributes
        )

        let badgeClasses = [];
        if (badgesAttr && !_.isEmpty(badgesAttr.values)) {
            badgeClasses = _.map(badgesAttr.values, 'slug').slice(0, MAX_BADGES)
        }

        /** Handle tags */
        const tagsAttr = attrUtils.getSelectedAttr(
            DEFAULT_ATTR_SLUGS.TAGS,
            product.attributes
        )

        let tags = [];
        if (tagsAttr && !_.isEmpty(tagsAttr.values)) {
            tags = _.map(tagsAttr.values, 'slug')
        }

        /** Handle category */
        const categories = product.category ? [shopCategoryMapIn(product.category, "products")] : []

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
            customFields: {},
            categories: categories,
            sku: product.defaultVariant?.sku || product.variants?.[0]?.sku,
            badges: badgeClasses,
            rating: 2,
            reviews: 4,
            tags: tags,
        }
}

