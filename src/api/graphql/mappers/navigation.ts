import {Mapper} from "~/api/graphql/mappers/interfaces";
import {PageInfo} from "~/api/graphql/types";
import {ICursorBasedNavigation} from "~/interfaces/list";

export class CursorNavigationMapper implements Mapper<PageInfo, ICursorBasedNavigation> {
    toInternal = (pageInfo: PageInfo, first: number, totalCount: number | undefined | null): ICursorBasedNavigation => ({
        type: 'cursor',
        hasNextPage: pageInfo.hasNextPage,
        hasPreviousPage: pageInfo.hasPreviousPage,
        startCursor: pageInfo.startCursor || null,
        endCursor: pageInfo.endCursor || null,
        limit: first,
        total: totalCount || undefined,
    })

}
