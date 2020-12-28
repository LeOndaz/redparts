import {MetadataItem, User} from "~/api/graphql/types";
import {IUser} from "~/interfaces/user";
import {IImage} from "~/interfaces/product";
import {getMetadataItem} from "~/api/graphql/misc/helpers";

const userMapIn = (user: User): IUser | null => {
    return user ? {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: getMetadataItem(user.metadata as MetadataItem[], 'phone'),
        avatar: user.avatar as IImage,
        dateJoined: user.dateJoined,
        lastLogin: user.lastLogin,
        isActive: user.isActive,
    } : null
}

export const userMap = {
    in: userMapIn,
}
