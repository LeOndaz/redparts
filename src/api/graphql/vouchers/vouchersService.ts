import {client} from "~/api";
import {
    ApplyVoucherDocument,
    CheckoutAddPromoCode,
    CheckoutRemovePromoCode,
    RemoveVoucherDocument
} from "~/api/graphql/types";
import {ILanguage} from "~/interfaces/language";

export const applyVoucher = (checkoutId: string, voucher: string, language: ILanguage): Promise<CheckoutAddPromoCode> => {
    return client.mutate({
        mutation: ApplyVoucherDocument,
        variables: {
            checkoutId,
            voucher,
            languageCode: language.code,
        }
    }).then(r => r.data.checkoutAddPromoCode)
}

export const removeVoucher = (checkoutId: string, voucher: string, language: ILanguage): Promise<CheckoutRemovePromoCode> => {
    return client.mutate({
        mutation: RemoveVoucherDocument,
        variables: {
            checkoutId,
            voucher,
            languageCode: language.code,
        }
    }).then(r => r.data.checkoutRemovePromoCode)
}

