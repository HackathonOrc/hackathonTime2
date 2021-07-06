import styled from "styled-components";

export const Page = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--background);
    min-width: 100vw;
    min-height: 100vh;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: var(--white);
    width: 50vw;
    height: 83.4vh;
    border-radius: 1em;
    box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 1em;
    padding-bottom: 1em;
`;

export const TextInput = styled.input`
    width: 25vw;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: 700;
    color: rgba(161, 161, 161);
    border-bottom: 2px solid rgba(161, 161, 161);  
    outline: none;  

    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgba(161, 161, 161);
    }
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 3em;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
`;

export const Button = styled.button`
    width: 18vw;
    height: 8vh;
    background: none;
    border: 2px solid var(--green);
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: #6AE01A;
    cursor: pointer;

`;

export const Link = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    color: var(--green);
    text-decoration: underline;
`;