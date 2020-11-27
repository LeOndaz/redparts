// react
import React, { useMemo } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import StatusBadge, { IStatusBadgeType } from '~/components/shared/StatusBadge';
import { IProductStock } from '~/interfaces/product';

interface Props extends React.HTMLAttributes<HTMLElement> {
    stock: IProductStock;
}

function StockStatusBadge(props: Props) {
    const { stock, className, ...rootProps } = props;
    const rootClasses = classNames(className);

    const typesMap: Record<IProductStock, IStatusBadgeType> = useMemo(() => ({
        'IN_STOCK': 'success',
        'OUT_OF_STOCK': 'failure',
        'ON_BACKORDER': 'warning',
    }), []);

    const textMap = useMemo(() => ({
        'IN_STOCK': (<FormattedMessage id="TEXT_STOCK_IN_STOCK" />),
        'OUT_OF_STOCK': (<FormattedMessage id="TEXT_STOCK_OUT_OF_STOCK" />),
        'ON_BACKORDER': (<FormattedMessage id="TEXT_STOCK_ON_BACKORDER" />),
    }), []);

    return (
        <StatusBadge
            type={typesMap[stock]}
            text={textMap[stock]}
            className={rootClasses}
            {...rootProps}
        />
    );
}

export default StockStatusBadge;
