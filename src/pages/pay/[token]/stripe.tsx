import React from "react";
import StripeGateway from "~/components/shop/gateways/stripe/StripeGateway";
import {Checkout} from "~/api/graphql/types";
import {GetServerSideProps} from "next";
import {getCheckoutByToken} from "~/api/graphql/checkouts/checkoutService";
import {getLanguageServerSide} from "~/services/i18n/utils";

interface Props {
    checkout: Checkout
}

function Page({checkout}: Props) {
    return <StripeGateway checkout={checkout}/>
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const {params} = ctx;
    const token = typeof params?.token === 'string' ? params.token : null;
    const language = getLanguageServerSide(ctx)
    // const checkout = token ? await getCheckoutByToken("7282ca40-b013-4d5d-855a-0ba52e062cf1", language) : null
    // console.log(await getCheckoutByToken(token, language))
    const checkout = {
        "id": "Q2hlY2tvdXQ6NzI4MmNhNDAtYjAxMy00ZDVkLTg1NWEtMGJhNTJlMDYyY2Yx",
        "token": "7282ca40-b013-4d5d-855a-0ba52e062cf1",
        "created": "2021-01-16T02:41:47.095683+00:00",
        "email": "test@abc.com",
        "isShippingRequired": false,
        "shippingAddress": null,
        "billingAddress": {
            "id": "QWRkcmVzczo2",
            "firstName": "AHMED",
            "lastName": "BRO",
            "streetAddress1": "BRO X2",
            "streetAddress2": "X2 PRO",
            "city": "TEST",
            "cityArea": "",
            "postalCode": "00000",
            "country": {
                "code": "EG",
                "country": "Egypt"
            },
            "phone": "+201142494391",
            "isDefaultBillingAddress": null,
            "isDefaultShippingAddress": null,
            "companyName": "RED"
        },
        "subtotalPrice": {
            "currency": "EUR",
            "gross": {
                "amount": 750
            },
            "net": {
                "amount": 750
            },
            "tax": {
                "amount": 0
            }
        },
        "totalPrice": {
            "currency": "EUR",
            "gross": {
                "amount": 750
            },
            "net": {
                "amount": 750
            },
            "tax": {
                "amount": 0
            }
        },
        "lines": [
            {
                "id": "Q2hlY2tvdXRMaW5lOjE=",
                "quantity": 1,
                "requiresShipping": false,
                "totalPrice": {
                    "currency": "EUR",
                    "gross": {
                        "amount": 750
                    },
                    "net": {
                        "amount": 750
                    },
                    "tax": {
                        "amount": 0
                    }
                },
                "variant": {
                    "product": {
                        "id": "UHJvZHVjdDo2"
                    },
                    "attributes": []
                }
            }
        ]
    }

    return {
        props: {
            checkout,
        }
    }
}


export default Page;
