import React, { createContext, useState, useContext } from "react";
import { useCard } from "./CardContext";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const [ total, setTotal ] = useState([0])
  const [ subTotal, setSubTotal ] = useState([0]);
  const { card } = useCard();
  let sumProductReduce;

  function AddItemCart(idItem) {
    const tempCard = [...card] 
    const selectedProduct = tempCard.find((product) => product.id===idItem);
    
    if(productInCart.length <= 0) {
      
      if(selectedProduct){
        selectedProduct.inCart = true;
      }
      
      setProductInCart([...productInCart, selectedProduct])
      const selectedCard = tempCard.filter((value) => value.inCart==true ? value.total : '')
      const selectedCardTotalValue = selectedCard.map( product => product.total)
      sumProductReduce = selectedCardTotalValue.reduce((sum, count) => sum + count, 0)
      setTotal(sumProductReduce)
      setSubTotal(sumProductReduce)

    } else {

      if(selectedProduct){
        selectedProduct.inCart = true; 
      }
      setProductInCart([...productInCart, selectedProduct])
      const selectedCard = productInCart.filter((value) => value.inCart==true ? value.total : '')
      const selectedCardTotalValue = selectedCard.map( product => product.total)
      sumProductReduce = selectedCardTotalValue.reduce((sum, count) => sum + count, 0)
      sumProductReduce += selectedProduct.total 
      setTotal(sumProductReduce)
      setSubTotal(sumProductReduce)
    }
  }

  function IncrementItem(id){
    const tempProduct = [...productInCart]
    const selectedProduct = tempProduct.find((product) => product.id===id)
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];

    product.count = product.count + 1
    product.total = product.price * product.count

    console.log(productInCart)
    setProductInCart(tempProduct)
    const valueTotal = tempProduct.map((value) => value.total)
    sumProductReduce = valueTotal.reduce((sum, count) => sum + count, 0)
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }

  function DecrementItem(id){
    const tempProduct = [...productInCart]
    const quantityItemZero = 0;
    const selectedProduct = tempProduct.find((product) => product.id===id)
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];

    product.count = product.count - 1
    product.total = product.price * product.count
    
    setProductInCart(tempProduct)
    const valueTotal = tempProduct.map((value) => value.total)
    sumProductReduce = valueTotal.reduce((sum, count) => sum + count, 0)

    if(product.count <= quantityItemZero){
      RemoveItem(id)
      product.count = 1
      product.total = selectedProduct.price
    }
    
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }

  function RemoveItem(id){
    const tempProduct = [...productInCart]
    const selectedProduct = tempProduct.find((product) => product.id===id)
    
    const index = tempProduct.indexOf(selectedProduct)
    let product = tempProduct[index];
    
    product.inCart = false
    
    let productRemoved = tempProduct.filter((product) => product.inCart)
    const valueTotal = productRemoved.map((value) => value.total)
      sumProductReduce = valueTotal.reduce((sum, count) => sum + count, 0)
    console.log(productRemoved);
    console.log(valueTotal);
    console.log(product);
    setProductInCart(productRemoved)
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }

  return (
    <CartContext.Provider
      value={{
        productInCart,
        setProductInCart,
        total,
        setTotal,
        subTotal, 
        setSubTotal,
        AddItemCart,
        IncrementItem,
        DecrementItem,
        RemoveItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  const { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal, AddItemCart, IncrementItem, DecrementItem, RemoveItem } = context;

  return { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal, AddItemCart, IncrementItem, DecrementItem, RemoveItem };
}
