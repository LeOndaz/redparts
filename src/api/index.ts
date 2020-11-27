import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {FakeAccountApi} from './fake-api/fake-account.api';
import {FakeBlogApi} from './fake-api/fake-blog.api';
import {FakeCountriesApi} from './fake-api/fake-countries.api';
import {FakeShopApi} from './fake-api/fake-shop.api';
import {FakeVehicleApi} from './fake-api/fake-vehicle.api';
import CategoryResolver from '~/api/graphql/resolvers/categories';
import ProductResolver from '~/api/graphql/resolvers/products';
import {
    AddressMapper,
    BlogCategoryMapper,
    CursorNavigationMapper,
    FilterMapper,
    ProductMapper,
    ReviewsMapper,
    ShopCategoryMapper,
    SortingMapper,
} from '~/api/graphql/mappers';
import {BatchHttpLink} from "@apollo/client/link/batch-http";

// this will be federated
import {API_URL, REVIEWS_PLUGIN_API_URL} from '~/api/graphql/consts';
import {ReviewsResolver} from "~/api/graphql/resolvers/reviews";

// shared cache for the whole project
export const cache = new InMemoryCache();

// shared client across all resolvers
export const client = new ApolloClient<NormalizedCacheObject>({
    link: new BatchHttpLink({
        uri: API_URL,
    }),
    cache,
});


export const reviewsClient = new ApolloClient<NormalizedCacheObject>({
    link: new BatchHttpLink({
        uri: REVIEWS_PLUGIN_API_URL,
    }),
    cache,
})

// resolvers
export const categoryResolver = new CategoryResolver(client);
export const productResolver = new ProductResolver(client);
export const reviewsResolver = new ReviewsResolver(reviewsClient);

// export const auth = new (authService as any)();

// Mappers
export const shopCategoryMapper = new ShopCategoryMapper();
export const blogCategoryMapper = new BlogCategoryMapper();
export const productMapper = new ProductMapper();
export const reviewsMapper = new ReviewsMapper();
export const sortingMapper = new SortingMapper();
export const filterMapper = new FilterMapper();
export const cursorNavigationMapper = new CursorNavigationMapper();
export const addressMapper = new AddressMapper();

// APIs
export const accountApi = new FakeAccountApi();
export const blogApi = new FakeBlogApi();
export const countriesApi = new FakeCountriesApi();
export const shopApi = new FakeShopApi();
export const vehicleApi = new FakeVehicleApi();
