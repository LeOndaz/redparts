/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { IAddress } from '~/interfaces/address';
import { IListOptions, IOrdersList } from '~/interfaces/list';
import { IOrder } from '~/interfaces/order';
import { IUser } from '~/interfaces/user';
import {
    AccountApi,
    IEditAddressData,
    IEditProfileData,
} from '~/api/base';
import {
    accountChangePassword,
    accountEditProfile,
    accountSignIn,
    accountSignOut,
    accountSignUp, editAddress,
    // addAddress,
    // delAddress,
    // editAddress,
    // getAddress,
    getAddresses,
    getDefaultAddress,
    getOrderById,
    getOrderByToken,
    getOrdersList,
} from '~/fake-server/endpoints';
import _ from "lodash"
import { editProfile} from "~/api/graphql/users/userService"
import {
    addAddress,
    deleteAddress,
    getAddressById,
    getAddressList,
    updateAddress
} from "~/api/graphql/addresses/addressService";
import {ILanguage} from "~/interfaces/language";
import {changePassword, signIn, signOut, signUp} from "~/api/graphql/users/authService";

export class FakeAccountApi extends AccountApi {
    signIn(email: string, password: string): Promise<IUser> {
        return signIn(email, password)
    }

    signUp(email: string, password: string): Promise<IUser> {
        return signUp(email, password);
    }

    signOut(): Promise<void> {
        return signOut()
    }

    editProfile(data: IEditProfileData): Promise<IUser> {
        return editProfile(data);
    }

    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return changePassword(oldPassword, newPassword)
    }

    addAddress(user: IUser, data: IEditAddressData, language: ILanguage): Promise<IAddress> {
        // return users.addAddress(user, {
        //     defaultShippingAddress:
        // })
        return addAddress(user.id, data)
    }

    editAddress(addressId: string, data: IEditAddressData, language: ILanguage): Promise<IAddress> {
        return updateAddress(addressId, data);
    }

    delAddress(addressId: string): Promise<void> {
        return deleteAddress(addressId).then()
    }

    getDefaultAddress(): Promise<IAddress | null> {
        return getDefaultAddress();
    }

    getAddress(addressId: string): Promise<IAddress> {
        return getAddressById(addressId)
    }

    getAddresses(user: IUser): Promise<IAddress[]> {
        return getAddressList(user.id).then(res => res.dataList)
    }

    getOrdersList(options?: IListOptions): Promise<IOrdersList> {
        return getOrdersList(options);
    }

    getOrderById(id: string): Promise<IOrder> {
        return getOrderById(id);
    }

    getOrderByToken(token: string): Promise<IOrder> {
        return getOrderByToken(token);
    }
}
