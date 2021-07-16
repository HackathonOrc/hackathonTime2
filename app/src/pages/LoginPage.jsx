import { Link, Button, Page, Container, TextInput, Title } from "../styles/GeneralStyles";
import orc_jump from "../assets/orc-pose-jump 1.png"

function Login() {
    return (
        <Page>
            <Container>
                <img alt="orcinho" src={orc_jump} width='20%' />
                <Title>Faça seu login</Title>
                <TextInput type="text" id="fname" placeholder="Email" />
                <TextInput type="text" id="fname" placeholder="Senha" />
                <Button>Entrar</Button>
                <Link href="/forgetpassword"> Deu alzhaimer, esqueci minha sala </Link>
                <Link href="/register"> Uau, preciso criar minha conta :D </Link>
            </Container>

        </Page>
    );
}

export default Login;