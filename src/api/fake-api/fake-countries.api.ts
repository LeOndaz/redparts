/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { CountriesApi } from '~/api/base';
import { getCountries } from '~/fake-server/endpoints';
import { ICountry } from '~/interfaces/country';
import {utils} from "~/api/services";

export class FakeCountriesApi extends CountriesApi {
    getCountries(): Promise<ICountry[]> {
        return utils.getCountries().then(r => r.data.shop.countries);
    }
}
