import React from "react";
import {
  H4,
  Img,
  DivGrid,
  SpanGrid,
  DivButtonsRemove,
  SpanButtons,
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
import { FaTrash } from "react-icons/fa";
import { useCart } from '../../Context/CartContext';
import { VoidCart } from "../VoidCart";

export function ItemInCart() {
  
  const { productInCart, IncrementItem, DecrementItem, RemoveItem } = useCart();

  return (
    <React.Fragment>
      <Container>
      {productInCart.length > 0 ? (
         productInCart?.map((product) => (
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
                    <ButtonAddRemove onClick={() => RemoveItem(product.id)}>
                      <DivButtonsRemove>
                        <SpanButtons>
                          <FaTrash size={15}/>
                        </SpanButtons> 
                        Remover
                      </DivButtonsRemove>
                      </ButtonAddRemove>
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
