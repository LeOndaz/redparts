// react
import React, {FunctionComponent} from 'react';
// third-party
import {FormattedMessage} from 'react-intl';
// data
import {useSiteDetails} from "~/services/hooks";

const FooterContacts: FunctionComponent<React.HTMLAttributes<HTMLElement>> = () => {
    const siteDetails = useSiteDetails()

    return (
        <div className="footer-contacts">
            <h5 className="footer-contacts__title">
                <FormattedMessage id="HEADER_CONTACT_US"/>
            </h5>

            {!siteDetails.isLoading && <div className="footer-contacts__text">
                {siteDetails.data!.description}
            </div>}

            {siteDetails.data?.address &&

            <address className="footer-contacts__contacts">
                {!siteDetails.isLoading && <dl>
                    <dt>
                        <FormattedMessage id="TEXT_PHONE_NUMBER"/>
                    </dt>
                    <dd>{siteDetails.data!.address.phone}</dd>
                </dl>
                }
                {!siteDetails.isLoading && siteDetails.data!.address.email && <dl>
                    <dt>
                        <FormattedMessage id="TEXT_EMAIL_ADDRESS"/>
                    </dt>
                    <dd>{siteDetails.data!.address.email}</dd>
                </dl>
                }
                <dl>
                    <dt>
                        <FormattedMessage id="TEXT_OUR_LOCATION"/>
                    </dt>
                    {!siteDetails.isLoading && siteDetails.data!.address.address1 &&
                    <dd key={1}>{siteDetails.data!.address.address1}</dd>}
                    {!siteDetails.isLoading && siteDetails.data!.address.address2 &&
                    <dd key={2}>{siteDetails.data!.address.address2}</dd>}
                </dl>
            </address>}
        </div>
    );
};

export default FooterContacts;
