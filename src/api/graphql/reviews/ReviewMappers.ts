import {IReview} from "~/interfaces/review";
import {Review} from "~/api/graphql/types";
import {Mapper} from "~/api/graphql/interfaces";

const reviewDefaults = {
    namePlaceholder: 'Private',
    avatarPlaceholder: 'http://placehold.it/50'
}

const _reviewMapIn = (obj: Review): IReview => {
    const name = [obj.user.firstName, obj.user.lastName].join(' ')
    return ({
        author: name.trim() && name || reviewDefaults.namePlaceholder,
        avatar: obj.user.avatar || {url: reviewDefaults.avatarPlaceholder},
        content: obj.content,
        date: obj.created,
        id: obj.id,
        rating: obj.rating
    });
}

export const reviewMap = {
    in: _reviewMapIn
}

