import React, {PropsWithChildren, useEffect} from "react";
import {useDeferredData} from "~/services/hooks";
import TagManager from "react-gtm-module";
import {cmsApi} from "~/api";

interface Props extends PropsWithChildren<{}> {}

export function GoogleTagManager({children}: Props) {
    const gtag = useDeferredData(() => cmsApi.getGoogleTagManagerId(), '');

    useEffect(() => {
        if (gtag.isLoading || !gtag.data) return;

        TagManager.initialize({
            gtmId: gtag.data,
        })
    }, [gtag])

    return <> {children} </>
}

export default GoogleTagManager
