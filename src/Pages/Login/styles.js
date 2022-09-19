import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Section = styled.section`
  margin:0 auto;
  max-width: 450px;
  width: 100%;
  height: 500px;
  border: none;
  background: #ADDE87;
  border-radius: 20px;
`;

export const Form = styled.form`
`;

export const Div = styled.div`
  padding: 1.5rem 0;
`;
export const H1 = styled.h1`
  text-align: center;
  color: var(--other-text-green);
  font-weight: bold;
`;

export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  padding: 30px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
`;

export const Input = styled.input`
  padding: 0 0 0 15px;
  height: 70px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  background: white;

  ::-webkit-input-placeholder {
    color: var(--other-text-green);
  }
`;

export const Button = styled.button`
  height: 70px;
  border-radius: 20px;
  color: var(--other-text-green);
  font-weight: bold;
  background: white;
  border: none;
  cursor: pointer;

  &:hover {
        filter: brightness(80%);
        transition: 0.2s;
    } 
`;

export const Anchor = styled.a`
  color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover{
    color: var(--other-text-green);
  }
`;