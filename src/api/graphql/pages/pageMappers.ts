import {Page} from "~/api/graphql/types";
import {IPage} from "~/interfaces/page";
import {getAttributeFileValue, getAttributeValue, mapTranslatable} from "~/api/graphql/misc/helpers";
import {parseEditorjsText} from "~/components/utils";
import {attrSlugsEnum} from "~/api/graphql/consts";

const pageMapIn = (page: Page): IPage => {
    let [title, contentHTML] = mapTranslatable(page, ['title', 'content'])
    contentHTML = parseEditorjsText(contentHTML);

    const backgroundImage = getAttributeFileValue(attrSlugsEnum.Background, page.attributes)

    return {
        lastModified: page.publicationDate,
        attributes: page.attributes,
        slug: page.slug,
        backgroundImage,
        contentHTML,
        title,
    }
}

export const pageMap = {
    in: pageMapIn
}
