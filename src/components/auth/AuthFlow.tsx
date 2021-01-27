import React, {PropsWithChildren, useEffect} from "react";
import {useUser} from "~/store/user/userHooks";
import {useStore} from "react-redux";
import {userSetCurrent} from "~/store/user/userAction";
import {renewToken, verifyToken} from "~/api/graphql/users/authService";
import {getCurrentAuthUser} from "~/api/graphql/users/userService";
import {useAppRouter} from "~/services/router";
import Cookies from "js-cookie";


function AuthFlow() {
    const user = useUser()
    const store = useStore()
    const router = useAppRouter();

    function validateTokens() {
        const jwtToken = Cookies.get('jwt')
        if (!jwtToken) return Promise.resolve(null)

        return verifyToken(jwtToken).then(async (isValid: boolean) => {
                if (!isValid) {
                    const csrf = Cookies.get('csrf')
                    return await renewToken(undefined, csrf).then(token => Cookies.set('jwt', token, {
                        expires: new Date(Date.now() + 1000 * 60 * 5), // 5 min
                        // secure: true,
                    }))
                }
            }
        )
    }

    // validate user, if not, make it valid
    useEffect(() => {
        if (typeof window !== "undefined") {
            // const localTokens = loadLocal('tokens')
            const jwtToken = Cookies.get('jwt')
            // if (localTokens && localTokens.token) {
            if (jwtToken) {
                getCurrentAuthUser().then(user => {
                    store.dispatch(userSetCurrent(user))
                })
            }
            validateTokens().then()
        }
    }, [])

    // run JWT update interval
    useEffect(() => {
        if (typeof window !== "undefined") {
            setInterval(async () => {
                try {
                    await validateTokens()
                } catch {
                    router.reload()
                }
            }, 60 * 5 * 1000)
        }
    }, [user])

    return null // to be used as a component
}

export default AuthFlow
