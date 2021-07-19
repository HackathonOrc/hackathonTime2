import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import {
  Link,
  Button,
  Page,
  Container,
  TextInput,
  Title,
  Text,
} from "../styles/GeneralStyles";
import orc_jump from "../assets/orc-pose-jump 1.png";

function RecoverPassword() {
  const { token, userName } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (!token || !userName) history.push("/");
    // eslint-disable-next-line
  }, []);

  function verifyPassword() {
    const newPassword = document.getElementById("password").value;
    const confirmNewPassword = document.getElementById("confirmPassword").value;
    if (newPassword !== "") {
      if (newPassword !== confirmNewPassword)
        window.alert("As senhas devem ser iguais");
      else {
        resetPassword(newPassword);
      }
    } else window.alert("Preencha a senha");
  }
  async function resetPassword(newPassword) {
    try {
      await api.post("/user/reset_password", {
        userName,
        token,
        password: newPassword,
      });

      window.alert("senha redefinida com sucesso");
      history.push("/");
    } catch (error) {
      window.alert("Link invalido ou expirado, solicite novamente");
      history.push("/forgetpassword");
    }
  }

  return (
    <Page>
      <Container>
        <img alt="orcinho" src={orc_jump} width="20%" />
        <Title>Vamos criar uma nova senha!</Title>
        <Text>Digite sua nova senha abaixo</Text>
        <TextInput type="password" placeholder="Nova senha" id="password" />
        <TextInput
          type="password"
          placeholder="Confirmar nova senha"
          id="confirmPassword"
        />
        <Button onClick={verifyPassword}>Pronto!</Button>
        <Link href="/login">Lembrei minha senha</Link>
      </Container>
    </Page>
  );
}

export default RecoverPassword;
