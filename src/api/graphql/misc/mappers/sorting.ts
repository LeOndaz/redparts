import {OrderDirection, ProductOrderField} from "~/api/graphql/types";

const title = (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

const SortingMapOut = (sort: string) => {
    /**
     * This mapper needs to be manually typecasted as it uses a union.
     * Converts the theme sort algorithms like "name_desc" to a format that the server understands.
     *
     * */
    const [fieldName, direction] = sort.split('_');

    return {
        field: (<any>ProductOrderField)[title(fieldName)],
        direction: (<any>OrderDirection)[title(direction)],
    }
}


export const sortingMap = {
    out: SortingMapOut,
}
