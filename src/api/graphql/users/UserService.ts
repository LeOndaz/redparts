import {IUser} from "~/interfaces/user";
import {AddressInput, CountryCode, GetCurrentAuthUserDocument, UpdateCustomerDocument} from "~/api/graphql/types";
import {IEditAddressData, IEditProfileData} from "~/api/base";
import {loadFromLocalStorage} from "~/services/utils";
import _ from "lodash";
import {auth} from "~/api";

export const renewToken = (user: IUser) => {
    return auth.renewToken(user.tokens.refresh, user.tokens.csrf).then(token => {
        return {
            ...user,
            tokens: {
                ...user.tokens,
                token,
            }
        }
    })
}

export function addAddress(user: IUser, internal: IEditAddressData) {

}


export function editProfile(data: IEditProfileData) {
    const {phone, ...rest} = data;

    /* guaranteed auth operation, so user must exist. */

    auth.query({
        query: GetCurrentAuthUserDocument,
    }).then(r => {
        const id = r.data.user.id
        if (!id) {
            throw Error()
        }

        return auth.mutate({
            mutation: UpdateCustomerDocument,
            variables: {
                id,
                input: {
                    ...rest,
                }
            }
        }).then(r => {
            if (!_.isEmpty(r.data!.customerUpdate.accountErrors)) {
                throw Error()
            }
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
