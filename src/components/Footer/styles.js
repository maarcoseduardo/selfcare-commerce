import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 70px;
`;

export const AreaFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media only screen and (min-width: 200px) and (max-width: 830px) {
    display: block;
    text-align: center;
    width: 100%;
    height: 230px;
  }
`;

export const UnList = styled.ul``;

export const List = styled.li`
  font-weight: bold;

  & {
    margin-top: 10px;
  }
`;

export const DivNewsLatter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  height: 100px;

  @media only screen and (min-width: 200px) and (max-width: 830px) {
    margin: 10px auto 0 auto;
    height: 70px;
  }
`;

export const Paragraph = styled.p`
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Div = styled.div`
 
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;

  padding: 0 0 0 10px;

  border: 1px solid var(--line-division);
  border-radius: 5px 0 0 5px;
`;

export const Button = styled.button`
  width: 30%;
  height: 40px;
  color: white;
  font-weight: bold;
  background: var(--other-text-green);
  border: none;
  border-radius: 0 5px 5px 0;
`;