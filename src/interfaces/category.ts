// application
import { ICustomFields } from './custom-fields';

export interface IBaseCategory {
    id: string;
    type: string;
    name: string;
    slug: string;
    image: string|null;
    items?: number;
    parent?: this | null;
    children?: this[];
    customFields: ICustomFields;
}

export enum CategoryType {
    SHOP = 'shop',
    BLOG ='blog',
}

export type IShopCategoryLayout = 'categories' | 'products';

export interface IShopCategory extends IBaseCategory {
    type: CategoryType.SHOP;
    layout: IShopCategoryLayout;
}

export interface IBlogCategory extends IBaseCategory {
    type: CategoryType.BLOG;
}

export type ICategory = IShopCategory | IBlogCategory;
