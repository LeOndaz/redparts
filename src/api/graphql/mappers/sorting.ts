import {Mapper, SortingInput} from "~/api/graphql/mappers/interfaces";
import {OrderDirection, ProductOrderField} from "~/api/graphql/types";
import {title} from "~/api/graphql/utils";


export class SortingMapper implements Mapper<SortingInput, string> {
    /**
     * This mapper needs to be manually typecasted as it uses a union.
     * Converts the theme sort algorithms like "name_desc" to a format that the server understands.
     *
     * */

    toExternal = (sort: string): SortingInput => {
        const [fieldName, direction] = sort.split('_');

        return {
            field: (<any>ProductOrderField)[title(fieldName)],
            direction: (<any>OrderDirection)[title(direction)],
        }
    };

}
