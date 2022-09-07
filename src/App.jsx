import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Banner } from "./components/Banner";
import { CardProvider } from "./Context/CardContext";
import { CartProvider } from "./Context/CartContext";

export function App() {
  return (
    <React.Fragment>
      <CardProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Banner />
            <Routes />
            <Footer />
            <GlobalStyle />
          </BrowserRouter>
        </CartProvider>
      </CardProvider>
    </React.Fragment>
  );
}
