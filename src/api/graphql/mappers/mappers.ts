import {
    Category,
    OrderDirection,
    PageInfo,
    Product,
    ProductCountableConnection,
    ProductOrderField,
    ProductVariant, Review,
    StockAvailability
} from '~/api/graphql/types';
import {IImage, IProduct, IProductsList} from '~/interfaces/product';
import {FilterInput, Mapper, SortingInput} from '~/api/graphql/mappers/interfaces';
import {
    CategoryType,
    IBaseCategory,
    IBlogCategory,
    ICategory,
    IShopCategory,
    IShopCategoryLayout
} from '~/interfaces/category';
import {ICustomFields} from '~/interfaces/custom-fields';
import {ICursorBasedNavigation, IListOptions} from '~/interfaces/list';
import {cursorNavigationMapper, shopCategoryMapper, sortingMapper} from "~/api";
import {title} from "~/api/graphql/utils";
import {IFilter} from "~/interfaces/filter";
import {IReview} from "~/interfaces/review";
import {mapVariantAttrsToOptions} from "~/api/graphql/mappers/utils";


// export class ListOptionsMapper implements Mapper<{}, IListOptions> {
//     toExternal = (options: IListOptions): {} => {
//         return {
//             ...(options.sort !== 'default' && options.sort !== undefined && sortingMapper.toExternal(options.sort)),
//             filter: [],
//         }
//     }
//
// }


