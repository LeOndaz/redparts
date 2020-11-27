import React, {useEffect} from "react";
import {useUser} from "~/store/user/userHooks";
import {deleteFromLocalStorage, loadFromLocalStorage, saveToLocalStorage} from "~/services/utils";
import {useAppRouter} from "~/services/router";
import {IUser} from "~/interfaces/user";
import {auth, users} from "~/api/services";
import {useStore} from "react-redux";
import {userSetCurrent} from "~/store/user/userAction";

function AuthFlow() {
    const user = useUser()
    const router = useAppRouter()
    const store = useStore()
    const USER_KEY = 'user'

    function updateStorageToken(user: IUser) {
        return users.renewToken(user).then(user => {
            saveToLocalStorage(USER_KEY, user)
        })
    }

    function validateUser(user: IUser) {
        const accessToken = user.tokens.access
        return auth.verifyToken(accessToken).then(isValid => {
                if (!isValid) {
                    updateStorageToken(user).then()
                }
                return user
            }
        )
    }

    // validate user, if not, make it valid
    useEffect(() => {
        if (typeof window !== "undefined") {
            const localUser = loadFromLocalStorage(USER_KEY)
            if (localUser) {
                validateUser(localUser).then((user) => {
                    store.dispatch(userSetCurrent(user))
                })
            }
        }
    }, [])

    // run JWT update interval
    useEffect(() => {
        if (user) {
            const i = setInterval(async () => {
                updateStorageToken(user).catch(({message}) => {
                    if (message === 'JWT_SIGNATURE_EXPIRED') {
                        deleteFromLocalStorage(USER_KEY)
                        clearInterval(i)
                        router.reload()
                    }
                })
            }, 5 * 1000)
        }
    }, [user])

    return null // to be used as a component
}

export default AuthFlow
