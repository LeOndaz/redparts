import {IProduct} from "~/interfaces/product";

class ProductUtils {
    getMostVariantPrice(products: IProduct[]) {
        return products.reduce((acc, curr) => {
            return Math.max(acc, curr.price)
        }, 0)
    }

    getLeastVariantPrice(products: IProduct[]) {
        products.reduce((acc, curr) => {
            return Math.min(acc, curr.price)
        }, this.getMostVariantPrice(products))
    }
}

export class ProductService {
    utils = new ProductUtils()
}
