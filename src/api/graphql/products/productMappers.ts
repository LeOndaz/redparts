import {AttributeValue, Product, ProductVariant, SelectedAttribute, StockAvailability} from "~/api/graphql/types";
import {
    IImage,
    IProduct,
    IProductAttribute,
    IProductAttributeValue,
    IProductType,
    IProductVariant
} from "~/interfaces/product";
import {customEditorjsParser} from "~/components/utils";
import {mapVariantAttrsToOptions} from "~/api/graphql/misc/mappers/utils";
import {shopCategoryMap} from "~/api/graphql/categories/categoryMappers";
import {
    getAttributeValue,
    getAttributeValues,
    getMetadataItem, isEmpty,
    mapTranslatable
} from "~/api/graphql/misc/helpers";
import {IBrand} from "~/interfaces/brand";
import {DefaultAttrSlugs, MetadataKeys, Placeholders} from "~/api/graphql/consts";

const selectedAttributeValuesMapIn = (values: AttributeValue[]): IProductAttributeValue[] => {
    return values.map(value => {
        let [name] = mapTranslatable(value, ['name'])

        return {
            name,
            slug: value.slug as string,
        }
    })
}

const selectedAttrMapIn = (selectedAttr: SelectedAttribute): IProductAttribute => {
    let [name] = mapTranslatable(selectedAttr.attribute, ['name'])

    return {
        name: name,
        slug: selectedAttr.attribute.slug as string,
        featured: !!getMetadataItem(selectedAttr.attribute.metadata, MetadataKeys.Featured, false),
        values: selectedAttributeValuesMapIn(selectedAttr.values),
    }
}


const selectedAttributesMapIn = (selectedAttrs: SelectedAttribute[]): IProductAttribute[] =>
    selectedAttrs.map(selectedAttrMapIn)

const mapVariant = (variant: ProductVariant): IProductVariant => {
    const attrValues = selectedAttributesMapIn(variant.attributes);
    const price = variant.pricing!.price!.gross.amount;

    return {
        name: variant.name,
        sku: variant.sku,
        price: price,
        attributes: attrValues,
    }
}


const getAttrsFromVariants = (product: Product): IProductAttribute[] => {
    const variants = product.variants;
    const variantAttrSlugs = product.productType.variantAttributes?.map(va => va!.slug)
    const variantAttrs: IProductAttribute[] = [];

    variantAttrSlugs?.forEach(slug => {

        variants?.forEach(variant => {
            const selectedAttr = variant!.attributes.find(selectedAttr => selectedAttr.attribute.slug === slug)
            if (selectedAttr) {
                // check if it exists in variantAttrs
                // if it does, add the new values and not the attribute as whole
                const va = variantAttrs.find(va => va.slug === selectedAttr.attribute.slug)

                if (va) {
                    va.values = [...va.values, ...selectedAttributeValuesMapIn(selectedAttr.values)]
                } else {
                    variantAttrs.push(selectedAttrMapIn(selectedAttr))
                }
            }
        })
    })

    return variantAttrs

}

const productTypeMapIn = (product: Product): IProductType => {
    const productType = product.productType;
    const variantAttrSlugs = productType.variantAttributes?.map(value => value!.slug) as string[]
    const productTypeAttrSlugs = productType.productAttributes?.map(value => value!.slug) as string[]

    return {
        name: productType.name,
        slug: productType.slug,
        attributeGroups: [
            {
                name: 'General',
                slug: 'general-specs',
                attributes: productTypeAttrSlugs,
            },
            {
                name: "Specific",
                slug: "variant-specs",
                attributes: variantAttrSlugs,
            }
        ]
    }
}

const productMapIn = (product: Product): IProduct => {
    if (!product.pricing?.priceRange?.start) {
        throw Error('Default channel slug is not specified or not correct. ')
    }

    let [name, description] = mapTranslatable(product, ['name', 'descriptionJson'])

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
    const type = productTypeMapIn(product)

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
    const variantAttrs = getAttrsFromVariants(product)
    const attributes = [
        ...selectedAttributesMapIn(product.attributes),
        ...variantAttrs,
    ]

    const variants: IProductVariant[] = product.variants ? product.variants.map(mapVariant) : [];

    return {
        id: product.id,
        name: name,
        slug: product.slug,
        description: description,
        excerpt: product.seoDescription || '',
        price: finalPrice,
        compareAtPrice: compareAtPrice,
        stock: product.isAvailable ? StockAvailability.InStock : StockAvailability.OutOfStock,
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
