import login from "./Login.css";

function Login() {
    return (
        <div className="loginPage">
            <div className="loginBox">
                <div>Faça seu login</div>
                <input type="text" id="fname" placeholder="Email" />
                <input type="text" id="fname" placeholder="Senha" />
                <button>Entrar</button>
                <a href="/forgotpassword"> Deu alzhaimer, esqueci minha sala </a>
                <a href="/register"> Uau, preciso criar minha conta :D </a>
            </div>
            
        </div>
    );
  }
  
  export default Login;