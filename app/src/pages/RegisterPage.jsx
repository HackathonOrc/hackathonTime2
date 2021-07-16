import { Link, Button, Page, Container, TextInput, Title } from "../styles/GeneralStyles";

function Register() {
    return (
        <Page>
            <Container>
                <Title>Cadastr'orc</Title>
                <TextInput placeholder="Nome" placeholderTextColor="red" />
                <TextInput type="text" placeholder="Username" />
                <TextInput type="text" placeholder="Email" />
                <TextInput type="text" placeholder="Senha" />
                <TextInput type="text" placeholder="Confirmar Senha" />
                <Button>Cadastrar</Button>
                <Link href="/login">Uau, esqueci que já tenho uma conta :P</Link>
            </Container>

        </Page>
    );
}

export default Register;