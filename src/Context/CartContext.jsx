import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const [ total, setTotal ] = useState([0])
  const [ subTotal, setSubTotal ] = useState([0]);
  
  return (
    <CartContext.Provider
      value={{
        productInCart,
        setProductInCart,
        total,
        setTotal,
        subTotal, 
        setSubTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  const { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal } = context;

  return { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal };
}
