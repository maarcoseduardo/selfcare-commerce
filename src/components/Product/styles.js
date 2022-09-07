import styled from "styled-components";
import { Link } from "react-router-dom";

export const Unlist = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (min-width: 830px) and (max-width: 1185px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 200px) and (max-width: 830px){
    display: block;
  }
`;

export const ListContainerCard = styled.li`
    max-width: 350px;
    width:100%;
    max-height: 430px;
    margin: 0 auto;

    &:hover{
        box-shadow: 1px 1px  10px var(--other-text-green);
    }    
`;

export const ContainerBreathe = styled.div`
    padding: 20px;
    text-align: center;
    width: 100%;
`;

export const Anchor = styled(Link)`
`;

export const Img = styled.img`
    max-width: 250px;
    width: 100%;
    height: 250px;
`;

export const DivName = styled.div`
`;

export const Paragraph = styled.p`
`;

export const H4 = styled.h4`
`;

export const Span = styled.span`
`;

export const DivPrices = styled.div`
`;

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 250px;
    width: 100%;
    height: 45px;
    margin: 10px auto 0 auto;
`;

export const AnchorButtons = styled(Link)`
    background: var(--other-text-green);
    color: #FFF;
    border-radius: 3px;
    text-decoration: none;
`;

export const Button = styled.button`
    background: #000;
    color: #FFF;
    border-radius: 3px;

    cursor: pointer;
`;