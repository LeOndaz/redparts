// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import {baseUrl} from '~/services/utils';
import {useAboutUsPage} from "~/services/hooks";
import SitePageNotFound from "~/components/site/SitePageNotFound";
import {Container} from "reactstrap";
import classNames from "classnames";

function Page() {
    const page = useAboutUsPage();

    if (!page.isLoading && !page.data) {
        return <SitePageNotFound/>
    }

    return (
        <React.Fragment>
            { !page.isLoading &&
                <PageTitle>
                    {page.data?.title}
                </PageTitle>
            }
            <div className="about">
                {page.data?.backgroundImage &&
                <div className="about__image" style={{
                    minHeight: "400px"
                }}>
                    <div
                        className="about__image-bg"
                        style={{
                            backgroundImage: page.isLoading ? '' : `url(${page.data.backgroundImage})`
                        }}
                    />
                    <Decor className="about__image-decor" type="bottom"/>
                </div>
                }

                <BlockSpace layout="divider-nl"/>
                {!page.isLoading &&
                <div className={classNames('document')} dangerouslySetInnerHTML={{
                    __html: page.data?.contentHTML || ''
                }}/>
                }

                {/*<div className="about__card">*/}
                {/*    <div className="about__card-title">About Us</div>*/}
                {/*    {!page.isLoading &&*/}
                {/*        <div className="about__card-text"></div>*/}
                {/*    }*/}
                {/*    <div className="about__card-author">Ryan Ford, CEO RedParts</div>*/}
                {/*    <div className="about__card-signature">*/}
                {/*        <AppImage src="/images/signature.jpg" width="160" height="55"/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*        <div className="about__indicators">*/}
                {/*            <div className="about__indicators-body">*/}
                {/*                <div className="about__indicators-item">*/}
                {/*                    <div className="about__indicators-item-value">350</div>*/}
                {/*                    <div className="about__indicators-item-title">Stores around the world</div>*/}
                {/*                </div>*/}
                {/*                <div className="about__indicators-item">*/}
                {/*                    <div className="about__indicators-item-value">80 000</div>*/}
                {/*                    <div className="about__indicators-item-title">Original auto parts</div>*/}
                {/*                </div>*/}
                {/*                <div className="about__indicators-item">*/}
                {/*                    <div className="about__indicators-item-value">5 000</div>*/}
                {/*                    <div className="about__indicators-item-title">Satisfied customers</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
            </div>

            {/*<BlockSpace layout="divider-xl"/>*/}

            {/*<BlockTeammates/>*/}

            {/*<BlockSpace layout="divider-xl"/>*/}

            {/*<BlockReviews/>*/}

            <BlockSpace layout="before-footer"/>
        </React.Fragment>
    );
}

export default Page;
