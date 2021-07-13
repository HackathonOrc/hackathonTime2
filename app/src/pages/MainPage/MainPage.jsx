import React from 'react';
import { ThemeProvider } from 'styled-components'

import usePersistedState from '../../utils/usePersistedState'

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'


import { Logo, Page, CardsSection, Separator, Sidebar, ButtonOutlined, ProfileData, ButtonText, PostCard, CreatePostCard } from "./MainStyled";

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
                    <ButtonOutlined>
                        <img src={exitIcon} alt="Sair" />
                        <ButtonText>Sair</ButtonText>
                    </ButtonOutlined>
                    <ButtonOutlined onClick={toggleTheme}>
                        <img src={theme.mode.icon} alt="Modo escuro" />
                        <ButtonText>{theme.mode.text}</ButtonText>
                    </ButtonOutlined>
                </Sidebar>
                <Separator />
                <CardsSection>
                    <CreatePostCard>
                        <h3 className="userName">JongaMatos</h3>
                    </CreatePostCard>
                    <PostCard>
                        <h3 className="userName">M-Lee</h3>

                    </PostCard>
                    <PostCard>
                        <h3 className="userName">Batizta</h3>

                    </PostCard>
                    <PostCard>
                        <h3 className="userName">PMBalboa</h3>

                    </PostCard>
                    <PostCard>
                        <h3 className="userName">Neithan</h3>


                    </PostCard>
                    <PostCard>
                        <h3 className="userName">SemLena</h3>


                    </PostCard>
                </CardsSection>

                <Logo src={theme.logo} />
            </Page>
        </ThemeProvider>
    )
}

export default MainPage;
