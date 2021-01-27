// react
import React from 'react';
// third-party
import {FormattedMessage} from 'react-intl';
// application
import Decor from '~/components/shared/Decor';
import FooterContacts from '~/components/footer/FooterContacts';
import FooterLinks from '~/components/footer/FooterLinks';
import FooterNewsletter from '~/components/footer/FooterNewsletter';
import {useLanguage} from "~/services/i18n/hooks";
import {Quickview16Svg} from "~/svg";
import {useFooterLinks} from "~/services/hooks";

// data

export function Footer() {
    const language = useLanguage();
    const items = useFooterLinks(language)

    return (
        <div className="site-footer">
            <Decor className="site-footer__decor" type="bottom"/>
            <div className="site-footer__widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <FooterContacts className="site-footer__widget"/>
                        </div>
                        {items.isLoading &&
                            <button type="button" className={`btn btn-primary btn-loading btn-icon`}>
                            <Quickview16Svg />
                            </button>
                        }
                        {!items.isLoading && items.data.slice(0, 2).map((item, idx) =>
                            <div className="col-6 col-md-3 col-xl-2">
                                <FooterLinks className="site-footer__widgets" header={item.header} links={item.links}/>
                            </div>
                        )}
                        <div className="col-12 col-md-6 col-xl-4">
                            <FooterNewsletter className="site-footer__widget"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Footer);
