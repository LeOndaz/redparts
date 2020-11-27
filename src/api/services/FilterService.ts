import {DEFAULT_CHANNEL} from "~/api/graphql/consts";
import {Service} from "~/api/services/base";

interface filterable {
    filter?: {
        [propName: string]: any
    }

    [propName: string]: any
}

class FilterUtils {
    filterStack(callables: any[], filterable: filterable) {
        return callables.reduce((acc, filter) => filter(filterable), filterable)
    }

    filterPublished(filterable: filterable): filterable {
        return {
            ...filterable,
            filter: {
                ...filterable.filter,
                isPublished: true
            }
        }
    }

    filterDefaultChannel(filterable: filterable): filterable {
        return {
            ...filterable,
            filter: {
                ...filterable.filter,
                channel: DEFAULT_CHANNEL,
            }
        }
    }
}

export class FilterService implements Service {
    utils = new FilterUtils()
}
