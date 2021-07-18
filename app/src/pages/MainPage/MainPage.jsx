import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components'
import { UserContext } from '../../context/userContext';
import { useHistory } from "react-router-dom";

import usePersistedState from '../../utils/usePersistedState'
import api from '../../services/api'

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'
import { Logo, Page, CardsSection, Separator, Sidebar, ButtonContainer, ButtonOutlined, ProfileData, CreatePostCard, Image } from "./MainStyled";
import PostCard from '../../components/postCard/postCard.jsx'
import exitIcon from '../../assets/exitIcon.svg';


function MainPage() {

    const [theme, setTheme] = usePersistedState('theme', light);
    const { user, logout, recoverUser } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const history = useHistory();


    useEffect(() => {

        if (!user)
            recoverUser()
        

        // eslint-disable-next-line 
    }, [user])

    useEffect(() => {
        if (user)
            getPosts();

        // eslint-disable-next-line 
    }, [postPost])

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }


    async function getPosts() {
        try {
            const res = await api.get('/post/all');
            setPosts(res.data.posts);
            // console.log(res.data.posts);
        } catch (error) { }
    }

    async function postPost() {
        try {
            await api.post('/post/create', {
                userName: user.userName,
                content: document.getElementById('new_post').value,
            });

            document.getElementById('new_post').value = '';
        } catch (error) { }

    }
    if (!user && !localStorage.getItem("user"))
        return (
            <>
            {history.push('/login')}
            </>)


    return (

        <ThemeProvider theme={theme}>
            <Page>
                <Sidebar>
                    <ProfileData>
                        <h3 className='Name'>{user && user.name}</h3>

                        <h4 className='userName'>@{user && user.userName}</h4>
                    </ProfileData>
                    <ButtonContainer>
                        <ButtonOutlined onClick={toggleTheme}>
                            <Image src={theme.mode.icon} alt="Modo escuro" />
                            <span className="button-text">
                                {theme.mode.text}
                            </span>
                        </ButtonOutlined>

                        <ButtonOutlined onClick={() => { logout() }}>
                            <Image src={exitIcon} alt="Sair" />
                            <span className="button-text">
                                Sair
                            </span>

                        </ButtonOutlined>
                    </ButtonContainer>

                </Sidebar>
                <Separator />
                <CardsSection>
                    <CreatePostCard>
                        <h3 className="userName">{user && user.userName}</h3>
                        <input className='newPost' type="text" id="new_post" placeholder="Escreva aqui..." />
                        <button className="Post" onClick={postPost}>POSTAR</button>
                    </CreatePostCard>

                    {posts && posts.map((post) => {
                        return (<PostCard key={post._id} post={post} theme={theme} />)
                    })
                    }

                </CardsSection>

                <Logo src={theme.logo} />
            </Page>
        </ThemeProvider>
    )

}

export default MainPage;
