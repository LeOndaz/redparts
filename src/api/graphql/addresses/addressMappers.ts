import {Address, AddressInput, CountryCode} from "~/api/graphql/types";
import {IAddress, IAddressData} from "~/interfaces/address";

const addressMapIn = (address: Address): IAddress => {
    return {
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
    }
}

const addressMapOut = (address: IAddressData): AddressInput => {
    return {
        firstName: address.firstName,
        lastName: address.lastName,
        companyName: address.company,
        streetAddress1: address.address1,
        streetAddress2: address.address2,
        country: address.country as CountryCode,
        postalCode: address.postcode,
        city: address.city,
        countryArea: address.state,
        phone: address.phone,
    }
}

export const addressMap = {
    in: addressMapIn,
    out: addressMapOut,
}
