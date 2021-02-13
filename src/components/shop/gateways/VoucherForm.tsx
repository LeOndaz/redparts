import {FormattedMessage, useIntl} from "react-intl";
import React from "react";
import {useForm} from "react-hook-form";
import classNames from "classnames";

interface IForm {
    voucher: string;
}

interface Props {
    onSubmit: (data: IForm) => void
    onChange: () => void
    isLoading: boolean
}

function VoucherForm({onSubmit, isLoading, onChange}: Props) {
    const intl = useIntl();
    const {register, handleSubmit} = useForm();

    return (
        <form className="cart-table__coupon-form form-row form-group mr-0 ml-0 p-0 w-100">
            <div className="form-group mb-0 col flex-grow-1">
                <label htmlFor="coupon-code" className="sr-only">
                    <FormattedMessage id="INPUT_COUPON_CODE_LABEL"/>
                </label>
                <input
                    name="voucher"
                    type="text"
                    id="coupon-code"
                    ref={register}
                    onChange={onChange}
                    className="form-control form-control-sm"
                    placeholder={intl.formatMessage({id: 'INPUT_COUPON_CODE_PLACEHOLDER'})}
                />
            </div>
            <div className="form-group mb-0 col-auto">
                <button type="button" className={classNames('btn btn-sm btn-primary', {
                    'btn-loading': isLoading,
                })} onClick={handleSubmit(onSubmit)}>
                    <FormattedMessage id="BUTTON_APPLY_COUPON"/>
                </button>
            </div>
        </form>
    )
}

export default VoucherForm

