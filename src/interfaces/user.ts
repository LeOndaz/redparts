import {IImage} from "~/interfaces/product";

export interface IUser {
    id: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    avatar: IImage;
    // tokens: IUserTokens;
    isActive: boolean;
    lastLogin: string;
    dateJoined: string;
}

export interface IUserTokens {
    refresh: string;
    access: string;
    csrf: string
}
