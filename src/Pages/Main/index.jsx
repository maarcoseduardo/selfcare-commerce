import React from "react";
import { Product } from "../../components/Product";

import {
  DivContainerPromo,
  DivPromo,
  H2,
  Span,
  ContainerMain,
  ContainerProducts
} from "./styles";

export function Main() {

  return (
    <React.Fragment>
      <DivContainerPromo>
        <DivPromo>
          <H2>Promoção</H2>
          <Span>9 produtos</Span>
        </DivPromo>
      </DivContainerPromo>
      <ContainerMain>
        <ContainerProducts>
          <Product />
        </ContainerProducts>
      </ContainerMain>
    </React.Fragment>
  );
}
