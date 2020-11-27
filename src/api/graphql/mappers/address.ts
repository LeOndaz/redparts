import {Mapper} from "~/api/graphql/mappers/interfaces";
import {Address} from "~/api/graphql/types";
import {IAddress} from "~/interfaces/address";
import {IEditAddressData} from "~/api/base";

export class AddressMapper implements Mapper<Address, IAddress> {
    toInternal(obj: Address): IAddress {
        return {
            email: '',
            phone: obj.phone,
            address1: obj.streetAddress1,
            address2: obj.streetAddress2,
            city: obj.city,
            state: obj.countryArea,
            company: obj.companyName,
            country: obj.country.country,
            postcode: obj.postalCode,
            firstName: obj.firstName,
            lastName: obj.lastName,
            default: obj.isDefaultBillingAddress || false,
            id: obj.id,
        }
    }

    toExternal(obj: IAddress): Address {
        return {
            firstName: obj.firstName,
            lastName: obj.lastName,
            id: obj.id,
            city: obj.city,
            companyName: obj.company,
            country: {
                country: obj.country,
            },
            streetAddress1: obj.address1,
            streetAddress2: obj.address2,
            isDefaultShippingAddress: obj.default,
            phone: obj.phone,
            postalCode: obj.postcode,
            countryArea: obj.state,

        }
    }
}
