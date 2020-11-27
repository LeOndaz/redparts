import {
    CategorySortingInput, OrderFilterInput,
    OrderSortingInput, ProductFilterInput,
    ProductOrder,
    ProductTypeFilterInput,
    ProductTypeSortingInput, ReviewFilterInput, ReviewSortingInput
} from "~/api/graphql/types";

export interface Mapper<T, U> {
    options?: {
        [propName: string]: any
    };
    toInternal?(obj: T, ...args: unknown[]): U | unknown; /* unknown just for objects like ICategory, IBlogCategory, IShopCategory */
    toExternal?(obj: U, ...args: unknown[]): T | unknown;
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
