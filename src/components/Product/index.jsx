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
  const { productInCart, setProductInCart, setTotal, setSubTotal } = useCart();

  function AddItemCart(idItem) {
    const tempCard = [...card] 
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
                  <Span><FiSearch /></Span>
                  <SpanSeeMore>VER MAIS</SpanSeeMore>
                </AnchorButtons>
                {product.inCart ? (
                <ButtonCheck disabled>
                <Span><FiCheck /></Span>
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
