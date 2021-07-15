import {Page, Container, TextInput, Title, Button, Link, Text} from "./ForgetPasswordStyled";
import orc_jump from "../../assets/orc-pose-jump 1.png"

function ForgetPassword() {
    return (
        <Page>
            <Container>
                <img alt="orcinho" src={orc_jump} width='20%'/>
                <Title>Esqueceu a senha?</Title>
                <Text>Digite seu email para que possamos te ajudar!</Text>
                <TextInput type="text" placeholder="E-mail" id="email"/>
                <Button>
                    Pronto!
                </Button>
                <Link href="/login">Opa! Lembrei minha senha, esquece hihi!</Link>
            </Container>
        </Page>
    );
  }
  
  export default ForgetPassword;