import {BaseGraphQLResolverReadOnly, IBaseModelProps} from '~/api/interfaces/graphql';

import {
    Category,
    CategoryCountableConnection,
    CategoryCountableEdge,
    GetCategoryByIdDocument,
    GetCategoryBySlugDocument,
    GetCategoryListDocument,
    GetProductsByCategoryIdDocument,
    ProductCountableConnection,
} from '~/api/graphql/types';

/**
 * Resolvers should only return GraphQl types, then cast them with any helper function.
 * */

interface IBaseCategoryProps extends IBaseModelProps {
    level?: number
}

export default class CategoryResolver extends BaseGraphQLResolverReadOnly<IBaseCategoryProps> {
    getIdQuery = () => GetCategoryByIdDocument
    getSlugQuery = () => GetCategoryBySlugDocument;
    getAllQuery = () => GetCategoryListDocument;

    getChildrenOfById = (id: string): Promise<CategoryCountableEdge[]> => this.rawQuery({
        query: GetCategoryByIdDocument,
        variables: {
            id,
        },
    }).then(r => r.data.category.children);

    getProductsOfById = (id: string): Promise<ProductCountableConnection> => this.rawQuery({
        query: GetProductsByCategoryIdDocument,
        variables: {
            id,
        }
    }).then(r => r.data.products);
}
