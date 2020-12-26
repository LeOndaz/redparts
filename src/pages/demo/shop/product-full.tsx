// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';
import {getLanguageServerSide} from "~/services/i18n/utils";

interface Props {
    product: IProduct;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const language = getLanguageServerSide(ctx);

    return {
        props: {
            product: await shopApi.getProductBySlug('brandix-brake-kit-bdx-750z370-s', language,
            ),
        },
    };
};

function Page(props: Props) {
    const { product } = props;

    return (
        <ShopPageProduct
            product={product}
            layout="full"
        />
    );
}

export default Page;
