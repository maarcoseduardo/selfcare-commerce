import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    padding: 15px 70px;
    margin: 0 auto;
    
    @media screen and (min-width: 200px) and (max-width: 1080px) {
       display: block;
    }
`;

export const ContainerCart = styled.div`
    display:block;
`;

export const H2 = styled.h2`
    margin-bottom: 10px;
    font-size: 2rem;
`;

export const Tr = styled.tr`
`;

export const ContainerBuy = styled.div`
    padding: 15px;
    box-shadow: 1px 1px 10px var(--other-text-green);
`;

export const H3Buy = styled.h3`
    padding-bottom: 10px;
    border-bottom: 1px solid var(--line-division);
`;

export const TableBuy = styled.table`
    width: 100%;
    height:300px;
    border-collapse: collapse;
`;

export const TbodyBuy = styled.tbody`

`;

export const TdBuy = styled.td`
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid var(--line-division);

    @media screen and (min-width: 200px) and (max-width: 550px) {
       padding: 0;
    }
`;
export const SpanSend = styled.span`

`;

export const SpanBuy = styled.span`
   font-weight: bold;
`;

export const Input = styled.input`
    width: 90px;
    height: 30px;
    margin: 0 10px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 5px 20px;
    background: var(--other-text-green);
    font-size: 1rem;
    font-weight: bold;
`;

export const TrButton = styled.tr`
    width: 100%;
    padding: 10px 0;
`;

export const TdBuyButton = styled.td`
    width: 100%;
`;