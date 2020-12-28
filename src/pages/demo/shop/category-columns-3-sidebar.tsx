// react
import React from 'react';
// third-party
import {GetServerSideProps} from 'next';
// application
import ShopPageCategory from '~/components/shop/ShopPageCategory';
import {IShopCategory} from '~/interfaces/category';
import {shopApi} from '~/api';
import {getLanguageServerSide} from "~/services/i18n/utils";

interface Props {
    subcategories: IShopCategory[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const language = getLanguageServerSide(ctx);
    return {
        props: {
            subcategories: await shopApi.getCategories({depth: 1}, language),
        },
    }
};

function Page(props: Props) {
    const {subcategories} = props;

    return (
        <ShopPageCategory
            layout="columns-3-sidebar"
            subcategories={subcategories}
        />
    );
}

export default Page;
