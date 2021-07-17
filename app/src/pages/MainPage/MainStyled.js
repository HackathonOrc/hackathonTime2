import styled from "styled-components/macro";


export const Page = styled.section`
    display: flex;
    flex-direction: row;
    background:${props => props.theme.colors.background} ;

    @media(max-width: 845px) {
    flex-direction: column; 
    width: 100%;
    }
`;

//#region sidebar

export const Sidebar = styled.section`

    display: flex;
    flex-direction: column;

    position: sticky;
    top: 0;

    background:${props => props.theme.colors.background};

    width: 30rem;
    height: 100vh;

    @media(max-width: 845px) {
    flex-direction: row; 
    height: fit-content;
    width: 97vw;
    padding: 1rem 0;

    position: sticky;
    top: -1px;
    }

    @media(max-width: 281px) {
        width: 100%;
        padding: .5rem 0;
    } 
`;

export const Separator = styled.div`
    background:${props => props.theme.colors.separetor} ;

    width: 2px;
    height: 100vh;
    margin: 0 2rem;

    position: sticky;
    top: 0;

    @media(max-width: 845px) {
        width: 94%;
        height: 2px;

        position: sticky;
        top: 90px;

    }

    @media(max-width: 281px) {
        width: 90%;
        top: 80px;
        margin: 0 1rem;

    }
`;

export const ProfileData = styled.div`

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

    @media(max-width: 845px) {
    margin-top: 0;
        .Name{
            margin: 1rem 1rem;
            font-size: 2.2rem;
        }
    }

    @media(max-width: 281px) {
        margin-left: 0.5rem;
        margin-top: 0.8rem;

        .Name{
            font-size: 1.2rem;
        }
        .userName{
            font-size: 1rem;
        }
    }
`;

//#endregion

//#region cards

export const CardsSection = styled.section`
    
    margin-left: 12rem;
    margin-top: 8rem;
    width: 100%;
    height: 100%;

    @media(max-width: 900px) {
        margin-left: 6rem;
    };

    @media(max-width: 845px) {
    margin-left: 4rem;
    width: 95%;

    justify-content: center;
    align-content: center;

    }

    @media(max-width: 800px) {
        margin-left: 3rem;
    };

    @media(max-width: 281px) {
        margin-top: 4rem;
        margin-left: 2rem;
        width: fit-content;
    };

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
    margin-bottom: 6rem;
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

        cursor: pointer;

    }

    @media(max-width: 845px) {
        max-width: 100%;
        min-height: 156px;

        .userName{
            margin-left: 2rem;
        }
    }

    @media(max-width: 281px) {

        .userName{
            margin-left: 1.5rem;
            font-size: 1.8rem;
        }
        .newPost{
            margin-left: 1.8rem;
            font-size: 1.5rem;
        }

        .Post{
            font-size: 1.5rem;
        }

        margin-bottom: 3rem;
    }

`;

// export const PostCard = styled.div`
//     background: ${props => props.theme.colors.card};
//     border-width: 1.5px;
//     border-style: solid;
//     border-color: ${props => props.theme.colors.detail};
//     border-radius: 10px;
//     min-height: 193px;
//     max-width: 673px;
//     height: fit-content;
//     width: 90%;
//     margin-bottom: 6rem;


//     .userName{
//         color: ${props => props.theme.colors.title};
//         margin-left: 8rem;
//         margin-top: 1.2rem;
//         font-size: 3rem;

//     }
//     .content{
//         color:${props => props.theme.colors.text};
//         margin-left: 8rem;
//         margin-top: 1rem;
//         margin-bottom: 1rem;

//         font-weight: 400;
//         font-size: 2rem;

//     }

//     @media(max-width: 845px) {
//         max-width: 100%;
        
//         .userName, .content{
//             margin-left: 2rem;
//         }
//     }

//     @media(max-width: 281px) {
//         max-width: 100%;
//         margin-bottom: 3rem;

//         .userName{
//             font-size: 1.8rem;
//         }

//         .content{
//             font-size: 1.5rem;
//             margin-right: .5rem;
//         }

//         .userName, .content{
//             margin-left: 1.5rem;
//         }
//     }

// `;

//#endregion

export const Logo = styled.img`

    align-self: flex-start;
    position: sticky;
    top:0;
    margin-right: 4rem;
    padding-top: 2rem;

    @media(max-width: 845px) {
        position: absolute;
        top: -2rem;
        width: 0px;
        margin-right:0px;
        padding-top: 0px;
    }

`;

export const Image = styled.img`
    margin: 0 1rem;
`;

//#region Button

export const ButtonContainer = styled.div`

    display: flex;
    margin-top: auto;

    @media(max-width: 845px) {
        margin-top: 0;
        margin-left: auto;
    }
    
`;

export const ButtonOutlined = styled.button`
    width: min(10rem, 70%);
    height: 3rem;
    background: none;
    border: none;

    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${props => props.theme.colors.buttonText};

    white-space: nowrap;
    text-align: center;

    cursor: pointer;

    margin: 2rem 2rem;

    display: flex;
    align-items: center;
    
    @media(max-width: 845px) {
        font-size: 1.5rem;
        margin: 2rem 1.5rem;
    
    }

    @media(max-width: 281px) {
        margin: 2rem 0.5rem;

        .button-text{
            display: none;
        }
    }

`;

//#endregion
