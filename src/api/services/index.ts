import {AuthService} from "./AuthService";
import {UtilsService} from "./UtilsService";
import {UserService} from "./UserService";
import {ProductService} from "./ProductService";
import {FilterService} from "~/api/services/FilterService";
import {AttributeService} from "~/api/services/AttributeService";


export const auth = new AuthService()
export const utils = new UtilsService()
export const users = new UserService()
export const products = new ProductService()
export const filters = new FilterService()
export const attributes = new AttributeService()
