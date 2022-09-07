import styled from "styled-components";

export const AreaSocial = styled.div`
  max-width: 1440px;
  width: 100%;
  background: var(--background-footer);
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid var(--line-division);

  @media only screen and (min-width: 200px) and (max-width: 370px) {
   justify-content: space-around;
  }
`;

export const Nav = styled.nav`
    
 `;

export const UnListSocial = styled.ul`
    
  display: flex;
  justify-content: space-between;
  width: 60px;

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
 
  height: 24px;
  width: 24px;
 `;


export const NavPayment = styled.nav`
 `;

export const UnListPayment = styled.ul`
  
  display: flex;
  justify-content: space-between;
    
  @media only screen and (min-width: 200px) and (max-width: 370px) {
   flex-direction: column; 
    
  }
`;

export const ListPayment = styled.li`
`;

export const ImgPayment = styled.img`
    
  height: 40px;
  width: 40px;
 
 `;

