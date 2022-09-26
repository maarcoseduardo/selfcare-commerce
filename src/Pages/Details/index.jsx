import React from "react";
import { useParams } from "react-router-dom";
import { useCard } from "../../Context/CardContext";
import { useCart } from "../../Context/CartContext";
import { FiCheck } from "react-icons/fi";

import {
  DivContainer,
  Section,
  DivImg,
  Img,
  Article,
  H1,
  Div,
  SpanOld,
  Strong,
  Span,
  Paragraph,
  HR,
  DivButton,
  Button,
  ButtonCheck
} from "./styles";

export function Details() {
  const { card } = useCard();
  const { AddItemCart } = useCart();
  const { identificationPage } = useParams();

  return (
    <DivContainer>
      {card.map((product) =>
        product.id == identificationPage ? (
          <Section key={product.id}>
            <DivImg>
              <Img src={product.img} alt={product.name} />
            </DivImg>
            <Article>
              <H1>{product.name}</H1>
              <Div>
                <SpanOld>De <Strong>R${product.oldPrice}</Strong> por</SpanOld>
                <Span>R${product.price}</Span>
                <Paragraph>{product.desc}</Paragraph>
                <HR />
              </Div>
              <DivButton>
              {product.inCart ? (
                <ButtonCheck disabled>
                <FiCheck />
              </ButtonCheck>
              ) : (
                <Button onClick={() => AddItemCart(product.id)}>
                  Adicionar ao carrinho
                </Button>
              )}
              </DivButton>
            </Article>
          </Section>
        ) : (
          ""
        )
      )}
    </DivContainer>
  );
}