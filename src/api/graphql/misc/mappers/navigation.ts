import {PageInfo} from "~/api/graphql/types";
import {ICursorBasedNavigation} from "~/interfaces/list";

export const cursorNavigationMapIn = (pageInfo: PageInfo, first: number, totalCount: number | undefined | null): ICursorBasedNavigation => ({
    type: 'cursor',
    limit: first,
    total: totalCount || null,
    hasNextPage: pageInfo.hasNextPage,
    hasPreviousPage: pageInfo?.hasPreviousPage,
    startCursor: pageInfo?.startCursor || null,
    endCursor: pageInfo?.endCursor || null,
})
