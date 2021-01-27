import React, {HTMLAttributes, useCallback, useState} from "react";
import {IProduct, IProductVariant} from "~/interfaces/product";
import {ProductSetVariantContext, ProductVariantContext} from "~/services/shop/context";
import {Controller, FormProvider} from "react-hook-form";
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

    const getCheapestVariant = useCallback(() => {
        return product.variants.sort(v => v.price)[0]
    }, [product])

    const [variant, setVariant] = useState<IProductVariant | null>(getCheapestVariant())
    const wishlistAddItem = useWishlistAddItem();
    const compareAddItem = useCompareAddItem();

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

    // const productStock = product.variants
    //     .some(variant => variant.stock === StockAvailability.InStock)
    //     && StockAvailability.InStock || StockAvailability.OutOfStock
    // the backend handles the above logic
    console.log(product)
    const productStock = product.stock;
    const buttonsDisabled = !variant;
    const variantStock = variant?.stock ? StockAvailability.InStock : StockAvailability.OutOfStock;

    const productActions = (
        <div className="product__actions">
            <React.Fragment>
                {(
                    <div className="product__actions-item product__actions-item--quantity">
                        <Controller
                            di
                            name="quantity"
                            rules={{
                                required: true,
                            }}
                            render={({value, onChange, onBlur}) => (
                                <InputNumber
                                    disabled={buttonsDisabled}
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
                        disabled={buttonsDisabled}
                        type="submit"
                        className={classNames('btn', 'btn-primary', 'btn-lg', 'btn-block', {
                            'btn-loading': productForm.submitInProgress,
                        })}
                    >
                        <ConditionFormattedMessage
                            onSuccessId="BUTTON_ADD_TO_CART"
                            onFailId="BUTTON_OUT_OF_STOCK"
                            condition={variantStock === StockAvailability.InStock}
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

    const compareAtPrice = variant?.compareAtPrice || product.compareAtPrice
    const price = variant ? variant.price : product.price

    const productInfoBody = (
        <div className="product__info-body">
            {compareAtPrice && (
                <div className="product__badge tag-badge tag-badge--sale">
                    <FormattedMessage id="TEXT_BADGE_SALE"/>
                </div>
            )}

            <div className="product__prices-stock">
                <div className="product__prices">
                    {compareAtPrice && (
                        <React.Fragment>
                            <div className="product__price product__price--old">
                                <CurrencyFormat value={compareAtPrice}/>
                            </div>
                            <div className="product__price product__price--new">
                                <CurrencyFormat value={price}/>
                            </div>
                        </React.Fragment>
                    )}
                    {!compareAtPrice && (
                        <div className="product__price product__price--current">
                            <CurrencyFormat value={price}/>
                        </div>
                    )}
                </div>
                <StockStatusBadge className="product__stock" stock={variantStock}/>
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
        <ProductSetVariantContext.Provider value={setVariant}>

            <FormProvider {...productForm.methods}>
                <form onSubmit={productForm.submit} className="product__info-card">
                    {productInfoBody}

                    {product.options.length > 0 && (
                        <ProductForm
                            product={product}
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

export default ProductInfoCardForm;
