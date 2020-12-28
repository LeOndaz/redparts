import {OrderDirection, ProductOrderField} from "~/api/graphql/types";
import _ from "lodash";

const SortingMapOut = (sort: string) => {
    /**
     * This mapper needs to be manually typecasted as it uses a union.
     * Converts the theme sort algorithms like "name_desc" to a format that the server understands.
     *
     * */
    const [fieldName, direction] = sort.split('_');

    return {
        field: (<any>ProductOrderField)[_.capitalize(fieldName)],
        direction: (<any>OrderDirection)[_.capitalize(direction)],
    }
}


export const sortingMap = {
    out: SortingMapOut,
}
