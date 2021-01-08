/* eslint-disable import/prefer-default-export */

// application
import { ICountry } from '~/interfaces/country';
import {ILanguage} from "~/interfaces/language";

export abstract class CountriesApi {
    abstract getCountries(language: ILanguage): Promise<ICountry[]>;
}
