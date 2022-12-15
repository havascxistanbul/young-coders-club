import '../styles/globals.css'
import '../styles/style.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-XNJGE10D8C`}
        />
        <Script id="GA-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XNJGE10D8C', {
              page_path: window.location.pathname,
            });
        `}
        </Script>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
