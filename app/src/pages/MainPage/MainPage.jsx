import React from 'react';
import { Page, CardContent, Separator } from "./MainStyled";
import Sidebar from '../../components/sidebar/sidebar';



function MainPage() {
    return (
        <Page>
            <Sidebar />
            <Separator></Separator>
            <CardContent>
                <div className="card">
                    card do balacobaco
                </div>
            </CardContent>
        </Page>
    )
}

export default MainPage;
