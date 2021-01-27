import React, {HTMLAttributes, useCallback, useState} from "react";
import {IProduct, IProductVariant} from "~/interfaces/product";
import {ProductSetVariantContext, ProductVariantContext} from "~/services/shop/context";
import {Controller, FormProvider, UseFormMethods} from "react-hook-form";
import ProductForm from "~/components/shop/ProductForm";
import {FormattedMessage} from "react-intl";
import CurrencyFormat from "~/components/shared/CurrencyFormat";
import StockStatusBadge from "~/components/shared/StockStatusBadge";
import AppLink from "~/components/shared/AppLink";
import url from "~/services/url";
import {StockAvailability} from "~/api/graphql/types";
import InputNumber from "~/components/shared/InputNumber";
import classNames from "classnames";
import ConditionFormattedMessage from "~/components/shared/ConditionFormattedMessage";
import AsyncAction from "~/components/shared/AsyncAction";
import {Compare16Svg, Wishlist16Svg} from "~/svg";
import {useWishlistAddItem} from "~/store/wishlist/wishlistHooks";
import {useCompareAddItem} from "~/store/compare/compareHooks";
import {useProductForm} from "~/services/forms/product";
import ShareLinks from "~/components/shared/ShareLinks";

interface Props extends HTMLAttributes<HTMLElement> {
    product: IProduct;
}

function ProductInfoCardForm(props: Props) {
    const {product} = props;
    const productForm = useProductForm(product);
    const [variant, setVariant] = useState<IProductVariant | null>(null)
    const wishlistAddItem = useWishlistAddItem();
    const compareAddItem = useCompareAddItem();

    const handleOptionChange = useCallback((evt) => {
        setVariant(variant)
    }, [])

    const productTagsAndShareLinks = (
        <div className="product__tags-and-share-links">
            {product.tags && product.tags.length > 0 && (
                <div className="product__tags tags tags--sm">
                    <div className="tags__list">
                        {product.tags.map((tag, index) => (
                            <AppLink href="/" key={index}>
                                {tag}
                            </AppLink>
                        ))}
                    </div>
                </div>
            )}
            <ShareLinks className="product__share-links"/>
        </div>
    );

    const productActions = (
        <div className="product__actions">
            <React.Fragment>
                {product.stock !== StockAvailability.OutOfStock && (
                    <div className="product__actions-item product__actions-item--quantity">
                        <Controller
                            name="quantity"
                            rules={{
                                required: true,
                            }}
                            render={({value, onChange, onBlur}) => (
                                <InputNumber
                                    size="lg"
                                    min={1}
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                    </div>
                )}
                <div className="product__actions-item product__actions-item--addtocart">
                    <button
                        disabled={product.stock === StockAvailability.OutOfStock}
                        type="submit"
                        className={classNames('btn', 'btn-primary', 'btn-lg', 'btn-block', {
                            'btn-loading': productForm.submitInProgress,
                        })}
                    >
                        <ConditionFormattedMessage
                            onSuccessId="BUTTON_ADD_TO_CART"
                            onFailId="BUTTON_OUT_OF_STOCK"
                            condition={product.stock !== StockAvailability.OutOfStock}
                        />
                    </button>
                </div>
                <div className="product__actions-divider"/>
            </React.Fragment>

            <AsyncAction
                action={() => wishlistAddItem(product)}
                render={({run, loading}) => (
                    <button
                        type="button"
                        className={classNames('product__actions-item', 'product__actions-item--wishlist', {
                            'product__actions-item--loading': loading,
                        })}
                        onClick={run}
                    >
                        <Wishlist16Svg/>
                        <span>
                            <FormattedMessage id="BUTTON_ADD_TO_WISHLIST"/>
                        </span>
                    </button>
                )}
            />
            <AsyncAction
                action={() => compareAddItem(product)}
                render={({run, loading}) => (
                    <button
                        type="button"
                        className={classNames('product__actions-item', 'product__actions-item--compare', {
                            'product__actions-item--loading': loading,
                        })}
                        onClick={run}
                    >
                        <Compare16Svg/>
                        <span>
                            <FormattedMessage id="BUTTON_ADD_TO_COMPARE"/>
                        </span>
                    </button>
                )}
            />
        </div>
    );

    const productInfoBody = (
        <div className="product__info-body">
            {product.compareAtPrice && (
                <div className="product__badge tag-badge tag-badge--sale">
                    <FormattedMessage id="TEXT_BADGE_SALE"/>
                </div>
            )}

            <div className="product__prices-stock">
                <div className="product__prices">
                    {product.compareAtPrice && (
                        <React.Fragment>
                            <div className="product__price product__price--old">
                                <CurrencyFormat value={product.compareAtPrice}/>
                            </div>
                            <div className="product__price product__price--new">
                                <CurrencyFormat value={variant ? variant.price : product.price}/>
                            </div>
                        </React.Fragment>
                    )}
                    {!product.compareAtPrice && (
                        <div className="product__price product__price--current">
                            <CurrencyFormat value={variant ? variant.price : product.price}/>
                        </div>
                    )}
                </div>
                <StockStatusBadge className="product__stock" stock={product.stock}/>
            </div>

            <div className="product__meta">
                <table>
                    <tbody>
                    <tr>
                        <th>
                            <FormattedMessage id="TABLE_SKU"/>
                        </th>
                        <td>{product.sku}</td>
                    </tr>
                    {product.brand && (
                        <React.Fragment>
                            <tr>
                                <th>
                                    <FormattedMessage id="TABLE_BRAND"/>
                                </th>
                                <td>
                                    <AppLink href={url.brand(product.brand)}>
                                        {product.brand.name}
                                    </AppLink>
                                </td>
                            </tr>

                            {product.brand.country &&
                            <tr>
                                <th>
                                    <FormattedMessage id="TABLE_COUNTRY"/>
                                </th>
                                <td>
                                    <FormattedMessage id={`COUNTRY_NAME_${product.brand.country}`}/>
                                </td>
                            </tr>}
                        </React.Fragment>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (<ProductVariantContext.Provider value={variant}>
        <ProductSetVariantContext.Provider
            value={(variant: IProductVariant | null) => setVariant(variant)}>

            <FormProvider {...productForm.methods}>
                <form onSubmit={productForm.submit} className="product__info-card">
                    {productInfoBody}

                    {product.options.length > 0 && (
                        <ProductForm
                            options={product.options}
                            className="product__form"
                            namespace="options"
                        />
                    )}
                    {productActions}
                    {productTagsAndShareLinks}
                </form>
            </FormProvider>
        </ProductSetVariantContext.Provider>
    </ProductVariantContext.Provider>);
}

// export default ProductInfoCardForm;
