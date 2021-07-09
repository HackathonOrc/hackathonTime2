import React from 'react';
import { Page, CardContent, Separator, Sidebar, ButtonOutlined, ProfileData, ButtonText } from "./MainStyled";
import exitIcon from '../../assets/exitIcon.svg';
import nightMode from '../../assets/night-mode.svg';

function MainPage() {
    return (
        <Page>
            <Sidebar>
                <ProfileData>
                    <h3 className='Name'> JongaMatos </h3>

                    <h4 className='userName'>jonga@jonga.com</h4>
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
            <CardContent>
                <div className="card">
                    card do balacobaco
                </div>
            </CardContent>
        </Page>
    )
}

export default MainPage;
