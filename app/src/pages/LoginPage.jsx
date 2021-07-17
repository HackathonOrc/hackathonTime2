import { Link, Button, Page, Container, TextInput, Title } from "../styles/GeneralStyles";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../context/userContext';
import orc_jump from "../assets/orc-pose-jump 1.png"


function Login() {


    const { user, login, recoverUser } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!user)
            recoverUser()
        else
            history.push('/');

        // eslint-disable-next-line 
    }, [user])

    return (

        <Page>
            <Container>
                <img alt="orcinho" src={orc_jump} width='20%' />
                <Title>Faça seu login</Title>
                <TextInput type="text" id="email" placeholder="Email" />
                <TextInput type="password" id="password" placeholder="Senha" />
                <Button
                    onClick={() => {
                        login(document.getElementById('password').value,
                            document.getElementById('email').value)
                    }
                    }
                >
                    Entrar
                </Button>
                <Link href="/forgetpassword"> Deu alzhaimer, esqueci minha senha </Link>
                <Link href="/register"> Uau, preciso criar minha conta :D </Link>
            </Container>

        </Page>
    );
}

export default Login;