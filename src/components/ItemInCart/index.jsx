import React, { useEffect } from "react";
import {
  H4,
  Img,
  DivGrid,
  SpanGrid,
  ButtonAddRemove,
  Container,
  Table,
  Thead,
  Tr,
  Th,
  ThProduto,
  DivProduto,
  Tbody,
  Td,
  TdGrid,
  TdProduto,
} from "./styles";

import { useCart } from '../../Context/CartContext';
import { VoidCart } from "../VoidCart";

export function ItemInCart() {
  
  const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart")) || []
  const { productInCart, setProductInCart, setTotal, setSubTotal} = useCart();

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
    let sumProductReduce = valueTotal.reduce(function(sum, count){
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
    let sumProductReduce = valueTotal.reduce(function(sum, count){
      return sum + count
    })
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }

  function RemoveItem(id){
    const tempProduct = [...ItemsInCart]
    const selectedProduct = tempProduct.filter((product) => product.id!==id)

    if(selectedProduct.length <= 0){
    sessionStorage.removeItem("IdItemCart")
    sessionStorage.setItem("IdItemCart", JSON.stringify(selectedProduct))
    setProductInCart([...productInCart, selectedProduct])
    setTotal([0])
    setSubTotal([0])

  } else {
      const valueTotal = selectedProduct.map((value) => value.total)
      let sumProductReduce = valueTotal.reduce(function(sum, count){
      return sum + count
    })
    sessionStorage.removeItem("IdItemCart")
    sessionStorage.setItem("IdItemCart", JSON.stringify(selectedProduct))
    setProductInCart([...productInCart, selectedProduct])
    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
    }
  }

  return (
    <React.Fragment>
      <Container>
      {ItemsInCart.length > 0 ? (
         ItemsInCart?.map((product) => (
          <Table key={product.id}>
            <Thead>
              <Tr>
                <ThProduto>Produto</ThProduto>
                <Th>Preço Unitário</Th>
                <Th>Quantidade</Th>
                <Th>Preço Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <TdProduto>
                  <DivProduto>
                    <Img src={product.img} alt={product.name} />
                    <H4>{product.name}</H4>
                  </DivProduto>
                </TdProduto>
                <Td>R$ {product.price}</Td>
                <TdGrid>
                  <DivGrid>
                    <SpanGrid>
                      <ButtonAddRemove onClick={() => DecrementItem(product.id)}>-</ButtonAddRemove>
                    </SpanGrid>
                    <SpanGrid>{product.count}</SpanGrid>
                    <SpanGrid>
                      <ButtonAddRemove onClick={() => IncrementItem(product.id)}>+</ButtonAddRemove>
                    </SpanGrid>
                  </DivGrid>
                  <SpanGrid>
                    <ButtonAddRemove onClick={() => RemoveItem(product.id)}>Remover</ButtonAddRemove>
                  </SpanGrid>
                </TdGrid>
                <Td>R$ {product.total}</Td>
              </Tr>
            </Tbody>
          </Table>
        ))
      )  :  ( 
      <VoidCart />
      )}
      </Container>
    </React.Fragment>
  );
}
