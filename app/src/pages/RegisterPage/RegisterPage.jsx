import register from "./Register.css";
import {Page, Container, TextInput} from "./RegisterStyled";

function Register() {
    return (
        <Page>
            <Container>
                <div>Cadastr'orc</div>
                <TextInput type="text" placeholder="Nome" />
                <TextInput type="text" placeholder="Username" />
                <TextInput type="text" placeholder="Email" />
                <TextInput type="text" placeholder="Senha" />
                <TextInput type="text" placeholder="Confirmar Senha" />
                <button>Cadastrar</button>
                <a href="/login">Uau, esqueci que já tenho uma conta :P</a>
            </Container>
            
        </Page>
    );
  }
  
  export default Register;