import React from 'react';
import { Logo, Page, CardsSection, Separator, Sidebar, ButtonOutlined, ProfileData, ButtonText, PostCard, CreatePostCard } from "./MainStyled";
import exitIcon from '../../assets/exitIcon.svg';
import nightMode from '../../assets/night-mode.svg';
import logo from '../../assets/logo.svg'

function MainPage() {
    return (
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
                <ButtonOutlined>
                    <img src={nightMode} alt="Modo escuro" />
                    <ButtonText>Light mode</ButtonText>
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

            <Logo src={logo} />
        </Page>
    )
}

export default MainPage;
