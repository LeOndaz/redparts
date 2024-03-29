// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageCategory from '~/components/shop/ShopPageCategory';
import SitePageNotFound from '~/components/site/SitePageNotFound';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';
import {getLanguageServerSide} from "~/services/i18n/utils";

interface Props {
    slug: string | null;
    category: IShopCategory | null;
    subcategories: IShopCategory[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const {params} = ctx;

    const language = getLanguageServerSide(ctx)

    const slug = typeof params?.slug === 'string' ? params.slug : null;
    const [category, subcategories] = await Promise.all([
        slug ? shopApi.getCategoryBySlug(slug, { depth: 2 }, language) : null,
        slug ? [] : shopApi.getCategories({ depth: 1 }, language),
    ]);

    return {
        props: {
            slug,
            category,
            subcategories,
        },
    };
};

function Page(props: Props) {
    const { slug, category, subcategories } = props;

    if (slug !== null && category === null) {
        return <SitePageNotFound />;
    }

    return (
        <ShopPageCategory
            layout="columns-4-sidebar"
            category={category}
            subcategories={subcategories}
        />
    );
}

export default Page;
