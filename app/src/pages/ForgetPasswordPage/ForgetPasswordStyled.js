import styled from "styled-components";

export const Page = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #70E864;
    min-width: 100vw;
    min-height: 100vh;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #FFFFFF;
    width: 60vw;
    height: 83.4vh;
    border-radius: .75em;
    box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 1em;
`;

export const TextInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 1.55em;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);

    &:placeholder{
        font-weight: 700;
        color: rgba(0, 0, 0, 0.37);
    }
`;