import styled from "styled-components";

export const Container = styled.div`
    max-width: 325px;
    width: 100%;
    height: 405px;
    padding: 15px;
    box-shadow: 1px 1px 10px var(--other-text-green);

    @media screen and (min-width: 200px) and (max-width: 1080px) {
        max-width: 940px;
    }
`;

export const H3 = styled.h3`
    padding-bottom: 10px;
    border-bottom: 1px solid var(--line-division);
`;

export const Table = styled.table`
    width: 100%;
    height:300px;
    border-collapse: collapse;
`;

export const Tbody = styled.tbody`

`;
export const Tr = styled.tr`
`;

export const Td = styled.td`
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid var(--line-division);

    @media screen and (min-width: 200px) and (max-width: 550px) {
       padding: 0;
    }
`;
export const SpanSend = styled.span`
`;

export const Span = styled.span`
   font-weight: bold;
`;

export const Input = styled.input`
    max-width: 90px;
    width: 100%;
    height: 30px;
    margin: 0 10px;
`;

export const Button = styled.button`
    width: 100%;
    height: 25px;
    margin-top: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background: var(--other-text-green);
`;
