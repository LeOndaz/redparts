import {
    CategorySortingInput, OrderFilterInput,
    OrderSortingInput, ProductFilterInput,
    ProductOrder,
    ProductTypeFilterInput,
    ProductTypeSortingInput, ReviewFilterInput, ReviewSortingInput
} from "~/api/graphql/types";
import {ILanguage} from "~/interfaces/language";

export interface Mapper<T, U> {
    options?: {
        [propName: string]: any
    };

    in?(obj: T, ...args: unknown[]): U | unknown; /* unknown just for objects like ICategory, IBlogCategory, IShopCategory */
    out?(obj: U, ...args: unknown[]): T | unknown;
}

export type SortingInput =
    ProductOrder |
    ProductTypeSortingInput |
    OrderSortingInput |
    CategorySortingInput |
    ReviewSortingInput

export type FilterInput =
    ProductFilterInput |
    ProductTypeFilterInput |
    OrderFilterInput |
    CategorySortingInput |
    ReviewFilterInput


export interface IBaseModelProps {
    first?: number,
    last?: number,
    after?: string,
    before?: string,
    filter?: FilterInput
    sortBy?: SortingInput
    channel?: string
}
