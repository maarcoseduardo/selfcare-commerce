import React from 'react';
import imgStar from '../../assets/Images/Star.svg';
import imgUser from '../../assets/Images/User.svg';
import imgCart from '../../assets/Images/Cart.svg';
import imgMagnifyingGlass from '../../assets/Images/MagnifyingGlass.svg';
import {
  HeaderContainer,
  HeaderTop,
  DivLogo,
  Nav,
  ImgLogo,
  SpanLogo,
  UnList,
  List,
  Anchor,
  ImgList
}
  from './styles';

export function Header() {

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderTop>
          <DivLogo>
            <ImgLogo
              src={imgStar}
              alt="Star"
            />
            <SpanLogo><Anchor to="/">selfcare</Anchor></SpanLogo>
          </DivLogo>
          <Nav>
            <UnList>
              <List className="filter-green">
                <ImgList src={imgMagnifyingGlass} alt="Magnifying Glass" />
              </List>
              <List
                className="filter-green">
                <Anchor to="/login">
                  <ImgList src={imgUser} alt="User Login" />
                </Anchor>
              </List>
              <List
                className="filter-green">
                <Anchor to="/cart">
                  <ImgList src={imgCart} alt="Cart Shop" />
                </Anchor>
              </List>
            </UnList>
          </Nav>
        </HeaderTop>
      </HeaderContainer>
    </React.Fragment>
  );
}