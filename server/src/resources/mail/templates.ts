export const forgotPasswordEmail = (token: string, userName: string) => {

    const url = "http://localhost:3000/recover";

    return (`<p>Para recuperar sua senha,clique neste <a href='${url}/${userName}/${token}' > link</a> </p>`)
}



export const validateEmail = (token:string) => {
    const url = "http://localhost:3000/";

    return (`<p>
                Token de validação de email:${token}
            </p>`)
}