import {IUser} from "~/interfaces/user";
import {addressMapper} from "~/api";
import {auth} from "~/api/services";
import {AddressInput, CountryCode, UpdateCustomerDocument} from "~/api/graphql/types";
import {IEditAddressData} from "~/api/base";
import {addAddress} from "~/fake-server/endpoints";

export class UserService {
    renewToken(user: IUser) {
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

    addAddress(user: IUser, input: IEditAddressData) {
        console.log(input)
        return addAddress(input);
        // /** will work, ignore .id */
        // const customerInput: AddressInput = {
        //     ...addressMapper.toInternal(<any>input),
        //     country: input.country
        // }
        //
        // return auth.mutate({
        //     mutation: UpdateCustomerDocument,
        //     variables: {
        //         id: user.id,
        //         input: customerInput
        //     }
        // })
    }
    //
    // getByEmail(email: string) {
    //     return client.query({
    //         query: GetUserByEmailDocument,
    //         variables: {
    //             email,
    //         }
    //     })
    // }

}
