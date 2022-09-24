import React, { createContext, useState, useContext } from "react";
import { useCard } from "./CardContext";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const [ total, setTotal ] = useState([0])
  const [ subTotal, setSubTotal ] = useState([0]);
  const { card } = useCard();
  const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart")) || []
  let sumProductReduce;

  function AddItemCart(idItem) {
    const tempCard = [...card] 
    const cardFiltered = tempCard.find((product) => product.id===idItem);
    const tempProduct = [...ItemsInCart]
    
    if(ItemsInCart.length <= 0) {
      
      if(cardFiltered){
        cardFiltered.inCart = true;
      }
      
      sessionStorage.setItem("IdItemCart", JSON.stringify([...ItemsInCart, cardFiltered]));
      setProductInCart([...productInCart, cardFiltered])
      const selectedCard = tempCard.filter((value) => value.inCart==true ? value.total : '')
      const selectedCardTotalValue = selectedCard.map( product => product.total)
      sumProductReduce = selectedCardTotalValue.reduce(function(sum, count){
        return sum + count
      })
      setTotal(sumProductReduce)
      setSubTotal(sumProductReduce)

    } else {

      if(cardFiltered){
        cardFiltered.inCart = true; 
      }
      
      sessionStorage.setItem("IdItemCart", JSON.stringify([...ItemsInCart, cardFiltered]));
      setProductInCart([...productInCart, cardFiltered])
      const selectedCard = tempProduct.filter((value) => value.inCart==true ? value.total : '')
      const selectedCardTotalValue = selectedCard.map( product => product.total)
      sumProductReduce = selectedCardTotalValue.reduce(function(sum, count){
        return sum + count
      })
      sumProductReduce += cardFiltered.total 
      setTotal(sumProductReduce)
      setSubTotal(sumProductReduce)
    }
  }

  function IncrementItem(id){
    const tempProduct = [...ItemsInCart]
    const selectedProduct = tempProduct.find((product) => product.id===id)
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];

    product.count = product.count + 1
    product.total = product.price * product.count

    sessionStorage.setItem("IdItemCart", JSON.stringify(tempProduct))
    setProductInCart([...productInCart, tempProduct])
    
    const valueTotal = tempProduct.map((value) => value.total)
    sumProductReduce = valueTotal.reduce(function(sum, count){
      return sum + count
    })
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }


  function DecrementItem(id){
    const tempProduct = [...ItemsInCart]
    const quantityItemZero = 0;
    const selectedProduct = tempProduct.find((product) => product.id===id)
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];

    product.count = product.count - 1
    product.total = product.price * product.count
    
    sessionStorage.setItem("IdItemCart", JSON.stringify(tempProduct))
    setProductInCart([...productInCart, tempProduct])

    if(product.count <= quantityItemZero){
      RemoveItem(id)
    }

    const valueTotal = tempProduct.map((value) => value.total)
    sumProductReduce = valueTotal.reduce(function(sum, count){
      return sum + count
    })
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }

  function RemoveItem(id){
    const tempProduct = [...ItemsInCart]
    const selectedProduct = tempProduct.find((product) => product.id===id)
    const selectedProductVoid = tempProduct.filter((product) => product.id!==id)
    
    const index = tempProduct.indexOf(selectedProduct)
    let product = tempProduct[index];
    
    product.inCart = false

    if(selectedProductVoid.length <= 0){
    sessionStorage.removeItem("IdItemCart")
    sessionStorage.setItem("IdItemCart", JSON.stringify([]))
    setProductInCart([])
    setTotal([0])
    setSubTotal([0])
  } else {
    let productRemoved = tempProduct.filter((product) => product.inCart)
      const valueTotal = productRemoved.map((value) => value.total)
      sumProductReduce = valueTotal.reduce(function(sum, count){
      return sum + count
    })
    sessionStorage.removeItem("IdItemCart")
    sessionStorage.setItem("IdItemCart", JSON.stringify(productRemoved))
    
    setProductInCart(productRemoved)
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
    }
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
        ItemsInCart,
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

  const { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal, AddItemCart, ItemsInCart, IncrementItem, DecrementItem, RemoveItem } = context;

  return { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal, AddItemCart, ItemsInCart, IncrementItem, DecrementItem, RemoveItem };
}
