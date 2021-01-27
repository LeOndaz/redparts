// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';

interface Props {
    text: string;
    description: string;
}

function CustomPage({text, description}: Props) {
    return (
        <React.Fragment>
            <PageTitle>
                {text}
            </PageTitle>

            <BlockSpace layout="spaceship-ledge-height" />

            <div className="block">
                <div className="container">
                    <div className="not-found">
                        <div className="not-found__404">
                            Oops! Error 404
                        </div>

                        <div className="not-found__content">
                            <h1 className="not-found__title">{text}</h1>

                            <p className="not-found__text">
                                {description}
                                <br />
                                Try to use the search.
                            </p>

                            <form className="not-found__search">
                                <input
                                    type="text"
                                    className="not-found__search-input form-control"
                                    placeholder="Search Query..."
                                />
                                <button type="submit" className="not-found__search-button btn btn-primary">
                                    Search
                                </button>
                            </form>

                            <p className="not-found__text">
                                Or go to the home page to start over.
                            </p>

                            <AppLink href={url.home()} className="btn btn-secondary btn-sm">
                                Go To Home Page
                            </AppLink>
                        </div>
                    </div>
                </div>
            </div>
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default CustomPage;
