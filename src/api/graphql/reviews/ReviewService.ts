import {CreateReviewDocument, GetReviewsListDocument} from "~/api/graphql/types";
import {IAddProductReviewData} from "~/api/base";
import {auth} from "~/api";
import {IBaseModelProps} from "~/api/graphql/misc/interfaces";
import {queryList} from "~/api/graphql/misc/helpers";


// export const getReviewById = (id: string) => queryById(id, GetReviewById)
export const getReviewsList = (variables: IBaseModelProps) => queryList(variables, GetReviewsListDocument)
export const createReview = (productId: string, data: IAddProductReviewData) => auth.mutate({
    mutation: CreateReviewDocument,
    variables: {
        product: productId,
        rating: data.rating,
        content: data.content,
    },
})
