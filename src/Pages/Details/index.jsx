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
  Span,
  Paragraph,
  HR,
  DivButton,
  Button,
  ButtonCheck
} from "./styles";

export function Details() {
  const { card } = useCard();
  const { productInCart, setProductInCart, setTotal, setSubTotal } = useCart();
  const { identificationPage } = useParams();
  const tempCard = [...card] 

  function AddItemCart(idItem) {
    const cardFiltered = tempCard.find((product) => product.id===idItem);

    if(cardFiltered){
      cardFiltered.inCart = true;
      cardFiltered.isLoading = true;
    }

    const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart")) || [];
    sessionStorage.setItem("IdItemCart", JSON.stringify([...ItemsInCart, cardFiltered]));
    
    setProductInCart([...productInCart, cardFiltered])

    const selectedCard = tempCard.filter((value) => value.inCart ? value.total : '')
    const selectedCardTotalValue = selectedCard.map( product => product.total)
    let sumProductReduce = selectedCardTotalValue.reduce(function(sum, count){
      return sum + count
    })

    setTotal(sumProductReduce)
    setSubTotal(sumProductReduce)
  }

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
                <SpanOld>De R${product.oldPrice} por</SpanOld>
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