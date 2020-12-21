import {CategoryType, ICategory, IShopCategoryLayout} from "~/interfaces/category";
import {Category} from "~/api/graphql/types";
import * as util from "util";
import _ from "lodash"


export const categoryMapIn = (category: Category, type: CategoryType, layout?: IShopCategoryLayout): ICategory => {
    const transformation = {
        id: category.id,
        slug: category.slug,
        name: category.name,
        parent: category.parent && categoryMapIn(category.parent, type, layout) || null,
        children: category.children && _.map(category.children.edges, 'node').map(node => categoryMapIn(node, type, layout)) || [],
        image: category.backgroundImage?.url || null,
        customFields: {
            description: category.description,
            seoDescription: category.seoDescription,
            metadata: category.metadata || {},
        },
        type,
        ...(layout ? {layout} : {})
    }

    // console.log(util.inspect(transformation))

    // @ts-ignore
    return transformation
}

export const shopCategoryMapIn = (category: Category, layout: IShopCategoryLayout) => categoryMapIn(category, CategoryType.SHOP, layout)
export const blogCategoryMapIn = (category: Category) => categoryMapIn(category, CategoryType.BLOG)

