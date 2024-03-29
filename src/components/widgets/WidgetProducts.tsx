// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import AppImage from '~/components/shared/AppImage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    widgetTitle: React.ReactNode;
    products?: IProduct[];
}

function WidgetProducts(props: Props) {
    const {
        widgetTitle,
        className,
        products = [],
        ...rootProps
    } = props;

    const hasTitle = !!widgetTitle;
    const rootClasses = classNames('card', 'widget', 'widget-products', className);

    return (
        <div className={rootClasses} {...rootProps}>
            {hasTitle && (
                <div className="widget__header">
                    <h4>{widgetTitle}</h4>
                </div>
            )}
            <div className="widget-products__list">
                {products.map((product) => (
                    <div key={product.id} className="widget-products__item">
                        <div className="widget-products__image">
                            <AppLink href={url.product(product)}>
                                <AppImage src={product.images?.[0] && product.images[0].url} alt={product.images?.[0] && product.images[0].alt} />
                            </AppLink>
                        </div>
                        <div className="widget-products__info">
                            <div className="widget-products__name">
                                <AppLink href={url.product(product)}>
                                    {product.name}
                                </AppLink>
                            </div>
                            <div className="widget-products__prices">
                                {product.compareAtPrice && (
                                    <React.Fragment>
                                        <div className="widget-products__price widget-products__price--new">
                                            <CurrencyFormat value={product.price} />
                                        </div>
                                        <div className="widget-products__price widget-products__price--old">
                                            <CurrencyFormat value={product.compareAtPrice} />
                                        </div>
                                    </React.Fragment>
                                )}
                                {!product.compareAtPrice && (
                                    <div className="widget-products__price widget-products__price--current">
                                        <CurrencyFormat value={product.price} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(WidgetProducts);
