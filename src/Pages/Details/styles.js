import styled from "styled-components";

export const DivContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    padding: 15px 70px;
    margin: 0 auto;  

    @media screen and (min-width: 200px) and (max-width: 500px) {
        padding: 15px 30px;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    
    @media only screen and (min-width: 200px) and (max-width: 830px) {
      flex-direction: column;
      align-items: center;
    }
`;

export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width: 100%;
`;

export const Img = styled.img`
    width: 350px;
    max-width: 100%;
    padding: 20px;
    border: 1px solid var(--other-text-green);
`;

export const Article = styled.article`
    max-width: 750px;
    width: 100%;
    padding: 20px;
`;

export const Div = styled.div`
`;

export const H1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 30px;
    @media screen and (min-width: 200px) and (max-width: 1080px) {
        font-size: 2rem;
    }
`;

export const SpanOld = styled.span`
    display: block;
    margin-bottom: 15px;
`;

export const Span = styled.span`
    display: block;
    margin-bottom: 15px;
    font-size: 1.5em;
    font-weight: bold;
`;

export const HR = styled.hr`
    margin: 30px 0;
`;
export const Paragraph = styled.p`
    font-size: 1rem;
    margin-bottom: 15px;
`;

export const DivButton = styled.div`
    display: flex;
    justify-content: center;
`;
export const Button = styled.button`
    max-width: 550px;
    width: 100%;
    padding: 10px 0;
    color: #FFF;
    background: var(--other-text-green);
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
      transition: 0.2s;
    }
    
    @media screen and (min-width: 200px) and (max-width: 1080px) {
      font-size: 1rem;
    }
`;

export const ButtonCheck = styled.button`
     max-width: 550px;
    width: 100%;
    padding: 10px 0;
    color: #FFF;
    background: var(--other-text-green);
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: not-allowed;

    &:hover {
      filter: brightness(80%);
      transition: 0.2s;
    } 

`;