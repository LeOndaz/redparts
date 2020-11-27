import {client} from "~/api";
import {
    AccountRegisterDocument,
    ChangePasswordDocument,
    CreateUserTokensDocument,
    TokenRenewDocument,
    VerifyTokenDocument,
} from "~/api/graphql/types";
import {APIErrors} from "~/api/errors";
import {throwAuthErrorOrPass} from "~/api/graphql/utils";
import {deleteFromLocalStorage, loadFromLocalStorage, saveToLocalStorage} from "~/services/utils";
import {MutationOptions, QueryOptions} from "@apollo/client";

export let parseJWT = (token: string) => JSON.parse(token.split('.')[1]);

export class AuthService {
    signIn(email: string, password: string) {
        return this.getUserTokens(email, password).then(({data: {tokenCreate}}) => {
            const {user, token, refreshToken, csrfToken} = tokenCreate;

            if (!user) {
                throw Error(APIErrors.INVALID_EMAIL_OR_PASSWORD)
            }

            return {
                ...user,
                phone: user.metadata?.phoneNumber || '',
                tokens: {
                    access: token,
                    refresh: refreshToken,
                    csrf: csrfToken,
                }
            };
        }).then((user) => {
            saveToLocalStorage('user', user)
            return user
        })
    }

    signUp(email: string, password: string) {
        return client.mutate({
            mutation: AccountRegisterDocument,
            variables: {
                email,
                password,
                redirectUrl: "http://localhost:3000/account/verify"
            }
        }).then(({data,}) => {
            const {accountRegister: {requiresConfirmation, accountErrors, user}} = data;

            throwAuthErrorOrPass(accountErrors[0].code);

            return {
                ...user,
                phone: user.metadata?.phoneNumber || '',
            }

        })
    }

    signOut() {
        return Promise.resolve(deleteFromLocalStorage(('user')))
    }

    getUserTokens(email: string, password: string) {
        return client.mutate({
            variables: {
                email,
                password
            },
            mutation: CreateUserTokensDocument,
        })
    }

    renewToken(refreshToken?: string, csrfToken?: string) {
        return client.mutate({
            variables: {
                ...(csrfToken && {csrfToken} || {}),
                ...(refreshToken && {refreshToken} || {}),
            },
            mutation: TokenRenewDocument,
        }).then(({data: {tokenRefresh}}) => {
            const {token, accountErrors} = tokenRefresh;

            if (accountErrors && accountErrors.length > 0) {
                throw Error(accountErrors[0].code)
            }

            return token
        })
    }

    changePassword(oldPassword: string, newPassword: string) {
        return this.mutate({
            mutation: ChangePasswordDocument,
            variables: {
                oldPassword,
                newPassword,
            }
        }).then(({data}) => {
            const {accountErrors} = data.passwordChange
            throwAuthErrorOrPass(accountErrors[0])
        })
    }

    verifyToken(token: string) {
        return this.mutate({
            variables: {token},
            mutation: VerifyTokenDocument
        }).then(({data: {tokenVerify}}) => tokenVerify.isValid)
    }


    query(queryOptions: QueryOptions) {
        /* do authorized query */
        return client.query({
            ...queryOptions,
            context: {
                headers: {
                    Authorization: `JWT ${loadFromLocalStorage('user').tokens.access}`
                }
            }
        }).then(r => {
            const accountErrors = r.data.accountErrors
            if (accountErrors[0]) {
                if (accountErrors[0].code === 'JWT_SIGNATURE_EXPIRED') {

                }
            }
        })
    }

    mutate(mutationOptions: MutationOptions) {
        /* do authorized mutation */
        return client.mutate({
            ...mutationOptions,
            context: {
                headers: {
                    Authorization: `JWT ${loadFromLocalStorage('user').tokens.access}`,
                }
            }
        })
    }
}
