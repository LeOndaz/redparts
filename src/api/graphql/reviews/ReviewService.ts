import {CreateReviewDocument, GetReviewsListDocument} from "~/api/graphql/types";
import {IAddProductReviewData} from "~/api/base";
import {queryList} from "~/api/graphql/misc/helpers";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {withAuth} from "~/api/graphql/users/authService";
import {client} from "~/api";


// export const getReviewById = (id: string) => queryById(id, GetReviewById)
export const getReviewsList = (variables: IBaseModelProps) => queryList(variables, GetReviewsListDocument)
export const createReview = (productId: string, data: IAddProductReviewData) => withAuth(client.mutate)({
    mutation: CreateReviewDocument,
    variables: {
        product: productId,
        rating: data.rating,
        content: data.content,
    },
})
