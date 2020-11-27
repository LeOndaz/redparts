import {IFilter} from "~/interfaces/filter";
import {AbstractFilterBuilder} from "~/fake-server/filters/abstract-filter-builder";

let applyFilters = (collection: any[], filters: AbstractFilterBuilder[]): IFilter[] => {
    filters.map(filter => filter.makeItems());
    return []
};
