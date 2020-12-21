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
    accountSignUp,
    addAddress,
    delAddress,
    editAddress,
    // getAddress,
    getAddresses,
    getDefaultAddress,
    getOrderById,
    getOrderByToken,
    getOrdersList,
} from '~/fake-server/endpoints';
import _ from "lodash"
import {auth} from "~/api";
import {editProfile} from "~/api/graphql/users/UserService"
import {deleteAddress, getAddressById} from "~/api/graphql/addresses/AddressService";

export class FakeAccountApi extends AccountApi {
    signIn(email: string, password: string): Promise<IUser> {
        return auth.signIn(email, password)
    }

    signUp(email: string, password: string): Promise<IUser> {
        return auth.signUp(email, password);
    }

    signOut(): Promise<void> {
        return auth.signOut()
    }

    editProfile(data: IEditProfileData): Promise<IUser> {
        // return accountEditProfile(data);
        return editProfile(data);
    }

    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return auth.changePassword(oldPassword, newPassword).then()
    }

    addAddress(user: IUser, data: IEditAddressData): Promise<IAddress> {
        // return users.addAddress(user, {
        //     defaultShippingAddress:
        // })

        return addAddress(data);
    }

    editAddress(addressId: string, data: IEditAddressData): Promise<IAddress> {
        return editAddress(addressId, data);
    }

    delAddress(addressId: string): Promise<void> {
        return deleteAddress(addressId).then()
    }

    getDefaultAddress(): Promise<IAddress | null> {
        return getDefaultAddress();
    }

    getAddress(addressId: string): Promise<IAddress> {
        return getAddressById(addressId).then()
    }

    getAddresses(): Promise<IAddress[]> {
        return getAddresses();
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
