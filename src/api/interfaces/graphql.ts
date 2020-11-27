// max-classes-per-file
import {ApolloClient, ApolloQueryResult, DocumentNode, MutationOptions, QueryOptions,} from '@apollo/client';
import {queryById, queryBySlug} from "~/api/graphql/utils";
import {FilterInput, SortingInput} from "~/api/graphql/mappers/interfaces";

export interface IBaseModelProps {
    first?: number,
    last?: number,
    after?: string,
    before?: string,
    filter?: FilterInput
    sortBy?: SortingInput
}

export abstract class BaseGraphQLResolver {
    client: ApolloClient<any>;

    constructor(client: ApolloClient<any>) {
        this.client = client;
    }

    rawQuery = (queryOptions: QueryOptions<any>): Promise<ApolloQueryResult<any>> => {
        return this.client.query(queryOptions)
    };

    rawMutate = (mutationOptions: MutationOptions) => {
        return this.client.mutate(mutationOptions)
    }
}


export abstract class BaseGraphQLResolverReadOnly<T = IBaseModelProps> extends BaseGraphQLResolver {
    abstract getIdQuery(): DocumentNode;

    abstract getSlugQuery(): DocumentNode;

    abstract getAllQuery(): DocumentNode;

    getById(id: string): Promise<any> {
        return this.rawQuery(queryById(id, this.getIdQuery()));
    };

    getBySlug(slug: string): Promise<any> {
        return this.rawQuery(queryBySlug(slug, this.getSlugQuery()));
    };

    all(variables: T): Promise<any> {
        return this.rawQuery({
            query: this.getAllQuery(),
            variables,
        });
    }
}

export abstract class BaseGraphQLResolverReadWrite<C, U> extends BaseGraphQLResolverReadOnly {
    abstract getUpdateMutation(): DocumentNode

    abstract getCreateMutation(): DocumentNode

    create(variables: C): Promise<any> {
        return this.rawMutate({
            mutation: this.getCreateMutation(),
            variables: variables,
        });
    }

    update(variables: U): Promise<any> {
        return this.rawMutate({
            mutation: this.getUpdateMutation(),
            variables: variables,
        });
    }

    delete = () => null

}



