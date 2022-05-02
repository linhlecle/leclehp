/* eslint-disable no-useless-escape */
import { ColorModeScript } from '@chakra-ui/color-mode';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import config from 'styles/theme/foundations/config';

const SITE_NAME = 'LECLE';
const SITE_TITLE = 'LECLE';
const SITE_DESCRIPTION = '글로벌 소프트웨어 하우스 LECLE';
const SITE_IMAGE = '/images/lecle_og.png';

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  redirectIEtoEdge() {
    return {
      __html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1);
      }`,
    };
  }

  setGoogleAnalytics() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}');
        gtag('config', 'UA-221436239-1');
      `,
    };
  }

  setMetaPixelCode() {
    return {
      __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '988448221810690');
      fbq('track', 'PageView');
      `,
    };
  }

  fbNoscript() {
    return `<img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=988448221810690&ev=PageView&noscript=1" />`;
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* SEO */}
          <link rel="apple-touch-icon" href={'/images/icons.png'} />
          <link rel="apple-touch-icon" sizes="152x152" href={'/images/icons.png'} />
          <link rel="apple-touch-icon" sizes="180x180" href={'/images/icons.png'} />
          <link rel="apple-touch-icon" sizes="167x167" href={'/images/icons.png'} />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <title>{SITE_NAME}</title>
          <link rel="canonical" href="https://www.lecle.co.kr/" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta name="keywords" content="LECLE, lecle, 레클" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <meta name="google-site-verification" content="0iB46ZizuTuKa-5K1Ko8eBJ29VM7fvkLT2Mkc49biTk" />
          <meta httpEquiv="content-security-policy" content="upgrade-insecure-requests" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
          <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
          <script dangerouslySetInnerHTML={this.setMetaPixelCode()} />
          <noscript dangerouslySetInnerHTML={{ __html: this.fbNoscript() }}></noscript>
        </Head>
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
