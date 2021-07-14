import React from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
