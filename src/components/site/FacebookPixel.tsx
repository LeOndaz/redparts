import {useEffect} from 'react'
import {useRouter} from 'next/router'
// import ReactPixel from "react-facebook-pixel";
import {useDeferredData} from "~/services/hooks";
import {cmsApi} from "~/api";
import {useAppRouter} from "~/services/router";


const options = {
    autoConfig: true,
    debug: false,
};

function FacebookPixel({children}) {
    const pixel = useDeferredData(() => cmsApi.getFacebookPixelId(), '')
    const router = useAppRouter();

    useEffect(() => {
        if (pixel.isLoading || !pixel.data) return;

        import('react-facebook-pixel')
            .then(x => x.default)
            .then(ReactPixel => {
                ReactPixel.init(pixel.data, undefined, options);
                ReactPixel.pageView();

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView();
                })

            })


    }, [pixel])

    return children
}

export default FacebookPixel
