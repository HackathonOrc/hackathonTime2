import {Page, Container, TextInput, Title, Button, Link} from "./ForgetPasswordStyled";
import orc_jump from "../../assets/orc-pose-jump 1.png"

function ForgetPassword() {
    return (
        <Page>
            <Container>
                <img src={orc_jump} width='20%'/>
                <Title>Esqueceu a senha?</Title>
                <p>Digite seu email para que possamos te ajudar!</p>
                <TextInput type="text" placeholder="E-mail" />
                <Button>Pronto!</Button>
                <Link href="/login">Opa! Lembrei minha senha, esquece hihi!</Link>
            </Container>
        </Page>
    );
  }
  
  export default ForgetPassword;