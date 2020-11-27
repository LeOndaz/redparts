import {AttributeCountableConnection, GetAttributeByIdDocument,} from "~/api/graphql/types";
import {BaseGraphQLResolverReadOnly} from "~/api/interfaces/graphql";
import {DocumentNode} from "graphql";


abstract class BaseAttributeResolver extends BaseGraphQLResolverReadOnly {
    getIdQuery = () => GetAttributeByIdDocument;
    getSlugQuery = () => GetAttributeByIdDocument;

}

