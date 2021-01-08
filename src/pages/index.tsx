// react
import React, { useMemo } from 'react';
// third-party
import { useIntl } from 'react-intl';
// application
import BlockBanners from '~/components/blocks/BlockBanners';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockFeatures from '~/components/blocks/BlockFeatures';
import BlockFinder from '~/components/blocks/BlockFinder';
import BlockPosts from '~/components/blocks/BlockPosts';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockProductsColumns from '~/components/blocks/BlockProductsColumns';
import BlockSale from '~/components/blocks/BlockSale';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockZone from '~/components/blocks/BlockZone';
import url from '~/services/url';
import { shopApi, blogApi } from '~/api';
import { useDeferredData, useProductColumns, useProductTabs } from '~/services/hooks';
import {useLanguage} from "~/services/i18n/hooks";

function Page() {
    const intl = useIntl();
    const language = useLanguage()
    /**
     * Featured products.
     */
    const featuredProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'All', categorySlug: null },
            { id: 2, name: 'Smartphones', categorySlug: 'smartphone' },
            { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
            { id: 4, name: 'Plumbing', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getFeaturedProducts(tab.categorySlug, 8, language),
    );

    const blockSale = useDeferredData(() => shopApi.getSpecialOffers(8, language), []);

    const blockZones = useMemo(() => [
        {
            image: '/images/categories/category-overlay-1.jpg',
            mobileImage: '/images/categories/category-overlay-1-mobile.jpg',
            categorySlug: 'smartphones',
        },
        {
            image: '/images/categories/category-overlay-2.jpg',
            mobileImage: '/images/categories/category-overlay-2-mobile.jpg',
            categorySlug: 'smartphones',
        },
        {
            image: '/images/categories/category-overlay-3.jpg',
            mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
            categorySlug: 'smartphones',
        },
    ], []);

    const newArrivals = useDeferredData(() => shopApi.getLatestProducts(12, language), []);
    const newArrivalsLinks = useMemo(() => [
        { title: 'Wheel Covers', url: url.products() },
        { title: 'Timing Belts', url: url.products() },
        { title: 'Oil Pans', url: url.products() },
        { title: 'Show All', url: url.products() },
    ], []);

    const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
    const latestPostsLinks = useMemo(() => [
        { title: 'Special Offers', url: url.blog() },
        { title: 'New Arrivals', url: url.blog() },
        { title: 'Reviews', url: url.blog() },
    ], []);

    const brands = useDeferredData(() => shopApi.getBrands({ limit: 16 }, language), []);

    /**
     * Product columns.
     */
    const columns = useProductColumns(
        useMemo(() => [
            {
                title: 'Top Rated Products',
                source: () => shopApi.getTopRatedProducts(null, 3, language),
            },
            {
                title: 'Special Offers',
                source: () => shopApi.getSpecialOffers(3, language),
            },
            {
                title: 'Bestsellers',
                source: () => shopApi.getPopularProducts(null, 3, language),
            },
        ], []),
    );

    return (
        <React.Fragment>
            <BlockFinder />
            <BlockFeatures layout="top-strip" />
            <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={intl.formatMessage({ id: 'HEADER_FEATURED_PRODUCTS' })}
                layout="grid-5"
                loading={featuredProducts.isLoading}
                products={featuredProducts.data}
                groups={featuredProducts.tabs}
                currentGroup={featuredProducts.tabs.find((x) => x.current)}
                onChangeGroup={featuredProducts.handleTabChange}
            />
            <BlockSpace layout="divider-nl" />
            <BlockSale
                products={blockSale.data}
                loading={blockSale.isLoading}
            />
            <BlockSpace layout="divider-lg" />

            {blockZones.map((blockZone, blockZoneIdx) => (
                <React.Fragment key={blockZoneIdx}>
                    <BlockZone
                        image={blockZone.image}
                        mobileImage={blockZone.mobileImage}
                        categorySlug={blockZone.categorySlug}
                    />
                    {blockZoneIdx < blockZones.length - 1 && (
                        <BlockSpace layout="divider-sm" />
                    )}
                </React.Fragment>
            ))}

            <BlockSpace layout="divider-nl" />
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={intl.formatMessage({ id: 'HEADER_NEW_ARRIVALS' })}
                layout="horizontal"
                rows={2}
                loading={newArrivals.isLoading}
                products={newArrivals.data}
                links={newArrivalsLinks}
            />
            <BlockSpace layout="divider-nl" />
            <BlockPosts
                blockTitle={intl.formatMessage({ id: 'HEADER_LATEST_NEWS' })}
                layout="grid"
                loading={latestPosts.isLoading}
                posts={latestPosts.data}
                links={latestPostsLinks}
            />
            <BlockSpace layout="divider-nl" />
            <BlockBrands
                layout="columns-8-full"
                brands={brands.data}
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
            <BlockProductsColumns columns={columns} />
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
