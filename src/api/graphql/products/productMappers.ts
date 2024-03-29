import {Product, StockAvailability} from "~/api/graphql/types";
import {
    IProduct, IProductOption,
    IProductVariant
} from "~/interfaces/product";
import {mapVariantAttrsToOptions} from "~/api/graphql/misc/mappers/utils";
import {shopCategoryMap} from "~/api/graphql/categories/categoryMappers";
import {
    getAttributeValue,
    getAttributeValues,
    isEmpty,
    mapTranslatable
} from "~/api/graphql/misc/helpers";
import {IBrand} from "~/interfaces/brand";
import {attrSlugsEnum, Placeholders} from "~/api/graphql/consts";
import {selectedAttributesMapIn} from "~/api/graphql/attributes/attributeMappers";
import {getAttrsFromVariants} from "~/api/graphql/attributes/utils";
import {variantMap} from "~/api/graphql/productVariants/variantMappers";
import {productTypeMap} from "~/api/graphql/productTypes/productTypeMappers";
import {parseEditorjsText} from "~/components/utils";

const productMapIn = (product: Product): IProduct => {
    let [name, description] = mapTranslatable(product, ['name', 'description'])

    /** Handle markdown description */
    description = parseEditorjsText(description)

    /** Handle pricing & discounts */
    let finalPrice = product.pricing!.priceRange!.start!.gross.amount
    let compareAtPrice: number | null = product.pricing!.priceRangeUndiscounted!.start!.gross.amount
    if (compareAtPrice === finalPrice) {
        compareAtPrice = null;
    }

    /** Handle badges, hack here, classes are lower case, this is why I'm using the slug */
    let badgeClasses = getAttributeValues(attrSlugsEnum.Badges, product.attributes).map(v => v['slug']).map(s => s.toLowerCase())

    /** Handle tags */
    let tags = getAttributeValues(attrSlugsEnum.Tags, product.attributes).map(t => t['name']);

    /** Handle category */
    const categories = product.category ? [shopCategoryMap.inProductsLayout(product.category)] : []

    /** Handle brand */
    const brandName = getAttributeValue(attrSlugsEnum.Brand, product.attributes, 'Generic')
    const brandSlug = getAttributeValue(attrSlugsEnum.Brand, product.attributes, brandName.toLowerCase(), 'slug')

    const brand: IBrand = {
        name: brandName,
        slug: brandSlug,
        image: '',
        country: '',
    }

    /** Handle type*/
    const type = productTypeMap.in(product)

    /** images */
    let images = product.images || [];
    if (isEmpty(images)) {
        images = [{
            id: 'placeholder',
            alt: 'Placeholder',
            url: Placeholders.Product,
            sortOrder: 1,
        }]
    }

    /** Handle options */
    const options = mapVariantAttrsToOptions(product.variants, product.productType)
    const defaultVariantOptions = product.defaultVariant ? mapVariantAttrsToOptions([product.defaultVariant], product.productType) : [];

    /** Handle attributes */
    const attributes = [
        ...selectedAttributesMapIn(product.attributes),
        ...getAttrsFromVariants(product),
    ]

    const variants: IProductVariant[] = product.variants ? product.variants.map(variantMap.in) : [];

    /** handle stocks */
    const stock = product.isAvailable ? StockAvailability.InStock : StockAvailability.OutOfStock

    return {
        id: product.id,
        name,
        stock,
        slug: product.slug,
        description: description,
        excerpt: product.seoDescription || '',
        price: finalPrice,
        compareAtPrice: compareAtPrice,
        availability: "",
        images: images,
        partNumber: "",
        compatibility: "all",
        options: options,
        type: type,
        attributes: attributes,
        brand: brand,
        categories: categories,
        sku: product.defaultVariant?.sku || product.variants?.[0]?.sku,
        badges: badgeClasses,
        rating: 2,
        reviews: 4,
        tags: tags,
        customFields: {
            seoTitle: product.seoTitle,
            seoDescription: product.seoDescription,
        },
        variants: variants,
        defaultVariantOptions: defaultVariantOptions,
    }
}

export const productMap = {
    in: productMapIn,
}
