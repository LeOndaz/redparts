import {mutateById, queryById} from "~/api/graphql/misc/helpers";
import {DeleteAddressDocument, GetAddressByIdDocument} from "~/api/graphql/types";

export const getAddressById = (id: string) => queryById(id, GetAddressByIdDocument)
export const deleteAddress = (id: string) => mutateById(id, DeleteAddressDocument)
