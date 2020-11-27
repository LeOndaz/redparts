import {Mapper} from "~/api/graphql/mappers/interfaces";
import {IReview} from "~/interfaces/review";
import {Review} from "~/api/graphql/types";

export class ReviewsMapper implements Mapper<Review, IReview> {
    namePlaceholder = 'Private'
    avatarPlaceholder = 'http://placehold.it/50'

    toInternal = (obj: Review): IReview => {
        let name = [obj.user.firstName, obj.user.lastName].join(' ')
        return ({
            author: name.trim() && name || this.namePlaceholder,
            avatar: obj.user.avatar || {url: this.avatarPlaceholder},
            content: obj.content,
            date: obj.created,
            id: obj.id,
            rating: obj.rating
        });
    }

}


