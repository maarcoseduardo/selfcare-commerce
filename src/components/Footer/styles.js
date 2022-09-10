import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: var(--background-footer);
  padding: 15px 70px;
`;

export const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (min-width: 200px) and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Unlist = styled.ul`
  line-height: 2rem;
  font-weight: bold;
  @media only screen and (min-width: 200px) and (max-width: 830px) {
    text-align: center;
  }
`;

export const List = styled.li`
`;

export const SectionNewsLatter = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  gap: 1rem;
  height: 128px;

  @media only screen and (min-width: 200px) and (max-width: 830px) {
    align-items: center;
  }
`;

export const Title = styled.h4`
  font-weight: bold;
`;

export const Div = styled.div`
@media only screen and (min-width: 200px) and (max-width: 830px) {
  text-align: center;
}
`;

export const Input = styled.input`
  max-width: 200px;
  width: 100%;
  height: 40px;
  padding: 0 0 0 10px;
  border: 1px solid var(--line-division);
  border-radius: 5px 0 0 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  font-weight: bold;
  background: var(--other-text-green);
  border: none;
  border-radius: 0 5px 5px 0;

  @media only screen and (min-width: 200px) and (max-width: 830px) {
    margin-top: 10px;
    border-radius: 5px;
  }
`;