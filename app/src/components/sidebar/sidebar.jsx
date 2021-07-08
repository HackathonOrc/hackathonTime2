import React from 'react';
import exitIcon from '../../assets/exit-icon.svg';
import { Page, Button } from "./SidebarStyled";


function Sidebar() {
    return (<>
        <Page>
            <div className='profileData'>
                <h3 className='userName'> JongaMatos </h3>
                <h4 className='email'>jonga@jonga.com</h4>
            </div>
            <div className='Buttons'>
                <Button>
                    <img src={exitIcon} alt="Sair" />
                    Sair
                </Button>
            </div>
        </Page>
    </>
    )
}

export default Sidebar;
