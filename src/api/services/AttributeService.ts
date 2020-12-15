import {GetAttributeByIdDocument, SelectedAttribute} from "~/api/graphql/types";
import {client} from "~/api";
import _ from "lodash";


class AttributeUtils {
    getSelectedAttr(slug: string, selectedAttrs: SelectedAttribute[]) {
        return selectedAttrs.find(selectedAttr => selectedAttr.attribute.slug === slug)
    }

    getAttributeValues(slug: string, selectedAttrs: SelectedAttribute[]) {
        /** return attr values */
        return this.getSelectedAttr(slug, selectedAttrs)?.values || []
    }

}

export class AttributeService {
    utils = new AttributeUtils();

    getById(id: string) {
        return client.query({
            query: GetAttributeByIdDocument,
            variables: {
                id,
            }
        })
    }

    getBySlug(slug: string) {
        return client.query({
            query: GetAttributeByIdDocument,
            variables: {
                slug,
            }
        })
    }


}
