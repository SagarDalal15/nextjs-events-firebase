import "../styles/globals.css";
import Layout from "../components/layout/layout";

//This is the root component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
