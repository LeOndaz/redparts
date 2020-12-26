import {Address, AddressInput, CountryCode} from "~/api/graphql/types";
import {IAddress} from "~/interfaces/address";
import {IEditAddressData} from "~/api/base";

export const addressMap = {
    in: (address: Address): IAddress => ({
        id: address.id,
        firstName: address.firstName,
        lastName: address.lastName,
        address1: address.streetAddress1,
        address2: address.streetAddress2,
        country: address.country.code,
        state: address.countryArea,
        city: address.city,
        postcode: address.postalCode,
        phone: address.phone!,
        default: !!address.isDefaultShippingAddress,
        company: address.companyName,
        email: '',
    }),
    // @ts-ignore
    out: (address: IEditAddressData): AddressInput => ({
        // id: address.id,
        firstName: address.firstName,
        lastName: address.lastName,
        companyName: address.company,
        streetAddress1: address.address1,
        streetAddress2: address.address2,
        country: address.country,
        postalCode: address.postcode,
        city: address.city,
        countryArea: address.state,
        phone: address.phone,
    })
}
