import React from "react";
import { ItemInCart } from '../../components/ItemInCart'
import { MenuCart } from "../../components/MenuCart";
import {
  Container,
  ContainerCart,
} from "./styles";

export function Cart() {
  
  return (
    <Container>
        <ItemInCart />
      <MenuCart />
    </Container>
  );
}
