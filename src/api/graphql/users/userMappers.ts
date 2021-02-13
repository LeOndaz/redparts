import {MetadataItem, User} from "~/api/graphql/types";
import {IUser} from "~/interfaces/user";
import {IImage} from "~/interfaces/product";
import {getMetadataItem} from "~/api/graphql/misc/helpers";
import {MetadataKeysEnum, Placeholders} from "~/api/graphql/consts";

const userMapIn = (user: User): IUser  => {
    let avatar = user.avatar as IImage;
    if (!avatar){
        avatar = {
            alt: "Placeholder",
            url: Placeholders.UserAvatar,
        }
    }

    const phone = getMetadataItem(user.metadata as MetadataItem[], MetadataKeysEnum.Phone)

    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateJoined: user.dateJoined,
        lastLogin: user.lastLogin,
        isActive: user.isActive,
        avatar,
        phone,
    }
}

export const userMap = {
    in: userMapIn,
}
