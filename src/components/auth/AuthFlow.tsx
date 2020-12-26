import React, {useEffect} from "react";
import {useUser} from "~/store/user/userHooks";
import {useStore} from "react-redux";
import {userSetCurrent} from "~/store/user/userAction";
import {renewToken, verifyToken} from "~/api/graphql/users/authService";
import {loadLocal, saveLocal} from "~/api/graphql/misc/helpers";
import {getCurrentAuthUser} from "~/api/graphql/users/userService";

function AuthFlow() {
    const user = useUser()
    const store = useStore()

    function validateTokens() {
        const localTokens = loadLocal('tokens')

        if (!localTokens || localTokens.token === null) {
            return Promise.resolve(null)
        }

        return verifyToken(localTokens.token).then(async (isValid: boolean) => {
                if (!isValid) {
                    return await renewToken(localTokens.refreshToken, localTokens.csrfToken).then(token => {
                        saveLocal('tokens', {
                            ...localTokens,
                            token,
                        })
                    })
                }
            }
        )

    }

    // validate user, if not, make it valid
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                getCurrentAuthUser().then(user => {
                    store.dispatch(userSetCurrent(user))
                })
            } catch {
                console.log('Anonymous session.')
            }
        }
    }, [])

    // run JWT update interval
    useEffect(() => {
        if (typeof window !== "undefined") {
            setInterval(async () => {
                await validateTokens().catch(err => console.log(err))
            }, 60 * 5 * 1000)
        }
    }, [user])

    return null // to be used as a component
}

export default AuthFlow
