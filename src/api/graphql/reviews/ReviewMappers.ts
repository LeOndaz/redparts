import {IReview} from "~/interfaces/review";
import {Review} from "~/api/graphql/types";
import {Mapper} from "~/api/graphql/interfaces";
import {userMap} from "~/api/graphql/users/userMappers";

const reviewDefaults = {
    namePlaceholder: 'Private',
    avatarPlaceholder: 'http://placehold.it/50'
}

const reviewMapIn = (review: Review): IReview => {
    return ({
        author: userMap.in(review.user),
        avatar: review.user.avatar || {
            url: reviewDefaults.avatarPlaceholder
        },
        content: review.content,
        date: review.created,
        id: review.id,
        rating: review.rating
    });
}

export const reviewMap = {
    in: reviewMapIn
}

