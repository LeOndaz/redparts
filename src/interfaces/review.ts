import {IImage} from "~/interfaces/product";
import {IUser} from "~/interfaces/user";

export interface IReview {
    id: string;
    date: string;
    author: IUser;
    avatar: IImage;
    rating: number;
    content: string;
}
