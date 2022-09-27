import styled from "styled-components";
import { Link } from "react-router-dom";

export const Unlist = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 3rem 0;

  @media only screen and (min-width: 830px) and (max-width: 1185px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 3rem 0;
  }

  @media only screen and (min-width: 200px) and (max-width: 830px){
    display: block;
  }
`;

export const List = styled.li`
  max-width: 350px;
  width:100%;
  height: 430px;
  padding-top: 10px;
  margin: 25px auto;
  text-align: center;

  &:hover{
    box-shadow: 1px 1px 15px var(--other-text-green);
  }    
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
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

export const DivPrices = styled.div`
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  width: 100%;
  height: 70px;
  margin: 10px auto 0 auto;
`;
export const Span = styled.span`
  margin:0 10px;
`;
export const SpanSeeMore = styled.span`
  margin:0 18px;
`;

export const AnchorButtons = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: var(--other-text-green);
  color: #FFF;
  border-radius: 3px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
    transition: 0.2s;
  } 
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  background: #000;
  color: #FFF;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
    transition: 0.2s;
  } 
`;

export const ButtonCheck = styled.button`
  width: 100%;
  height: 30px;
  background: #000;
  color: #FFF;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: bold;
  cursor: not-allowed;

  &:hover {
    filter: brightness(80%);
    transition: 0.2s;
  } 
`;