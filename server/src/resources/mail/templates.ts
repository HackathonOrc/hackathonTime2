export const forgotPasswordEmail = (token: string, userName: string) => {
  const url = "http://localhost:3000/recover";

  return `<p>Para recuperar sua senha, clique neste <a href='${url}/${userName}/${token}' > link</a> </p>`;
};

export const validateEmail = (token: string, userName: string) => {
  const url = "http://localhost:3000/validate";

  return `<p>
    Para Validar sua conta, clique neste <a href="${url}/${userName}/${token}">link</a> .
            </p>`;
};
