import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {FakeAccountApi} from './fake-api/fake-account.api';
import {FakeBlogApi} from './fake-api/fake-blog.api';
import {FakeCountriesApi} from './fake-api/fake-countries.api';
import {FakeShopApi} from './fake-api/fake-shop.api';
import {FakeVehicleApi} from './fake-api/fake-vehicle.api';
import {BatchHttpLink} from "@apollo/client/link/batch-http";

// this will be federated
import {API_URL, REVIEWS_PLUGIN_API_URL} from '~/api/graphql/consts';

// shared cache for the whole project
export const cache = new InMemoryCache();

// shared client across all resolvers
export const client = new ApolloClient<NormalizedCacheObject>({
    // link: new BatchHttpLink({
    //     uri: API_URL,
    // }),
    link: new HttpLink({uri: API_URL}),
    cache,
});


export const reviewsClient = new ApolloClient<NormalizedCacheObject>({
    link: new BatchHttpLink({
        uri: REVIEWS_PLUGIN_API_URL,
    }),
    cache,
})


export * from "~/api/graphql/products/productService"
export * from "~/api/graphql/categories/categoryService"
export * from "~/api/graphql/attributes/AttributeService"
export * from "~/api/graphql/orders/OrderService"
export * from "~/api/graphql/misc/MiscService"
export * from "~/api/graphql/misc/FilterService"
export * from "~/api/graphql/reviews/ReviewService"

// APIs
export const accountApi = new FakeAccountApi();
export const blogApi = new FakeBlogApi();
export const countriesApi = new FakeCountriesApi();
export const shopApi = new FakeShopApi();
export const vehicleApi = new FakeVehicleApi();
