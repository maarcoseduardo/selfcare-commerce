import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.header`
  display: fixed;
`;

export const HeaderTop = styled.div`
  height: 50px;
  max-width: 1440px;
  width: 100%;

  background: var(--background-page);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 70px;
`;

export const DivLogo = styled.div`
  max-width: 85px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  filter: invert(49%) sepia(59%) saturate(568%) hue-rotate(50deg)
    brightness(102%) contrast(91%);

  &:hover {
    filter: brightness(80%)
  }
`;

export const Nav = styled.nav`
  max-width: 100px;
  width: 100%;
`;

export const ImgLogo = styled.img`
  margin-top: 2px;
`;

export const SpanLogo = styled.span``;

export const UnList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.li`
  filter: invert(49%) sepia(59%) saturate(568%) hue-rotate(50deg)
    brightness(102%) contrast(91%);
`;

export const Anchor = styled(Link)`
  text-decoration: none;
`;

export const ImgList = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 5px;
`;
