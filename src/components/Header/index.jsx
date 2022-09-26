import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiTwotoneStar,
} from "react-icons/ai";
import {
  HeaderContainer,
  DivLogo,
  SpanLogo,
  UnList,
  List,
  ListCart,
  DivInCart,
  SpanInCart,
  Anchor,
} from "./styles";
import { useCart } from "../../Context/CartContext";

export function Header() {
  const {productInCart, ItemsInCart} = useCart();
  
  return (
    <React.Fragment>
      <HeaderContainer>
        <DivLogo>
          <AiTwotoneStar size={21} />
          <SpanLogo>
            <Anchor to="/">selfcare</Anchor>
          </SpanLogo>
        </DivLogo>
        <UnList>
          <List>
            <AiOutlineSearch size={21} />
          </List>
          <List>
            <Anchor to="/login">
              <AiOutlineUser size={21} />
            </Anchor>
          </List>
          <ListCart>
            <Anchor to="/cart">
              <DivInCart>
                {productInCart ? (
                  <SpanInCart>{productInCart.length}</SpanInCart>
                ) : (
                  <SpanInCart>0</SpanInCart>
                )}
              </DivInCart>
              <AiOutlineShoppingCart size={21} />
            </Anchor>
          </ListCart>
        </UnList>
      </HeaderContainer>
    </React.Fragment>
  );
}
