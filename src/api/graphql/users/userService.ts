import {GetCurrentAuthUserDocument, UpdateCustomerDocument} from "~/api/graphql/types";
import {IEditProfileData} from "~/api/base";
import {client, updateMetadata} from "~/api";
import {withAuth} from "~/api/graphql/users/authService";
import {getMetadataItem, handleAccountErrors, throwAuthError} from "~/api/graphql/misc/helpers";
import {IUser} from "~/interfaces/user";
import {userMap} from "~/api/graphql/users/userMappers";
import {MetadataKeysEnum} from "~/api/graphql/consts";


export const getCurrentAuthUser = (): Promise<IUser | null> => withAuth(client.query)({
    query: GetCurrentAuthUserDocument
}).then(res => res.data.me)
    .then(user => user ? userMap.in(user) : null)

export const editProfile = (data: IEditProfileData) => {
    const {phone, ...rest} = data;

    return getCurrentAuthUser().then(user => {
        return withAuth(client.mutate)({
            mutation: UpdateCustomerDocument,
            variables: {
                id: user.id,
                input: {
                    ...rest,
                }
            }
        }).then(handleAccountErrors('customerUpdate'))
            .then(r => r.data.customerUpdate.user)
            .then(userMap.in).then(updatedUser => {
                return updateMetadata(updatedUser.id, [{
                    key: MetadataKeysEnum.Phone,
                    value: phone,
                }]).then(metadata => {
                    return {
                        ...updatedUser,
                        phone: getMetadataItem(metadata, MetadataKeysEnum.Phone)
                    }
                })
            })
    })
}

// function  getByEmail(email: string) {
//     return client.query({
//         query: GetUserByEmailDocument,
//         variables: {
//             email,
//         }
//     })
// }
