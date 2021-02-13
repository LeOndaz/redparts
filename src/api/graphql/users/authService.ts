import {client} from "~/api";
import {
    RegisterAccountDocument,
    ChangePasswordDocument,
    CreateUserTokensDocument,
    RenewTokenDocument,
    VerifyTokenDocument, VerifyEmailDocument,
} from "~/api/graphql/types";
import {FetchResult} from "@apollo/client";
import {load, save} from "~/store/store";
import {userMap} from "~/api/graphql/users/userMappers";
import {handleAccountErrors, loadLocal, saveLocal, throwAuthError} from "~/api/graphql/misc/helpers";
import Cookies from "js-cookie"

const createTokens = (email: string, password: string) => {
    return client.mutate({
        variables: {
            email,
            password
        },
        mutation: CreateUserTokensDocument,
    }).then(handleAccountErrors('tokenCreate')).then(res => {
        const {token, refreshToken, csrfToken, user} = res.data.tokenCreate;

        Cookies.set('jwt', token, {
            expires: new Date(Date.now() + 1000 * 60 * 5), // 5 min
            // secure: true,
        })


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
        mutation: RegisterAccountDocument,
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
    const {token, csrfToken, user} = res;

    if (typeof window !== "undefined") {
        Cookies.set('jwt', token, {
            expires: new Date(Date.now() + 1000 * 60 * 5), // 5 min
            // secure: true,
        })
        Cookies.set('csrf', csrfToken)
    }

    return user

}).then(userMap.in)

export const signOut = (): Promise<void> => {
    const localState = load()
    return Promise.resolve((() => {
        Cookies.remove('jwt')
        return save({
            ...localState,
            user: null,
        })
    })())
}


export const renewToken = (refreshToken?: string, csrfToken?: string) => {
    return client.mutate({
        variables: {
            refreshToken,
            csrfToken,
        },
        mutation: RenewTokenDocument,
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
    if (typeof window === "undefined") {
        return func
    }

    let accessToken = Cookies.get('jwt')

    if (!accessToken) return func;

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

export const verifyEmail = (email: string, token: string) => {
    return client.mutate({
        mutation: VerifyEmailDocument,
        variables: {
            email,
            token,
        }
    }).then(handleAccountErrors('confirmAccount'))
}
