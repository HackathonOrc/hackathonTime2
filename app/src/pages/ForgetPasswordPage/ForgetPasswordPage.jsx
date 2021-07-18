import React, { useEffect } from 'react'
import api from '../../services/api'
import { useHistory } from "react-router-dom";

import { Link } from "../../styles/Link";
import { Button } from "../../styles/Button";
import { Page } from "../../styles/Page";
import { Container } from "../../styles/Container";
import { TextInput } from "../../styles/TextInput";
import { Title } from "../../styles/Title";
import { Text } from "../../styles/Text";
import orc_jump from "../../assets/orc-pose-jump 1.png";

function ForgetPassword() {
    const history = useHistory();
    
    async function sendRecoveryEmail() {
        try {
            if (document.getElementById('email').value !== '') {
                await api.post('/user/forgot_password', { email: document.getElementById('email').value })
                window.alert("Email de recuperação enviado,verifique sua caixa de entrada.")
                history.push('/login');
            }
            else
                window.alert("Preencha o campo 'email'.");

        } catch (error) {
            // console.log(document.getElementById('email').value===);
            window.alert(error.response.data.message)

        }
    }


    return (
        <Page>
            <Container>
                <img alt="orcinho" src={orc_jump} width='20%' />
                <Title>Esqueceu a senha?</Title>
                <Text>Digite seu email para que possamos te ajudar!</Text>
                <TextInput type="text" placeholder="E-mail" id="email" id='email' />
                <Button onClick={sendRecoveryEmail}>
                    Pronto!
                </Button>
                <Link href="/login">Lembrei minha senha</Link>
            </Container>
        </Page>
    );
}

export default ForgetPassword;