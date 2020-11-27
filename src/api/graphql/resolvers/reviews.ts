import {BaseGraphQLResolverReadWrite} from "~/api/interfaces/graphql";
import {GetReviewsListDocument} from "~/api/graphql/types";

interface ICreateReview {
    product: string;
    content: string;
    rating: number
}

export class ReviewsResolver extends BaseGraphQLResolverReadWrite<ICreateReview, ICreateReview> {
    /* user is automatically set to the requestor */
    getIdQuery = () => GetReviewsListDocument; /**/
    getSlugQuery = () => GetReviewsListDocument; /**/
    getAllQuery = () => GetReviewsListDocument;
    getUpdateMutation = () => GetReviewsListDocument; /**/
    getCreateMutation = () => GetReviewsListDocument; /**/
}
