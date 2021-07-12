import styled from "styled-components";

export const Page = styled.section`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    background: var(--dark-background);
    /* height: 100vh; */
    
`;
//#region sidebar

export const Sidebar = styled.section`

    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    position: fixed;
    background: var(--dark-background);
    width: 30rem;
    height: 100%;
`;

export const Separator = styled.div`
    background: var(--detail-green);
    width: 2px;
    height: 95vh;
    margin-left: 30rem;
    margin-top: 2rem;
    position: fixed;

    /* margin-right: 2rem; */
`;


export const ProfileData = styled.div`

    /* justify-content: flex-start; */
    /* margin-top: 10em; */
    margin-right: 0px;
    margin-left: 3em;
    margin-top: 8rem;


    .Name, .userName{
        color: var(--white);
    }
    .Name{
        font-size: 3rem;
        margin-bottom: 0.7em;
    }
    .userName{
        font-size: 1.5rem;
        margin-left: 0.7rem;

    }
    

`;

//#endregion

//#region cards

export const CardsSection = styled.section`
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */
    /* background: var(--black); */
    margin-left: 34em;
    margin-top: 10em;
    width: 100%;
    height: 100%;
`;

export const CreatePostCard = styled.div`
    background: #082115;
    border-width: 1.5px;
    border-style: solid;
    border-color: var(--detail-green);
    border-radius: 10px;
    height: 193px;
    width: 673px;
    margin-bottom: 6rem ;
    .userName{
        color: var(--white);
        margin-left: 8rem;
        margin-top: 1.2rem;
        font-size: 3rem;

    }

`;

export const PostCard = styled.div`
background: #082115;
    border-width: 1.5px;
    border-style: solid;
    border-color: var(--detail-green);
    border-radius: 10px;
    height: 193px;
    width: 673px;
    margin-bottom: 6rem ;

    .userName{
        color: var(--white);
        margin-left: 8rem;
        margin-top: 1.2rem;
        font-size: 3rem;

    }

`;

//#endregion

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

