import {CategoryType, ICategory, IShopCategoryLayout} from "~/interfaces/category";
import {Category} from "~/api/graphql/types";
import {parseEditorjsText} from "~/components/utils";
import {mapTranslatable} from "~/api/graphql/misc/helpers";


const categoryMapIn = (category: Category, type: CategoryType, layout?: IShopCategoryLayout): ICategory => {
    let [name, description] = mapTranslatable(category, ['name', 'description'])
    description = parseEditorjsText(description);

    return {
        id: category.id,
        slug: category.slug,
        name: name,
        parent: category.parent && categoryMapIn(category.parent, type, layout) || null,
        children: category.children ? category.children.edges.map(e => e.node).map(node => categoryMapIn(node, type, layout)) : [],
        image: category.backgroundImage?.url || null,
        customFields: {
            description: description,
            seoDescription: category.seoDescription,
        },
        type,
        ...(layout ? {layout} : {})
    }
}

const shopCategoryMapIn = (category: Category, layout: IShopCategoryLayout) => categoryMapIn(category, CategoryType.SHOP, layout)
const blogCategoryMapIn = (category: Category) => categoryMapIn(category, CategoryType.BLOG)


export const shopCategoryMap = {
    inProductsLayout: (category: Category) => shopCategoryMapIn(category, 'products'),
    inCategoriesLayout: (category: Category) => shopCategoryMapIn(category, 'categories')
}


export const blogCategoryMap = {
    in: blogCategoryMapIn
}
