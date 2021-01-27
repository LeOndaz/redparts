import {Product, StockAvailability} from "~/api/graphql/types";
import {
    IProduct,
    IProductVariant
} from "~/interfaces/product";
import {customEditorjsParser} from "~/components/utils";
import {mapVariantAttrsToOptions} from "~/api/graphql/misc/mappers/utils";
import {shopCategoryMap} from "~/api/graphql/categories/categoryMappers";
import {
    getAttributeValue,
    getAttributeValues,
    isEmpty,
    mapTranslatable
} from "~/api/graphql/misc/helpers";
import {IBrand} from "~/interfaces/brand";
import {DefaultAttrSlugs, Placeholders} from "~/api/graphql/consts";
import {selectedAttributesMapIn} from "~/api/graphql/attributes/attributeMappers";
import {getAttrsFromVariants} from "~/api/graphql/attributes/utils";
import {variantMap} from "~/api/graphql/productVariants/variantMappers";
import {productTypeMap} from "~/api/graphql/productTypes/productTypeMappers";


const productMapIn = (product: Product): IProduct => {
    if (!product.pricing?.priceRange?.start) {
        throw Error('Default channel slug is not specified or not correct. ')
    }

    let [name, description] = mapTranslatable(product, ['name', 'description'])

    /** Handle markdown description */
    description = JSON.parse(description)
    description = customEditorjsParser.parse(description)

    /** Handle pricing & discounts */
    let finalPrice = product.pricing!.priceRange!.start!.gross.amount
    let compareAtPrice: number | null = product.pricing!.priceRangeUndiscounted!.start!.gross.amount
    if (compareAtPrice === finalPrice) {
        compareAtPrice = null;
    }

    /** Handle badges, hack here, classes are lower case, this is why I'm using the slug */
    let badgeClasses = getAttributeValues(DefaultAttrSlugs.Badges, product.attributes, 'slug').map(s => s.toLowerCase())

    /** Handle tags */
    let tags = getAttributeValues(DefaultAttrSlugs.Tags, product.attributes)

    /** Handle category */
    const categories = product.category ? [shopCategoryMap.inProductsLayout(product.category)] : []

    /** Handle brand */
    const brandName = getAttributeValue(DefaultAttrSlugs.Brand, product.attributes, 'Generic')
    const brandSlug = getAttributeValue(DefaultAttrSlugs.Brand, product.attributes, brandName.toLowerCase(), 'slug')

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
    const options = mapVariantAttrsToOptions(product)

    /** Handle attributes */
    const attributes = [
        ...selectedAttributesMapIn(product.attributes),
        ...getAttrsFromVariants(product),
    ]

    const variants: IProductVariant[] = product.variants ? product.variants.map(variantMap.in) : [];
    console.log(variants)

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
    }
}

export const productMap = {
    in: productMapIn,
}
