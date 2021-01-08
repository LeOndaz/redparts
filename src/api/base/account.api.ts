// application
import { IAddress, IAddressData } from '~/interfaces/address';
import { IListOptions, IOrdersList } from '~/interfaces/list';
import { IOrder } from '~/interfaces/order';
import { IUser } from '~/interfaces/user';

// just for the sake of muting the error
interface IInfo {

}

export interface IEditProfileData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface IEditAddressData extends IAddressData {
    default: boolean;
}

export abstract class AccountApi {
    abstract signIn(email: string, password: string): Promise<IUser>;

    abstract signUp(email: string, password: string): Promise<IUser>;

    abstract signOut(): Promise<void>;

    abstract editProfile(data: IEditProfileData): Promise<IUser>;

    abstract changePassword(oldPassword: string, newPassword: string): Promise<void>;

    abstract addAddress(user: IUser, data: IEditAddressData, info: IInfo): Promise<IAddress>;

    abstract editAddress(addressId: string, data: IEditAddressData, info: IInfo): Promise<IAddress>;

    abstract delAddress(addressId: string): Promise<void>;

    abstract getDefaultAddress(): Promise<IAddress | null>;

    abstract getAddress(addressId: string): Promise<IAddress>;

    abstract getAddresses(info: IInfo): Promise<IAddress[]>;

    abstract getOrdersList(options?: IListOptions): Promise<IOrdersList>;

    abstract getOrderById(id: string): Promise<IOrder>;

    abstract getOrderByToken(token: string): Promise<IOrder>;
}
