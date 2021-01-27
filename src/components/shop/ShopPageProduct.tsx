// react
import React, {useCallback, useEffect, useState} from 'react';
// third-party
import classNames from 'classnames';
import {Controller, FormProvider} from 'react-hook-form';
import {FormattedMessage, useIntl} from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockSpace from '~/components/blocks/BlockSpace';
import CompatibilityStatusBadge from '~/components/shared/CompatibilityStatusBadge';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import InputNumber from '~/components/shared/InputNumber';
import PageTitle from '~/components/shared/PageTitle';
import ProductForm from '~/components/shop/ProductForm';
import ProductGallery, {IProductGalleryLayout} from '~/components/shop/ProductGallery';
import ProductSidebar from '~/components/shop/ProductSidebar';
import ProductTabs from '~/components/shop/ProductTabs';
import Rating from '~/components/shared/Rating';
import ShareLinks from '~/components/shared/ShareLinks';
import StockStatusBadge from '~/components/shared/StockStatusBadge';
import url from '~/services/url';
import {getCategoryPath} from '~/services/utils';
import {IProduct, IProductVariant} from '~/interfaces/product';
import {IProductPageLayout, IProductPageSidebarPosition} from '~/interfaces/pages';
import {shopApi} from '~/api';
import {useCompareAddItem} from '~/store/compare/compareHooks';
import {useProductForm} from '~/services/forms/product';
import {useWishlistAddItem} from '~/store/wishlist/wishlistHooks';
import {ProductSetVariantContext, ProductVariantContext} from "~/services/shop/context"
import {
    Compare16Svg,
    Fi24Hours48Svg,
    FiFreeDelivery48Svg,
    FiPaymentSecurity48Svg,
    FiTag48Svg,
    Wishlist16Svg,
} from '~/svg';
import {useLanguage} from "~/services/i18n/hooks";
import ProductInfoCardForm from "~/components/shop/productInfoCard";

interface Props {
    product: IProduct;
    layout: IProductPageLayout;
    sidebarPosition?: IProductPageSidebarPosition;
}

