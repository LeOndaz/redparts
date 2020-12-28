import {
    GetCategoryBySlugDocument,
    GetCategoryListDocument,
} from "~/api/graphql/types";
import {client} from "~/api";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {handleRelayedResponse, handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {ApolloQueryResult} from "@apollo/client";
import {ILanguage} from "~/interfaces/language";
import {blogCategoryMap, shopCategoryMap} from "~/api/graphql/categories/categoryMappers";

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
    handleCategorySingleResponse(res, blogCategoryMap.in)

const handleBlogCategoryRelayedResponse = (res: ApolloQueryResult<any>) =>
    handleCategoryRelayedResponse(res, blogCategoryMap.in)

const handleShopCategorySingleResponseProductsLayout = (res: ApolloQueryResult<any>) => {
    console.log(' #handleShopCategorySingleResponse ')
    return handleCategorySingleResponse(res, shopCategoryMap.inProductsLayout)
}

const handleShopCategoryRelayedResponseProductsLayout = (res: ApolloQueryResult<any>) => {
    console.log(' #handleShopCategoryRelayedResponse ')
    return handleCategoryRelayedResponse(res, shopCategoryMap.inProductsLayout)
}

// const _getCategoryById = (id: string) => queryById(id, GetCategoryByIdDocument)
// const _getCategoryById = (id: string, language: ILanguage) => client.query({
//     query: GetCategoryByIdDocument,
//     variables: {
//         id,
//         languageCode: language.code,
//     }
// })

const _getCategoryBySlug = (slug: string, language: ILanguage) => client.query({
    query: GetCategoryBySlugDocument,
    variables: {
        slug,
        languageCode: language.code
    }
})

const _getCategoryList = (variables: IBaseCategoryProps, language: ILanguage) => client.query({
    query: GetCategoryListDocument,
    variables: {
        ...variables,
        languageCode: language.code,
    },
})

/** exports */
export const getShopCategoryBySlugProductsLayout = (slug: string, language: ILanguage) => _getCategoryBySlug(slug, language).then(handleShopCategorySingleResponseProductsLayout)
export const getShopCategoryListProductsLayout = (variables: IBaseCategoryProps, language: ILanguage) => _getCategoryList(variables, language).then(handleShopCategoryRelayedResponseProductsLayout)

// export const getShopCategoryById = (layout: IShopCategoryLayout) =>
//     wrapService<string>(_getCategoryById, handleShopCategorySingleResponse, layout)

// const getShopCategoryBySlug = (layout: IShopCategoryLayout) => (slug: string) => {
//     console.log(layout, ' #getShopCategoryBySlug#')
//     return _getCategoryBySlug(slug).then()
// }
//
// const getShopCategoryList = (layout: IShopCategoryLayout) => (variables: IBaseCategoryProps) => {
//     console.log(layout, ' #getShopCategoryList#')
//     return wrapService(_getCategoryList, handleShopCategoryRelayedResponse, layout)(variables)
// }
//
// export const getCategoryList = {
//     asProducts: getShopCategoryList('products'),
//     asCategories: getShopCategoryList('categories')
// }
//
// export const getCategoryBySlug = {
//     asProducts: getShopCategoryBySlug('products'),
//     asCategories: getShopCategoryBySlug('categories')
// }
//
// export const getBlogCategoryById = (id: string) => wrapService(_getCategoryById, handleBlogCategorySingleResponse)(id)
// export const getBlogCategoryBySlug = (slug: string) => wrapService(_getCategoryBySlug, handleBlogCategorySingleResponse)(slug)
// export const getBlogCategoryList = (variables: IBaseCategoryProps) => wrapService(_getCategoryList, handleBlogCategoryRelayedResponse)(variables)
