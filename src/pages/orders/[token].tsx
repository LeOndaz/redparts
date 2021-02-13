// react
import React, {useEffect, useState} from 'react';
// application
import ShopPageOrderSuccess from '~/components/shop/ShopPageOrderSuccess';
import {accountApi} from '~/api';
import {IOrder} from '~/interfaces/order';
import {useAppRouter} from '~/services/router';
import {useLanguage} from "~/services/i18n/hooks";
import {useUser} from "~/store/user/userHooks";
import SitePageNotFound from "~/components/site/SitePageNotFound";

function Page() {
    const router = useAppRouter();
    const language = useLanguage();
    const user = useUser();
    const [order, setOrder] = useState<IOrder | null>(null);
    const {token} = router.query;

    useEffect(() => {
        let canceled = false;

        if ((typeof token === 'string')) {
            accountApi.getOrderByToken(token, language).then((result) => {
                if (canceled) {
                    return;
                }

                setOrder(result);
            });
        } else {
            setOrder(null);
        }

        return () => {
            canceled = true;
        };
    }, [token, user]);

    if (!order) {
        return null;
    }

    return <ShopPageOrderSuccess order={order}/>;
}

export default Page;
