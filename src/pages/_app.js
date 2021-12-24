import { Fragment } from "react";
import axios from "axios";
import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import fetchProducts from "../redux/actions/productActions";
import products from "../data/products.json";
import "../assets/scss/style.scss";
import Preloader from "../components/Preloader";
import { getJwt } from "../api/auth";
6;
import http from "../api/client";
// import { getJwt } from "../api/auth";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    props.reduxStore.dispatch(fetchProducts(products));
  }

  state = { user: "" };

  componentDidMount() {
    if (!this.state.user) {
      const user = getJwt();
      console.log("-------------cdm _app---------------->", user);

      if (user) {
        this.setState({ user });
        http.setJwt(user);
      }
    }
    console.log("****************axios header***********************");
    console.log(axios.defaults.headers, "-------------------");
    const { router } = this.props;

    // if (!user) router.replace("/other/login");
    // this.setState({ user });
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    // const token = getJwt();
    // if (token) http.setJwt(token);

    return (
      <Fragment>
        <Head>
          <title>Neel Ayurvedics</title>
          <meta
            name="description"
            content="Neel Ayurvedics is Powerful React Next JS Template For Any eCommerce Website. The template is built for sell Fashion Products, Shoes, Bags, Cosmetics, Clothes, Sunglasses, Furniture, Kids Products, Electronics, Stationery Products and Sporting Goods."
          />
          <meta
            name="keywords"
            content="ecommerce, electronics store, Fashion store, furniture store,  react, next js, clean, minimal, modern, online store, responsive, retail, shopping, ecommerce store"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate loading={<Preloader />} persistor={this.persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
