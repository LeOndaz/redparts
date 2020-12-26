/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import {CountriesApi} from '~/api/base';
import {ICountry} from '~/interfaces/country';
import {getCountries} from "~/api/graphql/misc/MiscService"

export class FakeCountriesApi extends CountriesApi {
    getCountries(): Promise<ICountry[]> {
        return getCountries();
    }
}
