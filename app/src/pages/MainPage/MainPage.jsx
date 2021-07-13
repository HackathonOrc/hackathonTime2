import React from 'react';
import { ThemeProvider } from 'styled-components'

import usePersistedState from '../../utils/usePersistedState'

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'


import { Logo, Page, CardsSection, Separator, Sidebar, ButtonContainer, ButtonOutlined, ProfileData, ButtonText, PostCard, CreatePostCard } from "./MainStyled";

import exitIcon from '../../assets/exitIcon.svg';


function MainPage() {
    const [theme, setTheme] = usePersistedState('theme', light);
    // const theme = light;
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }
    return (
        <ThemeProvider theme={theme}>
            <Page>
                <Sidebar>
                    <ProfileData>
                        <h3 className='Name'> João Gabriel de Matos</h3>

                        <h4 className='userName'>@JongaMatos</h4>
                    </ProfileData>
                    <ButtonContainer>
                        <ButtonOutlined onClick={toggleTheme}>
                            <img src={theme.mode.icon} alt="Modo escuro" />
                            <ButtonText>{theme.mode.text}</ButtonText>
                        </ButtonOutlined>

                        <ButtonOutlined>
                            <img src={exitIcon} alt="Sair" />
                            <ButtonText>Sair</ButtonText>
                        </ButtonOutlined>
                    </ButtonContainer>

                </Sidebar>
                <Separator />
                <CardsSection>
                    <CreatePostCard>
                        <h3 className="userName">JongaMatos</h3>
                        <input className='newPost' type="text" placeholder="Escreva aqui..." />
                        <button className="Post">POSTAR</button>
                    </CreatePostCard>
                    <PostCard>
                        <h3 className="userName">M-Lee</h3>

                        <h4 className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consequat nibh. Morbi sed volutpat tellus. Curabitur interdum congue leo, in semper nibh scelerisque in. Phasellus id porttitor eros. Donec ac lorem vel sapien aliquet faucibus. Pellentesque ac urna tellus.
                        </h4>
                    </PostCard>
                    <PostCard>
                        <h3 className="userName">Batizta</h3>
                        <h4 className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consequat nibh. Morbi sed volutpat tellus. Curabitur interdum congue leo, in semper nibh scelerisque in. Phasellus id porttitor eros. Donec ac lorem vel sapien aliquet faucibus.                        </h4>
                    </PostCard>
                    <PostCard>
                        <h3 className="userName">PMBalboa</h3>
                        <h4 className="content">
                        Curabitur interdum congue leo, in semper nibh scelerisque in. Phasellus id porttitor eros. Donec ac lorem vel sapien aliquet faucibus. Pellentesque ac urna tellus.                        </h4>
                    </PostCard>
                    <PostCard>
                        <h3 className="userName">Neithan</h3>
                        <h4 className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consequat nibh. Morbi sed volutpat tellus. Curabitur interdum congue leo, in semper nibh scelerisque in. Phasellus id porttitor eros. Donec ac lorem vel sapien aliquet faucibus. Pellentesque ac urna tellus.
                        </h4>

                    </PostCard>
                    <PostCard>
                        <h3 className="userName">SemLena</h3>

                        <h4 className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consequat nibh. Morbi sed volutpat tellus. Curabitur interdum congue leo, in semper nibh scelerisque in. Phasellus id porttitor eros. Donec ac lorem vel sapien aliquet faucibus. Pellentesque ac urna tellus.
                        </h4>
                    </PostCard>
                </CardsSection>

                <Logo src={theme.logo} />
            </Page>
        </ThemeProvider>
    )
}

export default MainPage;
