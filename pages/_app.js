import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import GithubLink from "../components/github-link";

//This is the root component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Component {...pageProps} />
      <GithubLink />
    </Layout>
  );
}

export default MyApp;
