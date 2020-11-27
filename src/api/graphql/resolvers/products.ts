import {BaseGraphQLResolverReadOnly, IBaseModelProps} from '~/api/interfaces/graphql';
import {GetProductByIdDocument, GetProductBySlugDocument, GetProductListDocument,} from '~/api/graphql/types';
import {filters} from "~/api/services";

export default class ProductResolver extends BaseGraphQLResolverReadOnly {
    getAllQuery = () => GetProductListDocument;
    getSlugQuery = () => GetProductBySlugDocument;
    getIdQuery = () => GetProductByIdDocument;

    all(variables: IBaseModelProps) {
        return super.all(
            filters.utils.filterStack([
                filters.utils.filterPublished,
                filters.utils.filterDefaultChannel,
            ], variables))
    }
}
