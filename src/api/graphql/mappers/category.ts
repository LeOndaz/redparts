import {
    CategoryType,
    IBaseCategory,
    IBlogCategory,
    ICategory,
    IShopCategory,
    IShopCategoryLayout
} from "~/interfaces/category";
import {Mapper} from "~/api/graphql/mappers/interfaces";
import {Category} from "~/api/graphql/types";
import {ICustomFields} from "~/interfaces/custom-fields";

class CategoryMapper<ReturnType extends IBaseCategory> implements Mapper<Category, ICategory> {
    /**
     *
     * Not meant to be used directly, use the subclasses.
     *
     * */

    // @ts-ignore
    categoryType: CategoryType;

    toInternal(category: Category, {customFields}: { customFields?: ICustomFields, } = {}): ReturnType {
        return {
            id: category.id,
            slug: category.slug,
            name: category.name,
            parent: category.parent && this.toInternal(category.parent, {customFields}) || null,
            children: category.children && category.children.edges.map(e => this.toInternal(e.node, {customFields})) || [],
            image: category.backgroundImage?.url || null,
            customFields: {
                description: category.description,
                seoDescription: category.seoDescription,
                metadata: category.metadata || {},
                ...customFields
            },
            type: this.categoryType,
        } as unknown as ReturnType
    }

}

export class ShopCategoryMapper extends CategoryMapper<IShopCategory> {
    categoryType = CategoryType.SHOP;

    toInternal(category: Category, {customFields, layout}: { customFields?: ICustomFields, layout?: IShopCategoryLayout }={}): IShopCategory {
        return {
            ...super.toInternal(category, {customFields}),
            ...(layout ? {layout} : {layout: 'products'}),
        };
    }
}

export class BlogCategoryMapper extends CategoryMapper<IBlogCategory> {
    categoryType = CategoryType.BLOG;
}
