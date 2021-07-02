import {Page, Container, TextInput} from "./LoginStyled";

function Login() {
    return (
        <Page>
            <Container>
                <div>Faça seu login</div>
                <TextInput type="text" id="fname" placeholder="Email" />
                <TextInput type="text" id="fname" placeholder="Senha" />
                <button>Entrar</button>
                <a href="/forgetpassword"> Deu alzhaimer, esqueci minha sala </a>
                <a href="/register"> Uau, preciso criar minha conta :D </a>
            </Container>
            
        </Page>
    );
  }
  
  export default Login;