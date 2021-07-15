import { useContext, useEffect } from "react";
import { Page, Container, TextInput, Title, Link, Button } from "./LoginStyled";
import orc_jump from "../../assets/orc-pose-jump 1.png"
import { UserContext } from '../../context/userContext';


function Login() {

    const { user, login, recoverUser } = useContext(UserContext);

    useEffect(() => {

        recoverUser()

    }, [])

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