import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
