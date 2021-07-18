export const forgotPasswordEmail = (token: string, userName: string) => {
  const url = "http://localhost:3000/recover";

  return `<p>Para recuperar sua senha,clique neste <a href='${url}/${userName}/${token}' > link</a> </p>`;
};
