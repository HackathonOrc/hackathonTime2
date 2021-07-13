import styled from "styled-components/macro";

export const Page = styled.section`
    display: flex;
    flex-direction: row;
    background:${props => props.theme.colors.background} ;

    /* height: 100%; */
    /* @media(max-width: 800px) {
    flex-direction: column; 
    } */
`;

//#region sidebar

export const Sidebar = styled.section`

    display: flex;
    flex-direction: column;

    position: sticky;
    top:0;
    background:${props => props.theme.colors.background} ;
    width: 30rem;
    height: 100vh;
    /* @media(max-width: 800px) {
    flex-direction: row; 
    height: fit-content;
    width: 100vw;} */
`;

export const Separator = styled.div`
    background:${props => props.theme.colors.separetor} ;

    width: 2px;
    height: 100vh;
    margin: 0 2rem;

    position: sticky;
    top: 0;
    @media(max-width: 800px) {
        width: 100vw;
    height: 2px;
    }
`;

export const ProfileData = styled.div`

    /* justify-content: flex-start; */
    display: flex;
    flex-direction: column;
    margin-right: 0px;
    margin-left: 2rem;
    margin-top: 8rem;

    .Name{
        color: ${props => props.theme.colors.title};

        font-size: 3rem;
        margin-bottom: 0.7em;
    }
    .userName{
        color: ${props => props.theme.colors.text};
        font-size: 1.5rem;
        margin-left: 0.7rem;
    }

    @media(max-width: 800px) {
    margin-top: 0;

    }
`;

//#endregion

//#region cards

export const CardsSection = styled.section`
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-left: 12rem;
    margin-top: 8rem;
    width: 100%;
    height: 100%;
`;

export const CreatePostCard = styled.div`
    background: ${props => props.theme.colors.card};
    border-width: 1.5px;
    border-style: solid;
    border-color: ${props => props.theme.colors.detail};
    border-radius: 10px;
    min-height: 193px;
    max-width: 673px;
    height: fit-content;
    width: 90%;
    margin-bottom: 6rem ;
    display: flex;
    flex-direction: column;
    .userName{
        color: ${props => props.theme.colors.title};
        margin-left: 8rem;
        margin-top: 1.2rem;
        font-size: 3rem;

    }
    .newPost{
        margin-top: 1rem;
        margin-left: 8rem;

        background: transparent;
        border: none;
        outline: none;

        font-size: 2rem;
        color:${props => props.theme.colors.text}; 
    }
    .Post{
        background-color:${props => props.theme.colors.detail} ;
        color: ${props => props.theme.colors.text};
        
        padding: 1rem;
        width: fit-content;

        font-weight: 600;
        font-size: 2rem;
        margin-top: 3rem;

        margin-left: auto;
        margin-right: 2rem;

    }

`;

export const PostCard = styled.div`
    background: ${props => props.theme.colors.card};
    border-width: 1.5px;
    border-style: solid;
    border-color: ${props => props.theme.colors.detail};
    border-radius: 10px;
    min-height: 193px;
    max-width: 673px;
    height: fit-content;
    width: 90%;
    margin-bottom: 6rem;


    .userName{
        color: ${props => props.theme.colors.title};
        margin-left: 8rem;
        margin-top: 1.2rem;
        font-size: 3rem;

    }
    .content{
        color:${props => props.theme.colors.text};
        margin-left: 8rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        font-weight: 400;
        font-size: 2rem;

    }

`;

//#endregion

export const Logo = styled.img`

    align-self: flex-start;
    position: sticky;
    top:0;
    margin-right: 4rem;
    padding-top: 2rem;

`;

export const ButtonContainer = styled.div`

    display: flex;
    margin-top: auto;
    
`;

export const Buttons = styled.div`

    display: flex;
    justify-content: flex-end;
`;

export const ButtonOutlined = styled.button`
    width: min(10rem, 70%);
    height: 3rem;
    background: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: 400;
    color: ${props => props.theme.colors.buttonText};
    cursor: pointer;

    margin: 2rem 1rem;

    display: flex;
    align-items: center;
    
    @media(max-width: 800px) {
        width: 35vw;
    }
`;

export const ButtonText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${props => props.theme.colors.buttonText};
    margin: 0 1rem;
`;

