import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {onError} from "@apollo/client/link/error";
import {FakeAccountApi} from './fake-api/fake-account.api';
import {FakeBlogApi} from './fake-api/fake-blog.api';
import {FakeCountriesApi} from './fake-api/fake-countries.api';
import {FakeShopApi} from './fake-api/fake-shop.api';
import {FakeVehicleApi} from './fake-api/fake-vehicle.api';
import Cookies from "js-cookie"
// this will be federated
import {API_URL} from '~/api/graphql/consts';
import {loadLocal} from "~/api/graphql/misc/helpers";
import {CmsApi} from "~/api/fake-api/cms.api";

// shared cache for the whole project
export const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: API_URL,
})

const errorLink = onError(({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors) {
        for (let err of graphQLErrors) {
            switch (err.extensions?.exception.code) {
                case 'PermissionDenied':
                    // error code is set to UNAUTHENTICATED
                    // when AuthenticationError thrown in resolver
                    if (typeof window === "undefined") {
                        return forward(operation)
                    }

                    const jwt = Cookies.get('jwt')
                    if (!jwt) return forward(operation);

                    // modify the operation context with a new token
                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            Authorization: `JWT ${jwt}`,
                        },
                    });
                    // retry the request, returning the new observable
                    return forward(operation);
                case "JWT_SIGNATURE_EXPIRED":
                    console.log(err)
                    return forward(operation)
            }
        }
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        // if you would also like to retry automatically on
        // network errors, we recommend that you use
        // @apollo/client/link/retry
    }
});


// shared client across all resolvers
export const client = new ApolloClient<NormalizedCacheObject>({
    // link: new BatchHttpLink({
    //     uri: API_URL,
    // }),
    link: errorLink.concat(httpLink),
    ssrMode: typeof window === "undefined",
    cache,
});


// export const reviewsClient = new ApolloClient<NormalizedCacheObject>({
//     link: new BatchHttpLink({
//         uri: REVIEWS_PLUGIN_API_URL,
//     }),
//     cache,
// })


export * from "~/api/graphql/products/productService"
export * from "~/api/graphql/categories/categoryService"
export * from "~/api/graphql/attributes/AttributeService"
export * from "~/api/graphql/orders/orderService"
export * from "~/api/graphql/misc/MiscService"
export * from "~/api/graphql/misc/FilterService"
export * from "~/api/graphql/reviews/ReviewService"

// APIs
export const accountApi = new FakeAccountApi();
export const blogApi = new FakeBlogApi();
export const countriesApi = new FakeCountriesApi();
export const shopApi = new FakeShopApi();
export const vehicleApi = new FakeVehicleApi();
export const cmsApi = new CmsApi()
