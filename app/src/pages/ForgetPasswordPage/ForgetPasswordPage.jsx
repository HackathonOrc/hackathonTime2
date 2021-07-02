import {Page, Container, TextInput} from "./ForgetPasswordStyled";

function ForgetPassword() {
    return (
        <Page>
            <Container>
                <div>Esqueceu a senha?</div>
                <p>Digite seu email para que possamos te ajudar!</p>
                <TextInput type="text" placeholder="E-mail" />
                <button>Pronto!</button>
                <a href="/login">Opa! Lembrei minha senha, esquece hihi!</a>
            </Container>
        </Page>
    );
  }
  
  export default ForgetPassword;