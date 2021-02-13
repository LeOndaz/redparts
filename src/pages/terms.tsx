// react
import React from 'react';
// application
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import {usePrivacyPolicyPage} from "~/services/hooks";
import SitePageNotFound from "~/components/site/SitePageNotFound";

function Page() {
    const page = usePrivacyPolicyPage();

    if (!page.isLoading && !page.data) return <SitePageNotFound/>

    return (
        <React.Fragment>
            {!page.isLoading &&
            <PageTitle>
                Terms And Conditions
            </PageTitle>
            }

            <BlockSpace layout="spaceship-ledge-height"/>

            <div className="block">
                <div className="container">
                    <div className="document">
                        {!page.isLoading &&
                        <div className="document__header">
                            <h1 className="document__title">{page.data!.title}</h1>
                            <div className="document__subtitle">This Agreement was last modified
                                on {page.data!.lastModified}.
                            </div>
                        </div>
                        }
                        <div className="document__content card">
                            {!page.isLoading &&
                                <div dangerouslySetInnerHTML={{
                                    __html: page.data!.contentHTML
                                }}/>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer"/>
        </React.Fragment>
    );
}

export default Page;
