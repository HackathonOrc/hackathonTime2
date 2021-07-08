import styled from "styled-components";

export const Page = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--dark-background);
    height: 100vh;
`;

export const CardContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--dark-background);
    width: 100%;
    height: 100%;
`;

export const Separator = styled.div`
    background: var(--detail-green);
    width: 1px;
    height: 96%;
`;