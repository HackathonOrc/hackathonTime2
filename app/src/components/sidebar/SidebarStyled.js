import styled from "styled-components";

export const Page = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--dark-background);
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    width: min(34rem, 70%);
    height: 5rem;
    background: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: var(--white);
    cursor: pointer;
    margin-top: 1rem;

    display:flex;
    
    @media(max-width: 800px) {
        width: 35vw;
    }
`;
