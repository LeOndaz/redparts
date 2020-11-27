import {FilterInput, Mapper} from "~/api/graphql/mappers/interfaces";
import {IFilter} from "~/interfaces/filter";

export class FilterMapper implements Mapper<IFilter[], FilterInput> {
    toExternal(obj: FilterInput): IFilter[] {
        return []
    }

}
