import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 1440px;
  width: 100%;
  background: var(--background-page);
  margin: 0 auto;
  padding: 15px 70px;

  @media screen and (min-width: 200px) and (max-width: 830px) {
    padding: 15px 30px;
  }
`;

export const DivLogo = styled.div`
  max-width: 85px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  filter: invert(49%) sepia(59%) saturate(568%) hue-rotate(50deg)
    brightness(102%) contrast(91%);

  &:hover {
    filter: brightness(80%)
  }
`;

export const SpanLogo = styled.span``;

export const UnList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100px;
  width: 100%;
`;

export const List = styled.li`

filter: invert(49%) sepia(59%) saturate(568%) hue-rotate(50deg)
    brightness(102%) contrast(91%);
`;
export const ListCart = styled.li`
`;
export const DivInCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 25px;
    height: 25px;
    top: -20px;
    right: -13px;
    color: white;
    border-radius: 50%;
    background: var(--other-text-green);
`;

export const SpanInCart = styled.span`
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  position: relative;
  color: var(--other-text-green);
`;

export const ImgList = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 5px;
`;
