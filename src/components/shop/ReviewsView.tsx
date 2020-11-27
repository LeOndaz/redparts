// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
// application
import ReviewsList from '~/components/shop/ReviewsList';
import { IProductPageLayout } from '~/interfaces/pages';
import { shopApi } from '~/api';
import { useAsyncAction, useIsUnmountedRef } from '~/store/hooks';
import { useList } from '~/services/hooks';
import { validateEmail } from '~/services/validators';
import {useUser} from "~/store/user/userHooks";

interface IForm {
    rating: string;
    author: string;
    email: string;
    content: string;
}

interface Props {
    productId: string;
    productPageLayout: IProductPageLayout;
}

function ReviewsView(props: Props) {
    const intl = useIntl();
    const { productId, productPageLayout } = props;
    const user = useUser();
    const formMethods = useForm<IForm>();
    const isUnmountedRef = useIsUnmountedRef();
    const {
        handleSubmit,
        register,
        errors,
        reset,
    } = formMethods;
    const {
        list,
        options,
        load,
        onNavigate,
    } = useList((options) => shopApi.getProductReviews(productId.toString(), { limit: 8, ...options }), [productId]);

    const [submit, submitInProgress] = useAsyncAction(async (data: IForm) => {
        await shopApi.addProductReview(productId.toString(), {
            ...data,
            rating: parseFloat(data.rating),
        });

        // Reload the list with options reset.
        await load({});

        if (isUnmountedRef.current) {
            return;
        }

        reset();

        toast.success(intl.formatMessage({ id: 'TEXT_TOAST_REVIEW_ADDED' }));
    }, [productId, reset]);

    return (
        <div className="reviews-view">
            {list && (
                <div className="reviews-view__list">
                    <ReviewsList
                        list={list}
                        page={options.page}
                        onNavigate={onNavigate}
                    />
                </div>
            )}

            { user && <form className="reviews-view__form" onSubmit={handleSubmit(submit)}>
                <h3 className="reviews-view__header">
                    <FormattedMessage id="HEADER_WRITE_REVIEW" />
                </h3>
                <div className="row">
                    <div
                        className={classNames({
                            'col-xxl-8 col-xl-10 col-lg-9 col-12': productPageLayout === 'full',
                            'col-xxl-12 col-xl-10 col-12': productPageLayout === 'sidebar',
                        })}
                    >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="review-stars">
                                    <FormattedMessage id="INPUT_RATING_LABEL" />
                                </label>
                                <select
                                    id="review-stars"
                                    name="rating"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.rating,
                                    })}
                                    ref={register({ required: true })}
                                >
                                    <option value="">
                                        {intl.formatMessage({ id: 'INPUT_RATING_PLACEHOLDER' })}
                                    </option>
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <option key={stars} value={stars}>
                                            {intl.formatMessage({ id: 'INPUT_RATING_OPTION' }, { stars })}
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                    {errors.rating?.type === 'required' && (
                                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                    )}
                                </div>
                            </div>
                            {/*<div className="form-group col-md-4">*/}
                            {/*    <label htmlFor="review-author">*/}
                            {/*        <FormattedMessage id="INPUT_YOUR_NAME_LABEL" />*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        id="review-author"*/}
                            {/*        name="author"*/}
                            {/*        className={classNames('form-control', {*/}
                            {/*            'is-invalid': errors.author,*/}
                            {/*        })}*/}
                            {/*        placeholder={intl.formatMessage({ id: 'INPUT_YOUR_NAME_PLACEHOLDER' })}*/}
                            {/*        ref={register({ required: true })}*/}
                            {/*    />*/}
                            {/*    <div className="invalid-feedback">*/}
                            {/*        {errors.author?.type === 'required' && (*/}
                            {/*            <FormattedMessage id="ERROR_FORM_REQUIRED" />*/}
                            {/*        )}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="form-group col-md-4">*/}
                            {/*    <label htmlFor="review-email">*/}
                            {/*        <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        id="review-email"*/}
                            {/*        name="email"*/}
                            {/*        className={classNames('form-control', {*/}
                            {/*            'is-invalid': errors.email,*/}
                            {/*        })}*/}
                            {/*        placeholder={intl.formatMessage({ id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER' })}*/}
                            {/*        ref={register({*/}
                            {/*            required: true,*/}
                            {/*            validate: { email: validateEmail },*/}
                            {/*        })}*/}
                            {/*    />*/}
                            {/*    <div className="invalid-feedback">*/}
                            {/*        {errors.email?.type === 'required' && (*/}
                            {/*            <FormattedMessage id="ERROR_FORM_REQUIRED" />*/}
                            {/*        )}*/}
                            {/*        {errors.email?.type === 'email' && (*/}
                            {/*            <FormattedMessage id="ERROR_FORM_INCORRECT_EMAIL" />*/}
                            {/*        )}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="review-text">
                                <FormattedMessage id="INPUT_YOUR_REVIEW_LABEL" />
                            </label>
                            <textarea
                                id="review-text"
                                rows={6}
                                name="content"
                                className={classNames('form-control', {
                                    'is-invalid': errors.content,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_YOUR_REVIEW_PLACEHOLDER' })}
                                ref={register({ required: true })}
                            />
                            <div className="invalid-feedback">
                                {errors.content?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )}
                            </div>
                        </div>
                        <div className="form-group mb-0 mt-4">
                            <button
                                type="submit"
                                className={classNames('btn', 'btn-primary', {
                                    'btn-loading': submitInProgress,
                                })}
                            >
                                <FormattedMessage id="BUTTON_POST_REVIEW" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            }
        </div>
    );
}

export default ReviewsView;
