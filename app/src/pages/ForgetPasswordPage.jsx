import { Link, Button, Page, Container, TextInput, Title, Text } from "../styles/GeneralStyles";
import orc_jump from "../assets/orc-pose-jump 1.png";

function ForgetPassword() {
    return (
        <Page>
            <Container>
                <img alt="orcinho" src={orc_jump} width='20%' />
                <Title>Esqueceu a senha?</Title>
                <Text>Digite seu email para que possamos te ajudar!</Text>
                <TextInput type="text" placeholder="E-mail" id="email"/>
                <Button>
                    Pronto!
                </Button>
                <Link href="/login">Lembrei minha senha</Link>
            </Container>
        </Page>
    );
}

export default ForgetPassword;