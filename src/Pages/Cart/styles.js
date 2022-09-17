import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  padding: 15px 50px;
  margin: 50px auto;
  gap: 40px;  
  
  @media screen and (min-width: 200px) and (max-width: 1080px) {
    flex-direction: column;
    padding: 15px 30px;
  }
`;

export const ContainerCart = styled.div`
  display: block;
`;