import {
    GetAttributeByIdDocument,
    GetAttributeBySlugDocument,
    SelectedAttribute
} from "~/api/graphql/types";
import _ from "lodash";
import {queryBySlug} from "~/api/graphql/misc/helpers";


export const attrUtils = {
    getSelectedAttr(slug: string, selectedAttrs: SelectedAttribute[]) {
        return _.find(selectedAttrs, (selectedAttr) => selectedAttr.attribute.slug === slug)
    },

    getAttributeValues(slug: string, selectedAttrs: SelectedAttribute[]) {
        /** return attr values */
        return this.getSelectedAttr(slug, selectedAttrs)?.values || []
    }

}

export const getAttributeBySlug = (slug: string) => queryBySlug(slug, GetAttributeBySlugDocument)
// export const getAttributeById = (id: string) => queryById(id, GetAttributeByIdDocument)