function ShopPageProduct(props: Props) {
    const {
        product,
        layout,
        sidebarPosition = 'start',
    } = props;
    const intl = useIntl();

    const galleryLayout = `product-${layout}` as IProductGalleryLayout;
    const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
    const language = useLanguage()

    useEffect(() => {
        let canceled = false;

        shopApi.getRelatedProducts(product.id, 8, language).then((result) => {
            if (canceled) {
                return;
            }

            setRelatedProducts(result);
        });

        return () => {
            canceled = true;
        };
    }, [product]);

    if (!product) {
        return null;
    }

    const breadcrumb = [
        {title: intl.formatMessage({id: 'LINK_HOME'}), url: url.home()},
        {title: intl.formatMessage({id: 'LINK_SHOP'}), url: url.shop()},
        ...getCategoryPath(product.categories && product.categories[0]).map((x) => ({
            title: x.name,
            url: url.category(x),
        })),
        {title: product.name, url: url.product(product)},
    ];

    const featuredAttributes = product.attributes.filter((x) => x.featured);

    const shopFeatures = (
        <div className="product__shop-features shop-features">
            <ul className="shop-features__list">
                <li className="shop-features__item">
                    <div className="shop-features__item-icon">
                        <FiFreeDelivery48Svg/>
                    </div>
                    <div className="shop-features__info">
                        <div className="shop-features__item-title">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE"/>
                        </div>
                        <div className="shop-features__item-subtitle">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE"/>
                        </div>
                    </div>
                </li>
                <li className="shop-features__divider" role="presentation"/>
                <li className="shop-features__item">
                    <div className="shop-features__item-icon">
                        <Fi24Hours48Svg/>
                    </div>
                    <div className="shop-features__info">
                        <div className="shop-features__item-title">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_TITLE"/>
                        </div>
                        <div className="shop-features__item-subtitle">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE"/>
                        </div>
                    </div>
                </li>
                <li className="shop-features__divider" role="presentation"/>
                <li className="shop-features__item">
                    <div className="shop-features__item-icon">
                        <FiPaymentSecurity48Svg/>
                    </div>
                    <div className="shop-features__info">
                        <div className="shop-features__item-title">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_TITLE"/>
                        </div>
                        <div className="shop-features__item-subtitle">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_SUBTITLE"/>
                        </div>
                    </div>
                </li>
                <li className="shop-features__divider" role="presentation"/>
                <li className="shop-features__item">
                    <div className="shop-features__item-icon">
                        <FiTag48Svg/>
                    </div>
                    <div className="shop-features__info">
                        <div className="shop-features__item-title">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE"/>
                        </div>
                        <div className="shop-features__item-subtitle">
                            <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE"/>
                        </div>
                    </div>
                </li>
                <li className="shop-features__divider" role="presentation"/>
            </ul>
        </div>
    );


    return (
        <>
            <PageTitle>{product.name}</PageTitle>

            <BlockHeader
                breadcrumb={breadcrumb}
            />

            <div className={classNames('block-split', {'block-split--has-sidebar': layout === 'sidebar'})}>
                <div className="container">
                    <div className="block-split__row row no-gutters">
                        {layout === 'sidebar' && sidebarPosition === 'start' && (
                            <div className="block-split__item block-split__item-sidebar col-auto">
                                <ProductSidebar/>
                            </div>
                        )}

                        <div className="block-split__item block-split__item-content col-auto">
                            <div className={`product product--layout--${layout}`}>
                                <div className="product__body">
                                    <div className="product__card product__card--one"/>
                                    <div className="product__card product__card--two"/>

                                    <ProductGallery
                                        images={product.images && product.images.sort(image => (image.sortOrder || product.images.length)) || []}
                                        layout={galleryLayout}
                                        className="product__gallery"
                                    />

                                    <div className="product__header">
                                        <h1 className="product__title">{product.name}</h1>

                                        <div className="product__subtitle">
                                            <div className="product__rating">
                                                <div className="product__rating-stars">
                                                    <Rating value={product.rating || 0}/>
                                                </div>
                                                <div className="product__rating-label">
                                                    <AppLink href={{href: {hash: 'product-tab-reviews'}}}>
                                                        <FormattedMessage
                                                            id="TEXT_RATING_LABEL"
                                                            values={{
                                                                rating: product.rating,
                                                                reviews: product.reviews,
                                                            }}
                                                        />
                                                    </AppLink>
                                                </div>
                                            </div>

                                            <CompatibilityStatusBadge className="product__fit" product={product}/>
                                        </div>
                                    </div>

                                    {layout === 'full' && (
                                        <div className="product__main">
                                            {product.excerpt && (
                                                <div className="product__excerpt">
                                                    {product.excerpt}
                                                </div>
                                            )}

                                            {featuredAttributes.length > 0 && (
                                                <div className="product__features">
                                                    <div className="product__features-title">
                                                        <FormattedMessage id="TEXT_KEY_FEATURES"/>
                                                        :
                                                    </div>
                                                    <ul>
                                                        {featuredAttributes.map((attribute, index) => (
                                                            <li key={index}>
                                                                {attribute.name}
                                                                {': '}
                                                                <span>
                                                                    {attribute.values
                                                                        .map((value) => value.name)
                                                                        .join(', ')}
                                                                </span>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                    <div className="product__features-link">
                                                        <AppLink href={{href: {hash: 'product-tab-specification'}}}>
                                                            <FormattedMessage id="LINK_SEE_FULL_SPECIFICATION"/>
                                                        </AppLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="product__info">
                                        <ProductInfoCardForm product={product}/>
                                        {/*<ProductVariantContext.Provider value={currentVariant}>*/}
                                        {/*    <ProductSetVariantContext.Provider*/}
                                        {/*        value={(variant: IProductVariant | null) => setCurrentVariant(variant)}>*/}

                                        {/*        <FormProvider {...productForm.methods}>*/}
                                        {/*            <form onSubmit={productForm.submit} className="product__info-card">*/}
                                        {/*                {productInfoBody}*/}

                                        {/*                {product.options.length > 0 && (*/}
                                        {/*                    <ProductForm*/}
                                        {/*                        options={product.options}*/}
                                        {/*                        className="product__form"*/}
                                        {/*                        namespace="options"*/}
                                        {/*                    />*/}
                                        {/*                )}*/}


                                        {/*            </form>*/}
                                        {/*        </FormProvider>*/}
                                        {/*    </ProductSetVariantContext.Provider>*/}
                                        {/*</ProductVariantContext.Provider>*/}

                                        {shopFeatures}
                                    </div>

                                    <ProductTabs className="product__tabs" product={product} layout={layout}/>
                                </div>
                            </div>

                            {relatedProducts.length > 0 && (
                                <React.Fragment>
                                    <BlockSpace layout="divider-nl"/>

                                    <BlockProductsCarousel
                                        blockTitle={intl.formatMessage({id: 'HEADER_RELATED_PRODUCTS'})}
                                        products={relatedProducts}
                                        layout={layout === 'sidebar' ? 'grid-4-sidebar' : 'grid-5'}
                                    />
                                </React.Fragment>
                            )}
                        </div>

                        {layout === 'sidebar' && sidebarPosition === 'end' && (
                            <div className="block-split__item block-split__item-sidebar col-auto">
                                <ProductSidebar/>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer"/>
        </>
    );
}

export default ShopPageProduct;
