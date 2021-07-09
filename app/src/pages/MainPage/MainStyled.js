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
    background: var(--black);
    width: 100%;
    height: 100%;
`;

export const Separator = styled.div`
    background: var(--detail-green);
    width: 2px;
    height: 96%;
`;

export const Sidebar = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--dark-background);
    width: 18%;
    height: 100%;
`;

export const ButtonOutlined = styled.button`
    width: min(10rem, 70%);
    height: 3rem;
    background: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: var(--white);
    cursor: pointer;

    margin: 2rem 1rem;

    display:flex;
    align-items: center;
    
    @media(max-width: 800px) {
        width: 35vw;
    }
`;

export const ButtonText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--white);
    margin: 0 1rem;
`;


export const ProfileData = styled.div`
justify-content: flex-start;
margin-top: 12rem;
.Name, .userName{
        color: var(--white);
    }
    .Name{
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    

`;