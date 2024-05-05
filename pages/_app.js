import Head from "next/head";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          WitsDevSoc - University of the Witwatersrand Student Developer Society
        </title>
        <meta
          name="description"
          content="Student-Run Society Filling The Gap Between Your Studies And Your Career"
          key="desc"
        />
        <meta
          property="og:description"
          content="Student-Run Society Filling The Gap Between Your Studies And Your Career"
        />
        <meta property="og:image" content="/assets/hero2.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
