import React from "react";
import { Provider } from 'react-redux';
import store from "../redux/store";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
