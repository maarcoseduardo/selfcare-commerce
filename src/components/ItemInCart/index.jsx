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
import { VoidCart } from "../VoidCart";

export function ItemInCart() {
  
  const { ItemsInCart, IncrementItem, DecrementItem, RemoveItem } = useCart();

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
