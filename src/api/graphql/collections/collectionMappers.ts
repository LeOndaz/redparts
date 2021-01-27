import {Collection, Image} from "~/api/graphql/types";
import {mapTranslatable, mockRelayResponse} from "~/api/graphql/misc/helpers";
import {handleProductRelayedResponse} from "~/api";
import {RelayedResponse} from "~/api/graphql/misc/mappers/utils";
import {IProduct} from "~/interfaces/product";
import {ICustomFields} from "~/interfaces/custom-fields";
import {customEditorjsParser} from "~/components/utils";


export interface ICollection {
    slug: string;
    name: string;
    description: string;
    seoDescription: string;
    seoTitle: string;
    products: IProduct[];
    image: Image;
    customFields: ICustomFields;
}

const collectionMapIn = (collection: Collection): ICollection => {
    let products: RelayedResponse<IProduct> = handleProductRelayedResponse(
        mockRelayResponse(
            collection.products, 'products'
        )
    )

    let [name, description] = mapTranslatable(collection, ['name', 'description'])
    description = JSON.parse(description)
    description = customEditorjsParser.parse(description)

    return {
        name,
        description,
        products: products.dataList,
        slug: collection.slug,
        image: collection.backgroundImage,
        seoTitle: collection.seoTitle || '',
        seoDescription: collection.seoDescription || '',
    }

}

export const collectionMap = {
    in: collectionMapIn
}
