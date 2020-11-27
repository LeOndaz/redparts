import {SelectedAttribute} from "~/api/graphql/types";
import {client} from "~/api";




class AttributeUtils {
    getSelectedAttr(slug: string, selectedAttrs: SelectedAttribute[]) {
        return selectedAttrs.filter(selectedAttr => selectedAttr.attribute.slug === slug)[0]
    }

    getAttributeValues(slug: string, selectedAttrs: SelectedAttribute[]) {
        /** return attr values */
        return this.getSelectedAttr(slug, selectedAttrs) ?? []
    }

    mapAttrToValues(badgeSelectedAttr: SelectedAttribute): string[] {
        /** attribute name: Badges (lower-cased) */
        return badgeSelectedAttr.values.map(val => val?.name ?? '').filter(x => x)
    }

}

export class AttributeService {
    utils = new AttributeUtils();

    getAttributeBySlug(slug: string) {
        return client.query({
            query: '',
            variables: {
                slug
            }
        })
    }
}
