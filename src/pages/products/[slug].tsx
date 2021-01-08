// react
import React from 'react';
// third-party
import {GetServerSideProps} from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import {IProduct, IProductVariant} from '~/interfaces/product';
import {shopApi} from '~/api';
import SitePageNotFound from '~/components/site/SitePageNotFound';
import {getLanguageServerSide} from "~/services/i18n/utils";

interface Props {
    product: IProduct | null;
    variant: IProductVariant;
}


export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const {params,} = ctx;

    const slug = typeof params?.slug === 'string' ? params?.slug : null;
    const language = getLanguageServerSide(ctx)
    const product = slug ? await shopApi.getProductBySlug(slug, language) : null


    return {
        props: {
            product,
        },
    };
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
//     const {params,} = ctx;
//
//     const slug = typeof params?.slug === 'string' ? params?.slug : null;
//     const language = getLanguageServerSide(ctx)
//
//     return {
//         props: {
//             product: slug ? await shopApi.getProductBySlug(slug, language) : null,
//         },
//     };
// };

function Page(props: Props) {
    const {product} = props;

    if (product === null) {
        return <SitePageNotFound/>;
    }

    return (
        <ShopPageProduct
            product={product}
            layout="full"
        />
    );
}

export default Page;
