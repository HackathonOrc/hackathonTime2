import { useHistory } from "react-router-dom";
import api from "../services/api";

import { Link, Button, Page, Container, TextInput, Title, Text } from "../styles/GeneralStyles";
import orc_jump from "../assets/orc-pose-jump 1.png";

function ForgetPassword() {
  const history = useHistory();

  async function sendRecoveryEmail() {
    try {
      if (document.getElementById("email").value !== "") {
        await api.post("/user/forgot_password", {
          email: document.getElementById("email").value,
        });
        window.alert(
          "Email de recuperação enviado,verifique sua caixa de entrada."
        );
        history.push("/login");
      } else window.alert("Preencha o campo 'email'.");
    } catch (error) {
      window.alert(error.response.data.message);
    }
  }

  return (
    <Page>
      <Container>
        <img alt="orcinho" src={orc_jump} width="20%" />
        <Title>Esqueceu a senha?</Title>
        <Text>Digite seu email para que possamos te ajudar!</Text>
        <TextInput type="email" placeholder="E-mail" id="email" />
        <Button onClick={sendRecoveryEmail}>Pronto!</Button>
        <Link href="/login">Lembrei minha senha</Link>
      </Container>
    </Page>
  );
}

export default ForgetPassword;
