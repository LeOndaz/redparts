import {AuthService} from "./AuthService";
import {UtilsService} from "./UtilsService";
import {UserService} from "./UserService";
import {ProductService} from "./ProductService";
import {FilterService} from "~/api/services/FilterService";
import {AttributeService} from "~/api/services/AttributeService";
import {DEFAULT_ATTR_SLUGS} from "~/api/graphql/consts";


export const auth = new AuthService()
export const utils = new UtilsService()
export const users = new UserService()
export const products = new ProductService()
export const filters = new FilterService()

export const attributes = new AttributeService()
export const getBrands = () => attributes.getBySlug(DEFAULT_ATTR_SLUGS.BRAND)
// export const getBadges = attributes.getBySlug(DEFAULT_ATTR_SLUGS.BADGES)
