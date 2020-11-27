import {IImage} from "~/interfaces/product";

export interface IReview {
    id: string;
    date: string;
    author: string;
    avatar: IImage;
    rating: number;
    content: string;
}
