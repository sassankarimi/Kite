import React, { Fragment } from "react";
import App from "next/app";

//redux
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import configureStore from "../redux/store";
import withReduxSaga from "next-redux-saga";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "semantic-ui-css/semantic.css";
import "../app.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    //let pageProps = await Component.getInitialProps(ctx)
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Fragment>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Fragment>
    );
  }
}
export default withRedux(configureStore)(withReduxSaga(MyApp));
//export default MyApp;
