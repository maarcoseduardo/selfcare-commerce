import React from "react";
import { useCard } from "../../Context/CardContext";
import { useCart } from "../../Context/CartContext";
import { FiShoppingCart, FiSearch, FiCheck } from "react-icons/fi";
import {
  Unlist,
  ListContainerCard,
  ContainerBreathe,
  Anchor,
  Img,
  DivName,
  Paragraph,
  H4,
  Span,
  SpanSeeMore,
  DivPrices,
  DivButtons,
  AnchorButtons,
  Button,
  ButtonCheck
} from "./styles";

export function Product() {
  const { card } = useCard();
  const { AddItemCart } = useCart();

  return (
    <React.Fragment>
      <Unlist>
        {card.map((product) => (
          <ListContainerCard key={product.id}>
            <ContainerBreathe>
              <Anchor to={`/Details/${product.id}`}>
                <Img src={product.img} alt={product.name} />
              </Anchor>
              <DivName>
                <Paragraph>{product.category}</Paragraph>
                <H4>{product.name}</H4>
              </DivName>
              <DivPrices>
                <Paragraph>R$ {product.price} <span>ou</span></Paragraph>
                <Span>{product.installments}</Span>
              </DivPrices>
              <DivButtons>
                <AnchorButtons to={`/Details/${product.id}`}>
                  <Span>
                    <FiSearch />
                  </Span>
                  <SpanSeeMore>VER MAIS</SpanSeeMore>
                </AnchorButtons>
                {product.inCart ? (
                <ButtonCheck disabled>
                <Span>
                  <FiCheck />
                </Span>
               </ButtonCheck>
                ) : (
                <Button onClick={() => AddItemCart(product.id)}>
                 <Span><FiShoppingCart /></Span>
                 <Span>ADICIONAR</Span>
                </Button>
                )}
              </DivButtons>
            </ContainerBreathe>
          </ListContainerCard>
        ))}
      </Unlist>
    </React.Fragment>
  );
}
