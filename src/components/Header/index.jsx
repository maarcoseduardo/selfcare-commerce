import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiFillStar,
} from "react-icons/ai";
import {
  HeaderContainer,
  DivContent,
  AnchorLogo,
  H1,
  Unlist,
  List,
  ListCart,
  DivInCart,
  SpanInCart,
  Anchor,
} from "./styles";
import { useCart } from "../../Context/CartContext";

export function Header({ scroll }) {
  const { productInCart } = useCart();
  return (
    <>
      <HeaderContainer scroll={scroll}>
        <DivContent>
          <AnchorLogo to="/" scroll={scroll}>
            {scroll ? (
              <AiFillStar size={23} color="green" />
            ) :(
              <AiFillStar size={23} color="#5CA720" />
            )}
            <H1>selfcare</H1>
          </AnchorLogo>
          <Unlist>
            <List>
              {scroll ? (
                <AiOutlineSearch size={23} color="green" />
              ) : (
                <AiOutlineSearch size={23} color="#5CA720" />
              )}
            </List>
            <List>
              <Anchor to="/login" scroll={scroll}>
                <AiOutlineUser size={23} />
              </Anchor>
            </List>
            <ListCart>
              <Anchor to="/cart" scroll={scroll}>
                <DivInCart scroll={scroll}>
                  {productInCart ? (
                    <SpanInCart>{productInCart.length}</SpanInCart>
                  ) : (
                    <SpanInCart>0</SpanInCart>
                  )}
                </DivInCart>
                <AiOutlineShoppingCart size={23} />
              </Anchor>
            </ListCart>
          </Unlist>
        </DivContent>
      </HeaderContainer>
    </>
  );
}
