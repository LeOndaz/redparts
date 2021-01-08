import {client} from "~/api";
import {
    AccountRegisterDocument,
    ChangePasswordDocument,
    CreateUserTokensDocument,
    TokenRenewDocument,
    VerifyTokenDocument,
} from "~/api/graphql/types";
import {FetchResult} from "@apollo/client";
import {load, save} from "~/store/store";
import {userMap} from "~/api/graphql/users/userMappers";
import {handleAccountErrors, loadLocal, saveLocal, throwAuthError} from "~/api/graphql/misc/helpers";
import {AuthError} from "~/api/errors";

const createTokens = (email: string, password: string) => {
    return client.mutate({
        variables: {
            email,
            password
        },
        mutation: CreateUserTokensDocument,
    }).then(handleAccountErrors('tokenCreate')).then(res => {
        const {token, refreshToken, csrfToken, user} = res.data.tokenCreate;

        return {
            token,
            refreshToken,
            csrfToken,
            user,
        }
    })
}


export const signUp = (email: string, password: string) => {
    return client.mutate({
        mutation: AccountRegisterDocument,
        variables: {
            email,
            password,
            redirectUrl: "http://localhost:3000/account/verify"
        }
    }).then(handleAccountErrors('accountRegister'))
        .then(res => res.data.accountRegister.user)
        .then(userMap.in)
}

export const signIn = (email: string, password: string) => createTokens(email, password).then(res => {
    const {token, refreshToken, csrfToken, user} = res;

    if (typeof window !== "undefined") {
        saveLocal('tokens', {
            token,
            refreshToken,
            csrfToken,
        })
    }

    return user

}).then(userMap.in)

export const signOut = (): Promise<void> => {
    const localState = load()
    return Promise.resolve((() => {
        localStorage.removeItem('tokens');
        return save({
            ...localState,
            user: null,
        })
    })())
}


export const renewToken = (refreshToken: string, csrfToken: string) => {
    return client.mutate({
        variables: {
            refreshToken,
            csrfToken,
        },
        mutation: TokenRenewDocument,
    }).then(handleAccountErrors('tokenRefresh'))
        .then(res => res.data.tokenRefresh.token)
}

export const changePassword = (oldPassword: string, newPassword: string) => {
    return withAuth(client.mutate)({
        mutation: ChangePasswordDocument,
        variables: {
            oldPassword,
            newPassword,
        }
    }).then(handleAccountErrors('passwordChange'))
}

export const verifyToken = (token: string) => {
    return withAuth(client.mutate)({
        variables: {
            token,
        },
        mutation: VerifyTokenDocument,
    }).then(handleAccountErrors('tokenVerify')).then(res => res.data.tokenVerify.isValid)
}

export const withAuth = <T>(func: (opts: T) => Promise<FetchResult>): (opts: T) => any => {
    let tokens = loadLocal('tokens')

    if (!tokens || !tokens.token) {
        throwAuthError(AuthError.INVALID)
    }

    const accessToken = tokens.token
    return (opts: T) => func({
        ...opts,
        context: {
            ...opts.context,
            headers: {
                Authorization: `JWT ${accessToken}`,
            }
        }
    })
}

// const authQuery = (queryOptions: QueryOptions) => {
//     /* do authorized query */
//     return client.query({
//         ...queryOptions,
//         context: {
//             headers: {
//                 Authorization: `JWT ${load().user.current.tokens.access}`
//             }
//         }
//     })
// }
//
// const authMutate = (mutationOptions: MutationOptions) => {
//     /* do authorized mutation */
//     const tokens = localStorage.getItem('tokens')
//     if (tokens) {
//         return client.mutate({
//             ...mutationOptions,
//             context: {
//                 headers: {
//                     Authorization: `JWT ${load().user.current.tokens.access}`
//                 }
//             }
//         })
//     }
// }
//
