import React from "react";
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

export function ItemInCart() {
  const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart"))
  const { productInCart, setProductInCart, total, setTotal, subTotal, setSubTotal} = useCart();

  function AddOneMoreItem(id){
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
  }

  function RemoveOneMoreItem(id){
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
      RemoveThisItem(id)
    }

    const valueTotal = tempProduct.map((value) => value.total)
    console.log(valueTotal);
    let sumProductReduce = valueTotal.reduce(function(sum, count){
      return sum - count
    })
    console.log(sumProductReduce);
    setTotal(sumProductReduce)
  }

  function RemoveThisItem(id){
    const tempProduct = [...ItemsInCart]
    const selectedProduct = tempProduct.filter((product) => product.id!==id)

    sessionStorage.removeItem("IdItemCart")
    sessionStorage.setItem("IdItemCart", JSON.stringify(selectedProduct))
    setProductInCart([...productInCart, selectedProduct])
  }

  return (
    <React.Fragment>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <ThProduto>Produto</ThProduto>
              <Th>Preço Unitário</Th>
              <Th>Quantidade</Th>
              <Th>Preço Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ItemsInCart?.map((product) => {
              return (
                <Tr key={product.id}>
                  <TdProduto>
                    <DivProduto>
                      <Img src={product.img} alt={product.name} />
                      <H4>{product.name}</H4>
                    </DivProduto>
                  </TdProduto>
                  <Td>{product.price}</Td>
                  <TdGrid>
                    <DivGrid>
                      <SpanGrid>
                        <ButtonAddRemove onClick={() => RemoveOneMoreItem(product.id)}>-</ButtonAddRemove>
                      </SpanGrid>
                      <SpanGrid>{product.count}</SpanGrid>
                      <SpanGrid>
                        <ButtonAddRemove onClick={() => AddOneMoreItem(product.id)}>+</ButtonAddRemove>
                      </SpanGrid>
                    </DivGrid>
                    <SpanGrid>
                      <ButtonAddRemove onClick={() => RemoveThisItem(product.id)}>remover</ButtonAddRemove>
                    </SpanGrid>
                  </TdGrid>
                  <Td>{product.total}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
