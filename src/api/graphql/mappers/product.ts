import {Mapper} from "~/api/graphql/mappers/interfaces";
import {Product, ProductCountableConnection, StockAvailability} from "~/api/graphql/types";
import {IImage, IProduct, IProductsList} from "~/interfaces/product";
import {ICustomFields} from "~/interfaces/custom-fields";
import {mapVariantAttrsToOptions} from "~/api/graphql/mappers/utils";
import {cursorNavigationMapper, shopCategoryMapper} from "~/api";
import {IListOptions} from "~/interfaces/list";
import {IFilter} from "~/interfaces/filter";
import {attributes} from "~/api/services";

export class ProductMapper implements Mapper<Product, IProduct> {
    toInternal = (product: Product, {customFields, ...options}: { customFields?: ICustomFields } = {}): IProduct => {
        let onSale = product.pricing && product.pricing.onSale || false;
        let discount;

        let basePrice = 9123;
        let finalPrice = basePrice;
        let compareAtPrice = null;

        if (onSale) {
            discount = product.pricing?.discount?.net.amount || 0;
            finalPrice = basePrice - discount;
            discount === 0 ? compareAtPrice = basePrice : null
        }

        // const badgeClasses = attributes.utils.mapAttrToValues(
        //     attributes.utils.getAttributeValues('badges', product.attributes)
        // );

        const badgeClasses = ['hot'];

        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            description: product.descriptionJson,
            excerpt: '',
            price: finalPrice,
            compareAtPrice: compareAtPrice,
            stock: product.isAvailable ? StockAvailability.InStock : StockAvailability.OutOfStock,
            availability: "",
            images: product.images as IImage[],
            partNumber: "",
            compatibility: "all",
            options: mapVariantAttrsToOptions(product),
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
            tags: []
        }
    }

    ListWithFilters({edges, totalCount, pageInfo}: ProductCountableConnection, options: IListOptions): (filters: IFilter[]) => IProductsList {
        return (filters: IFilter[]): IProductsList => ({
            items: edges.map(e => this.toInternal(e.node)),
            filters: filters,
            sort: options.sort || 'default',
            navigation: cursorNavigationMapper.toInternal(pageInfo, options.limit, totalCount),
        })
    };
}
