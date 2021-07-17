import styled from "styled-components";

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--black);
    align-self: center;

    @media(max-width: 700px) {
        font-size: 1.2em;
    }
`;