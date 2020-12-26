// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import WidgetCategories from '~/components/widgets/WidgetCategories';
import WidgetProducts from '~/components/widgets/WidgetProducts';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';
import {useLanguage} from "~/services/i18n/hooks";

function ProductSidebar() {
    const [categories, setCategories] = useState<IShopCategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const language = useLanguage()

    useEffect(() => {
        let canceled = false;

        shopApi.getCategories({ depth: 1 }, language).then((result) => {
            if (canceled) {
                return;
            }

            setCategories(result);
        });

        shopApi.getLatestProducts(5, language).then((result) => {
            if (canceled) {
                return;
            }

            setProducts(result);
        });

        return () => {
            canceled = true;
        };
    }, []);

    return (
        <React.Fragment>
            <WidgetCategories
                widgetTitle={<FormattedMessage id="HEADER_CATEGORIES" />}
                categories={categories}
            />

            <WidgetProducts
                widgetTitle={<FormattedMessage id="HEADER_LATEST_PRODUCTS" />}
                products={products}
            />
        </React.Fragment>
    );
}

export default ProductSidebar;
