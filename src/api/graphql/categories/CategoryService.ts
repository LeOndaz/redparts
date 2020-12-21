import {
    Category,
    CategoryCountableEdge,
    GetCategoryByIdDocument,
    GetCategoryBySlugDocument,
    GetCategoryListDocument, GetProductsByCategoryIdDocument, ProductCountableConnection
} from "~/api/graphql/types";
import {client} from "~/api";
import {queryById, queryBySlug, queryList} from "~/api/graphql/misc/helpers";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {handleRelayedResponse, handleSingleResponse, wrapService} from "~/api/graphql/misc/mappers/utils";
import {ApolloQueryResult} from "@apollo/client";
import {CategoryType, IShopCategoryLayout} from "~/interfaces/category";
import _ from "lodash";
import {blogCategoryMapIn, shopCategoryMapIn} from "~/api/graphql/categories/CategoryMapper";

interface IBaseCategoryProps extends IBaseModelProps {
    level?: number
}

const handleCategorySingleResponse = (res: ApolloQueryResult<any>, inMapper: (...arg: any) => any) => handleSingleResponse({
    res,
    inMapper,
    dataField: 'category',
})

const handleCategoryRelayedResponse = (res: ApolloQueryResult<any>, inMapper: (...arg: any) => any) => handleRelayedResponse({
    res,
    inMapper,
    dataField: "categories",
})

const handleBlogCategorySingleResponse = (res: ApolloQueryResult<any>) =>
    handleCategorySingleResponse(res, blogCategoryMapIn)

const handleBlogCategoryRelayedResponse = (res: ApolloQueryResult<any>) =>
    handleCategoryRelayedResponse(res, blogCategoryMapIn)

const handleShopCategorySingleResponse = (res: ApolloQueryResult<any>, layout: IShopCategoryLayout) => {
    console.log(layout, ' #handleShopCategorySingleResponse ')
    return handleCategorySingleResponse(res, _.partialRight(shopCategoryMapIn, layout))
}

const handleShopCategoryRelayedResponse = (res: ApolloQueryResult<any>, layout: IShopCategoryLayout) => {
    console.log(layout, ' #handleShopCategoryRelayedResponse ')
    return handleCategoryRelayedResponse(res, _.partialRight(shopCategoryMapIn, layout))
}

const _getCategoryById = (id: string) => queryById(id, GetCategoryByIdDocument)
const _getCategoryBySlug = (slug: string) => queryBySlug(slug, GetCategoryBySlugDocument)
const _getCategoryList = (variables: IBaseCategoryProps) => queryList(variables, GetCategoryListDocument)

/** exports */
// export const getShopCategoryById = (layout: IShopCategoryLayout) =>
//     wrapService<string>(_getCategoryById, handleShopCategorySingleResponse, layout)

const getShopCategoryBySlug = (layout: IShopCategoryLayout) => {
    console.log(layout, ' #getShopCategoryBySlug#')
    return wrapService<string>(_getCategoryBySlug, handleShopCategorySingleResponse, layout)
}

const getShopCategoryList = (layout: IShopCategoryLayout) => {
    console.log(layout, ' #getShopCategoryList#')
    return wrapService<IBaseCategoryProps>(_getCategoryList, handleShopCategoryRelayedResponse, layout)
}

export const getCategoryList = {
    asProducts: getShopCategoryList('products'),
    asCategories: getShopCategoryList('categories')
}

export const getCategoryBySlug = {
    asProducts: getShopCategoryBySlug('products'),
    asCategories: getShopCategoryBySlug('categories')
}

export const getBlogCategoryById = wrapService<string>(_getCategoryById, handleBlogCategorySingleResponse)
export const getBlogCategoryBySlug = wrapService<string>(_getCategoryBySlug, handleBlogCategorySingleResponse)
export const getBlogCategoryList = wrapService<IBaseCategoryProps>(_getCategoryList, handleBlogCategoryRelayedResponse)
