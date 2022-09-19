import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Banner } from "./components/Banner";
import { CardProvider } from "./Context/CardContext";
import { CartProvider } from "./Context/CartContext";

export function App() {
  return (
    <React.Fragment>
      <CardProvider>
        <CartProvider>
          <HashRouter hashType="hashbang">
            <Header />
            <Banner />
            <Routes />
            <Footer />
            <GlobalStyle />
          </HashRouter>
        </CartProvider>
      </CardProvider>
    </React.Fragment>
  );
}
