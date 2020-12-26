import {CategoryType, ICategory, IShopCategoryLayout} from "~/interfaces/category";
import {Category} from "~/api/graphql/types";
import _ from "lodash"

const _categoryMapIn = (category: Category, type: CategoryType, layout?: IShopCategoryLayout): ICategory => {
        return  {
            id: category.id,
            slug: category.slug,
            name: category.name,
            parent: category.parent && _categoryMapIn(category.parent, type, layout) || null,
            children: category.children && _.map(category.children.edges, 'node').map(node => _categoryMapIn(node, type, layout)) || [],
            image: category.backgroundImage?.url || null,
            customFields: {
                description: category.description,
                seoDescription: category.seoDescription,
                metadata: category.metadata || {},
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
