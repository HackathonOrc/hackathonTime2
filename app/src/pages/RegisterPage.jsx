import {
  Link,
  Button,
  Page,
  Container,
  TextInput,
  Title,
} from "../styles/GeneralStyles";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";

function Register() {
  const { user, recoverUser, register } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) recoverUser();
    else history.push("/");
    // eslint-disable-next-line
  }, [user]);

  return (
    <Page>
      <Container>
        <Title>Cadastr'orc</Title>
        <TextInput placeholder="Nome" id="name" />
        <TextInput type="text" placeholder="Apelido" id="userName" />
        <TextInput type="email" placeholder="Email" id="email" />
        <TextInput type="password" placeholder="Senha" id="password" />
        <TextInput
          type="password"
          placeholder="Confirmar Senha"
          id="cPassword"
        />
        <Button
          onClick={() => {
            register(
              document.getElementById("name").value,
              document.getElementById("userName").value,
              document.getElementById("email").value,
              document.getElementById("password").value,
              document.getElementById("cPassword").value
            );
          }}
        >
          Cadastrar
        </Button>
        <Link href="/login">Já possuo uma conta</Link>
      </Container>
    </Page>
  );
}

export default Register;
