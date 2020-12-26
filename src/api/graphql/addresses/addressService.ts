/* eslint-disable no-underscore-dangle */
import {ApolloQueryResult, DocumentNode} from '@apollo/client';
import {handleAccountErrors, mutateById, queryById} from '~/api/graphql/misc/helpers';
import {
    AddAddressDocument,
    DeleteAddressDocument,
    GetAddressByIdDocument,
    UpdateAddressDocument,
    GetAddressListDocument,
} from '~/api/graphql/types';
import {handleRelayedResponse, handleSingleResponse} from '~/api/graphql/misc/mappers/utils';
import {addressMap} from '~/api/graphql/addresses/addressMappers';
import {IEditAddressData} from '~/api/base';
import {client} from "~/api";
import {withAuth} from "~/api/graphql/users/authService";

const handleSingleAddressResponse = (res: ApolloQueryResult<any>) => handleSingleResponse({
    res,
    dataField: 'address',
    inMapper: addressMap.in,
});

/** special case because the addresses query is actually returning user -> addresses*/
const handleRelayedAddressResponse = (res: ApolloQueryResult<any>) => {
    const newRes = _.cloneDeep(res)
    newRes.data.addresses = res.data.user.addresses

    return handleRelayedResponse({
        res: newRes,
        dataField: 'addresses',
        inMapper: addressMap.in,
        relay: false,
    });
}

/** exports */

export const getAddressById = (id: string) => withAuth(client.query)({
    query: GetAddressByIdDocument,
    variables: {
        id,
    }
}).then(handleSingleAddressResponse)

export const getAddressList = (userId: string) => withAuth(client.query)({
    query: GetAddressListDocument,
    variables: {
        id: userId,
    }
}).then(handleRelayedAddressResponse);

/** CREATE - UPDATE */
const _mutateAddress = (id: string, input: IEditAddressData, mutation: DocumentNode) => withAuth(client.mutate)({
    mutation,
    variables: {
        id,
        input: addressMap.out(input),
    }
})

export const updateAddress = (id: string, input: IEditAddressData) => _mutateAddress(id, input, UpdateAddressDocument)
    .then(handleAccountErrors('addressUpdate'))
    .then(res => res.data.addressUpdate.address)
    .then(addressMap.in)

export const addAddress = (userId: string, input: IEditAddressData) => _mutateAddress(userId, input, AddAddressDocument)
    .then(handleAccountErrors('addressCreate'))
    .then(res => res.data.addressCreate.address)
    .then(addressMap.in)

export const deleteAddress = (id: string) => mutateById(id, DeleteAddressDocument);
// export const getAddressById = (id: string) => wrapService(_getAddressById, handleSingleAddressResponse)(id);
// export const updateAddress = (id: string, input: IEditAddressData) => wrapService(_updateAddress, handleSingleAddressResponse)(id, input);
// export const addAddress = (userId: string, input: IEditAddressData) => wrapService(_addAddress, handleSingleAddressResponse)(userId, input);
// export const getAddressList = (userId: string) => wrapService(_getAddressList, handleRelayedAddressResponse)(userId); /* user.addresses */

