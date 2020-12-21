import React, {useEffect} from "react";
import {useUser} from "~/store/user/userHooks";
import {IUser} from "~/interfaces/user";
import {useStore} from "react-redux";
import {userSetCurrent} from "~/store/user/userAction";
import {auth} from "~/api";
import {renewToken} from "~/api/graphql/users/UserService";
import {load, save} from "~/store/store";

function AuthFlow() {
    const user = useUser()
    const store = useStore()

    function validateUser(user: IUser) {
        const accessToken = user.tokens.access
        return auth.verifyToken(accessToken).then(async (isValid) => {
                if (!isValid) {
                    return await renewToken(user).then(updatedUser => updatedUser)
                }
                return user
            }
        )
    }

    // validate user, if not, make it valid
    useEffect(() => {
        if (typeof window !== "undefined") {
            const localState = load()
            if (localState.user.current) {
                validateUser(localState.user.current).then((updatedUser) => {
                    store.dispatch(userSetCurrent(updatedUser))
                })
            }
        }
    }, [])

    // run JWT update interval
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (user) {
                setInterval(async () => {
                    validateUser(user).catch(({message}) => {
                        if (message === 'JWT_SIGNATURE_EXPIRED') {
                            store.dispatch(userSetCurrent(null))
                        }
                    })
                }, 5 * 1000)
            }

        }
    }, [user])

    return null // to be used as a component
}

export default AuthFlow
