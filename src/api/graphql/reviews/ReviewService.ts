import {CreateReviewDocument, GetReviewsListDocument, Review} from "~/api/graphql/types";
import {IAddProductReviewData} from "~/api/base";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {withAuth} from "~/api/graphql/users/authService";
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {REVIEWS_PLUGIN_API_URL} from "~/api/graphql/consts";
import {handleRelayedResponse, handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import {reviewMap} from "~/api/graphql/reviews/ReviewMappers";


const reviewsClient = new ApolloClient<NormalizedCacheObject>({
    link: new HttpLink({
        uri: REVIEWS_PLUGIN_API_URL
    }),
    cache: new InMemoryCache()
});

const handleReviewSingleResponse = (res: any) => handleSingleResponse({
    inMapper: reviewMap.in,
    dataField: 'review',
    res,
})

const handleReviewRelayedResponse = (res: any) => handleRelayedResponse({
    inMapper: reviewMap.in,
    dataField: 'reviews',
    res,
})

export const getReviewsList = (variables: IBaseModelProps) => reviewsClient.query({
    query: GetReviewsListDocument,
    variables,
}).then(handleReviewRelayedResponse)


export const createReview = (productId: string, data: Pick<IAddProductReviewData, 'content' | 'rating'>) => withAuth(reviewsClient.mutate)({
    mutation: CreateReviewDocument,
    variables: {
        productId,
        rating: data.rating,
        content: data.content,
    },
}).then(r => {
    const review = r.data.reviewCreate.review

    return {
        data: {
            review,
        }
    }
})
