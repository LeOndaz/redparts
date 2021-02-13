// application
import {cartAddItem, cartRemoveItem, cartUpdateQuantities, cartUpdateTotals} from '~/store/cart/cartActions';
import {useAppAction, useAppSelector} from '~/store/hooks';

export const useCart = () => useAppSelector((state) => state.cart);

export const useCartAddItem = () => useAppAction(cartAddItem);

export const useCartRemoveItem = () => useAppAction(cartRemoveItem);

export const useCartUpdateQuantities = () => useAppAction(cartUpdateQuantities);

export const useCartUpdateTotals = () => useAppAction(cartUpdateTotals)

export const useCartUpdateShippingTotal = () => {
    const updateCartTotals = useCartUpdateTotals();

    return (price: number) => updateCartTotals([{
        type: 'shipping',
        title: 'SHIPPING',
        price,
    }])
}

export const useCartUpdateVoucherTotal = () => {
    const updateCartTotals = useCartUpdateTotals();

    return (price: number) => updateCartTotals([{
        type: 'voucher',
        title: 'VOUCHER',
        price,
    }])
}
