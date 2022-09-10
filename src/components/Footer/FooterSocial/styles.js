import styled from "styled-components";

export const FooterSocialPayments = styled.div`
  width: 100%;
  background: var(--background-footer); 
`;

export const AreaSocial = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 15px 70px;
  margin: 0 auto;
`;

export const UnListSocial = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80px;
  width: 100%;

  @media only screen and (min-width: 200px) and (max-width: 370px) {
   flex-direction: column; 
  }
`;

export const ListSocial = styled.li`
  filter: invert(49%) 
  sepia(59%) 
  saturate(568%) 
  hue-rotate(50deg) 
  brightness(102%) 
  contrast(91%);
`;

export const ImgSocial = styled.img`
  height: 28px;
  width: 28px;
`;

export const UnListPayment = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
  width: 100%;
  align-items: center;

  @media only screen and (min-width: 200px) and (max-width: 400px) {
   flex-direction: column; 
  }
`;

export const ListPayment = styled.li`

`;

export const ImgPayment = styled.img`
  height: 38px;
  width: 38px;
`;