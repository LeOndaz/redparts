import * as React from 'react';
import classNames from "classnames";
import {useAppRouter} from "~/services/router";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import {FormattedMessage} from "react-intl";
import {useEffect, useState} from "react";
import {useAsyncAction, useIsUnmountedRef} from "~/store/hooks";
import {accountApi} from "~/api";
import {useDeferredData} from "~/services/hooks";
import ErrorAlert from "~/components/shop/ErrorAlert";

interface Props {

}

function Page({}: Props) {
    const router = useAppRouter();
    const {email, token} = router.query;
    const [error, setError] = useState('')

    const [verifyEmail, verificationInProgress] = useAsyncAction(async () => {
        await accountApi.verifyEmail(email, token).catch(err => {
            setError(err)
        })
    }, [email, token])

    useEffect(() => {
        if (!token || !email) return;

        verifyEmail()
    }, [token, email])

    if (!token || !email) return <SitePageNotFound/>;
    if (!verificationInProgress && error) return <SitePageNotFound/>

    return (
        <div className={classNames('container', 'h-100')}>
            <div className={classNames('row', 'justify-content-center')} style={{
                padding: "100px"
            }}>
                <React.Fragment>
                    {verificationInProgress && <button type="button" className={`btn btn-light btn-loading btn-xl`}/>}

                    {!verificationInProgress && <div>
                        <FormattedMessage id={"TEXT_YOUR_EMAIL_HAS_BEEN_VERIFIED"}/>
                    </div>}

                </React.Fragment>

            </div>
        </div>
    );
}

export default Page;
