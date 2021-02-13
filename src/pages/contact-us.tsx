// react
import React from 'react';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockMap from '~/components/blocks/BlockMap';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
// data
import theme from '~/data/theme';
import {useContactUsPage} from "~/services/hooks";
import SitePageNotFound from "~/components/site/SitePageNotFound";

function Page() {
    const page = useContactUsPage();

    if (!page.isLoading && !page.data){
        return <SitePageNotFound/>
    }

    return (
        <React.Fragment>
            {!page.isLoading &&
            <PageTitle>Contact Us</PageTitle>
            }

            <BlockMap/>

            {!page.isLoading &&
            <BlockHeader
                pageTitle={page.data?.title}
                breadcrumb={[
                    {title: 'Home', url: ''},
                    {title: 'Breadcrumb', url: ''},
                    {title: 'Current Page', url: ''},
                ]}
                afterHeader={false}
            />
            }

            <div className="block">
                <div className="container container--max--lg">
                    <div className="card">
                        <div className="card-body card-body--padding--2">
                            <div className="row">
                                <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <div className="mr-1">
                                        <h4 className="contact-us__header card-title">Our Address</h4>
                                        {!page.isLoading &&
                                        <div className="contact-us__address" dangerouslySetInnerHTML={{
                                            __html: page.data?.contentHTML || ''
                                        }}/>}
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="ml-1">
                                        <h4 className="contact-us__header card-title">Leave us a Message</h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Your Name</label>
                                                    <input
                                                        type="text"
                                                        id="form-name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Subject</label>
                                                <input
                                                    type="text"
                                                    id="form-subject"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message">Message</label>
                                                <textarea
                                                    id="form-message"
                                                    className="form-control"
                                                    rows={4}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer"/>
        </React.Fragment>
    );
}

export default Page;
