/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import {IAddress} from '~/interfaces/address';
import {IListOptions, IOrdersList} from '~/interfaces/list';
import {IOrder} from '~/interfaces/order';
import {IUser} from '~/interfaces/user';
import {
    AccountApi,
    IEditAddressData,
    IEditProfileData,
} from '~/api/base';
import {
    // accountChangePassword,
    // accountEditProfile,
    // accountSignIn,
    // accountSignOut,
    // accountSignUp, editAddress,
    // addAddress,
    // delAddress,
    // editAddress,
    // getAddress,
    // getAddresses,
    getDefaultAddress,
    // getOrderById,
    // getOrderByToken,
    // getOrdersList,
} from '~/fake-server/endpoints';
import {editProfile} from "~/api/graphql/users/userService"
import {
    addAddress,
    deleteAddress,
    getAddressById,
    getAddressList, setDefaultAddress,
    updateAddress
} from "~/api/graphql/addresses/addressService";
import {ILanguage} from "~/interfaces/language";
import {changePassword, signIn, signOut, signUp, verifyEmail} from "~/api/graphql/users/authService";
import {getOrderById, getOrderByToken, getOrdersList} from "~/api";
import {IBaseModelProps} from "~/api/graphql/interfaces";
import {sortingMap} from "~/api/graphql/misc/mappers/sorting";
import {removeUndefined} from "~/api/graphql/misc/helpers";
import {AddressTypeEnum, Checkout} from "~/api/graphql/types";
import {getCheckoutByToken} from "~/api/graphql/checkouts/checkoutService";
import {string} from "prop-types";

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

    verifyEmail(email: string, token: string): Promise<void>{
        return verifyEmail(email, token)
    }

    editProfile(data: IEditProfileData): Promise<IUser> {
        return editProfile(data);
    }

    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return changePassword(oldPassword, newPassword)
    }

    addAddress(user: IUser, data: IEditAddressData, language: ILanguage): Promise<IAddress> {
        return addAddress(user.id, data)
    }

    editAddress(addressId: string, data: IEditAddressData, language: ILanguage): Promise<IAddress> {
        return updateAddress(addressId, data);
    }

    delAddress(addressId: string): Promise<void> {
        return deleteAddress(addressId).then()
    }

    getDefaultAddress(user: IUser): Promise<IAddress | null> {
        return this.getAddresses(user).then(r => r.find(addr => addr.default) || null)
    }

    setDefaultAddress(addressId: string, userId: string, type: AddressTypeEnum): Promise<IUser | null> {
        return setDefaultAddress(addressId, userId, type)
    }

    getAddress(addressId: string): Promise<IAddress> {
        return getAddressById(addressId)
    }

    getAddresses(user: IUser): Promise<IAddress[]> {
        return getAddressList(user.id).then(res => res.dataList)
    }

    getOrdersList(options: IListOptions, language: ILanguage): Promise<IOrdersList> {
        let variables: IBaseModelProps = {
            first: options?.limit,
            after: options?.after,
            before: options?.before,
        }

        variables = removeUndefined(variables)
        return getOrdersList(variables, language).then(res => {
            return {
                sort: options?.sort || 'default',
                items: res.dataList,
                navigation: res.getNavigation(options?.limit || 8)
            }
        });
    }

    getOrderById(id: string, language: ILanguage): Promise<IOrder> {
        return getOrderById(id);
    }

    getOrderByToken(token: string, language: ILanguage): Promise<IOrder> {
        return getOrderByToken(token, language);
    }

    getCheckoutByToken(token: string, language: ILanguage): Promise<Checkout> {
        return getCheckoutByToken(token, language)
    }
}
