import {CategoryType, ICategory, IShopCategoryLayout} from "~/interfaces/category";
import {Category} from "~/api/graphql/types";
import _ from "lodash"
import {customEditorjsParser} from "~/components/utils";
import {mapTranslatable} from "~/api/graphql/misc/helpers";

const _categoryMapIn = (category: Category, type: CategoryType, layout?: IShopCategoryLayout): ICategory => {
    let [name, description] = mapTranslatable(category, ['name', 'descriptionJson'])

    description = JSON.parse(description)
    description = customEditorjsParser.parse(description)

    return {
        id: category.id,
        slug: category.slug,
        name: name,
        parent: category.parent && _categoryMapIn(category.parent, type, layout) || null,
        children: category.children && category.children.edges.map(e => e.node).map(node => _categoryMapIn(node, type, layout)) || [],
        image: category.backgroundImage?.url || null,
        customFields: {
            description: description,
            seoDescription: category.seoDescription,
        },
        type,
        ...(layout ? {layout} : {})
    }
}

const _shopCategoryMapIn = (category: Category, layout: IShopCategoryLayout) => _categoryMapIn(category, CategoryType.SHOP, layout)
const _blogCategoryMapIn = (category: Category) => _categoryMapIn(category, CategoryType.BLOG)


export const shopCategoryMap = {
    inProductsLayout: _.partialRight(_shopCategoryMapIn, 'products'),
    inCategoriesLayout: _.partialRight(_shopCategoryMapIn, 'categories'),
}


export const blogCategoryMap = {
    in: _blogCategoryMapIn
}
