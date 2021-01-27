import {ProductVariant, StockAvailability} from "~/api/graphql/types";
import {IProductVariant} from "~/interfaces/product";
import {selectedAttributesMapIn} from "~/api/graphql/attributes/attributeMappers";
import * as util from "util";

const variantMapIn = (variant: ProductVariant): IProductVariant => {
    const attrValues = selectedAttributesMapIn(variant.attributes);
    const price = variant.pricing!.price!.gross.amount;
    // console.log(util.inspect(variant))
    const stock = variant.quantityAvailable > 0 ? StockAvailability.InStock : StockAvailability.OutOfStock;
    /** Handle pricing & discounts */
    let finalPrice = variant.pricing!.price!.gross.amount
    let compareAtPrice: number | null = variant.pricing!.priceUndiscounted?.net.amount
    if (compareAtPrice === finalPrice) {
        compareAtPrice = null;
    }

    return {
        id: variant.id,
        name: variant.name,
        sku: variant.sku,
        attributes: attrValues,
        compareAtPrice,
        price,
        stock,
    }
}

export const variantMap = {
    in: variantMapIn,
}
