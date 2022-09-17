import styled from "styled-components";

export const DivContainerPromo = styled.div`
 border-bottom: 1px solid var(--line-division);
`;

export const DivPromo = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 1440px;
 width: 100%;
 height: 60px;
 margin: 0 auto;
 padding: 15px 70px;

 @media screen and (min-width: 200px) and (max-width: 500px) {
  padding: 15px 30px;
 }
`;

export const H2 = styled.h2`
  @media screen and (min-width: 200px) and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span`
`;

export const ContainerMain = styled.section`
 max-width: 1440px;
 width: 100%;
 margin: 0 auto;
`;

export const ContainerProducts = styled.div`
`;