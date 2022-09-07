import React from "react";
import { useCard } from "../../Context/CardContext";
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
  DivPrices,
  DivButtons,
  AnchorButtons,
  Button,
} from "./styles";

export function Product() {
  const { card } = useCard();

  function AddItemCart(idItem) {
    const copyCard = [...card] 
    const cardFiltered = copyCard.find((product) => product.id===idItem);

    if(cardFiltered){
      cardFiltered.inCart = true;
    }

    const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart")) || [];
    sessionStorage.setItem("IdItemCart", JSON.stringify([...ItemsInCart, cardFiltered]));
  }

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
                <Paragraph>R$ {product.price}</Paragraph>
                <Span>{product.installments}</Span>
              </DivPrices>
              <DivButtons>
                <AnchorButtons to={`/Details/${product.id}`}>
                  VER MAIS
                </AnchorButtons>
                <Button onClick={() => AddItemCart(product.id)}>
                  ADICIONAR
                </Button>
              </DivButtons>
            </ContainerBreathe>
          </ListContainerCard>
        ))}
      </Unlist>
    </React.Fragment>
  );
}
