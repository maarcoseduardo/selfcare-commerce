import React, { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Banner } from "./components/Banner";
import { CardProvider } from "./Context/CardContext";
import { CartProvider } from "./Context/CartContext";

export function App() {
  const [scroll, setScroll] = useState(false);

  const handleClick = useCallback(() =>{
    setScroll(window.scrollY > 100);
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleClick);
    return () => {
      window.removeEventListener("scroll", handleClick);
    };
  }, [handleClick]);

  return (
    <React.Fragment>
      <CardProvider>
        <CartProvider>
          <HashRouter hashType="hashbang">
            <Header scroll={scroll}/>
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
