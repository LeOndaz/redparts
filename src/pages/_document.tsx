// react
import React from 'react';
// third-party
import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
// application
import {baseUrl} from '~/services/utils';
import {getDefaultLanguage, getLanguageByPath} from '~/services/i18n/utils';

class MyDocument extends Document {
    render() {
        const language = getLanguageByPath(this.props.dangerousAsPath) || getDefaultLanguage();
        const lang = language.locale;
        const dir = language.direction;

        // noinspection HtmlRequiredTitleElement
        return (
            <Html lang={lang} dir={dir}>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NM5236T');`
                    }}></script>

                    <link rel="shortcut icon" href={baseUrl('/images/favicon.png')}/>

                    {/* fonts */}
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i"/>
                </Head>
                <body>
                <noscript dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NM5236T" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                }}/>
                <div className="site-preloader">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                                        #__next *,
                                        #__next *:before,
                                        #__next *:after {
                                            transition-duration: 0s !important;
                                        }

                                        body {
                                            overflow: hidden !important;
                                            overflow-y: scroll !important;
                                            height: 100% !important;
                                        }
                                    `,
                        }}
                    />
                </div>

                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
