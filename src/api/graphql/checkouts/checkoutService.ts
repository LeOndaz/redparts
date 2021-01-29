import {
    Checkout, CheckoutComplete, CheckoutCreate,
    CheckoutCreateInput,
    CheckoutLineInput, CheckoutPaymentCreate, CompleteCheckoutDocument,
    CreateCheckoutDocument, CreatePaymentDocument, GetCheckoutByTokenDocument, Payment,
    PaymentInput
} from "~/api/graphql/types";
import {client} from "~/api";
import {ICheckoutData} from "~/api/base";
import {addressMap} from "~/api/graphql/addresses/addressMappers";
import {getVariantByOptions} from "~/api/graphql/productVariants/utils";
import {getCurrentChannel} from "~/api/graphql/consts";
import {ILanguage} from "~/interfaces/language";
import {handleSingleResponse} from "~/api/graphql/misc/mappers/utils";
import * as util from "util";
import {withAuth} from "~/api/graphql/users/authService";
import {ICustomFields} from "~/interfaces/custom-fields";


const handleCreateCheckoutResponse = (res: any): Checkout => handleSingleResponse({
    inMapper: (checkoutCreate: CheckoutCreate) => checkoutCreate.checkout,
    dataField: 'checkoutCreate',
    res,
})

// const handleCreatePaymentResponse = (res: any): Payment => handleSingleResponse({
//     inMapper: (paymentCreate: CheckoutPaymentCreate) => paymentCreate.payment,
//     dataField: 'checkoutPaymentCreate',
//     res,
// })

const handleCheckoutSingleResponse = (res: any): Checkout => handleSingleResponse({
    dataField: 'checkout',
    res,
})

export const getCheckoutByToken = (token: string, language: ILanguage, context?: ICustomFields): Promise<Checkout> => withAuth(client.query)({
    query: GetCheckoutByTokenDocument,
    variables: {
        token,
        languageCode: language.code,
    },
    context,
}).then(handleCheckoutSingleResponse)

// export const getCheckoutById = (id: string, language: ILanguage): Promise<Checkout> => client.query({
//     query: GetCheckoutByIdDocment,
//     variables: {
//         id,
//         languageCode: language.code,
//     }
// }).then(handleCheckoutSingleResponse)

export const checkout = (data: ICheckoutData, isAnonymous: boolean, language: ILanguage): Promise<Checkout> => {
    const billingAddress = addressMap.out(data.billingAddress);
    const shippingAddress = data.shippingAddress ? addressMap.out(data.shippingAddress) : billingAddress;

    const checkoutLines: CheckoutLineInput[] = data.items.map(cartItem => {
        const variant = getVariantByOptions(cartItem.product, cartItem.options, 'name')

        if (variant === null) {
            throw Error('Variant not found.')
        }

        return {
            quantity: cartItem.quantity,
            variantId: variant.id,
        }
    })

    if (checkoutLines.length === 0) throw Error('CHECKOUT_EMPTY');

    const input: CheckoutCreateInput = {
        billingAddress,
        shippingAddress,
        channel: getCurrentChannel(),
        lines: checkoutLines,
    }

    if (isAnonymous) {
        /** Anonymous checkouts require user email */
        /** NOTE: mapped addresses have no email */
        input.email = data.shippingAddress.email
    }
    console.log(checkoutLines)
    return client.mutate({
        mutation: CreateCheckoutDocument,
        variables: {
            languageCode: language.code,
            input,
        },
    }).then(handleCreateCheckoutResponse)
}

export const createPayment = (checkoutId: string, input: PaymentInput, language: ILanguage): Promise<CheckoutPaymentCreate> => client.mutate({
    mutation: CreatePaymentDocument,
    variables: {
        languageCode: language.code,
        checkoutId,
        input,
    }
}).then(r => r.data.checkoutPaymentCreate)

export const completeCheckout = (checkoutId: string, redirectUrl: string, storeSource: boolean, language: ILanguage, paymentData?: string,): Promise<CheckoutComplete> => client.mutate({
    mutation: CompleteCheckoutDocument,
    variables: {
        checkoutId,
        redirectUrl,
        storeSource,
        languageCode: language.code,
        ...(paymentData ? {paymentData} : {}),
    }
}).then(r => r.data.checkoutComplete)
