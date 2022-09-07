import styled from "styled-components";


export const Container = styled.div`
  max-width: 730px;
  width: 100%;

  @media screen and (min-width: 1080px) and (max-width: 1250px) {
    max-width: 600px;
  }
  @media screen and (min-width: 550px) and (max-width: 1080px) {
    max-width: 1080px;
  }
`;

export const Table = styled.table`
  width: 100%;
  @media screen and (min-width: 200px) and (max-width: 550px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Thead = styled.thead`
`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
@media screen and (min-width: 200px) and (max-width: 550px) {
    display: flex;
    height: 80px;
    width: 120px;
    align-items: center;
  }
`;

export const ThProduto = styled.th`
  width: 300px;
  @media screen and (min-width: 200px) and (max-width: 550px) {
    display: flex;
    height: 80px;
    width: 120px;
    align-items: center;
  }
`;

export const DivProduto = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    width: 100%; 
    align-items: center;
`;

export const Tbody = styled.tbody`
`;

export const Td = styled.td`
text-align: center;
padding: 5px 0;
@media screen and (min-width: 200px) and (max-width: 550px) {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
  }
`;

export const TdProduto = styled.td`
@media screen and (min-width: 200px) and (max-width: 550px) {
    display: flex;
    height: 80px;
    align-items: center;
  }
`;

export const TdGrid = styled.td`
text-align: center;
padding: 5px 0;
  @media screen and (min-width: 200px) and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    height: 80px;
    align-items: center;
    justify-content: center;
  }
`;

export const H4 = styled.h4`
    max-width:300px;
`;

export const Img = styled.img`
  width: 75px;
  height: 75px;
    
  @media screen and (min-width: 200px) and (max-width: 550px) {
      width: 50px;
      height: 50px;
    }
`;

export const DivGrid = styled.div`
    display: grid;
    max-width: 130px;
    width: 100%;
    height: 30px;
    margin: 0 auto;
    /* margin-bottom: 5px; */
    grid-template-columns: 40px 40px 40px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
`;

export const SpanGrid = styled.span`
`;

// // Custom Buy Menu
export const ButtonAddRemove = styled.button`
    max-width: 65px;
    width: 100%;
    background: none;
    border: none;
    color: green;
    font-size:16px;
    font-weight: bold;
    cursor: pointer;
`;