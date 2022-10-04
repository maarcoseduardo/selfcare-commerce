import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  background: white;
  width: 100%;
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 72px;
  margin: 0 auto;
  padding: 0 70px;

  @media screen and (min-width: 200px) and (max-width: 830px) {
    padding: 0 30px;
  }
`;

export const AnchorLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 90px;
  width: 100%;
  text-decoration: none;
  color: var(--other-text-green);
`;

export const H1 = styled.h1`
  font-size: 1.1rem;
`;

export const Unlist = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80px;
  width: 100%;
`;

export const List = styled.li`
`;

export const ListCart = styled.li`
  position: relative;
`;

export const DivInCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 25px;
    height: 25px;
    top: -17px;
    right: -11px;
    color: white;
    border-radius: 50%;
    background: var(--other-text-green);
`;

export const SpanInCart = styled.span`

`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--other-text-green);
`;