import register from "./Register.css";

function Register() {
    return (
        <div className="registerPage">
            <div className="registerBox">
                <div>Cadastr'orc</div>
                <input type="text" id="fname" placeholder="Nome" />
                <input type="text" id="fname" placeholder="Username" />
                <input type="text" id="fname" placeholder="Email" />
                <input type="text" id="fname" placeholder="Senha" />
                <input type="text" id="fname" placeholder="Confirmar Senha" />
                <button>Cadastrar</button>
                <a href="/login">Uau, esqueci que já tenho uma conta :P</a>
            </div>
            
        </div>
    );
  }
  
  export default Register;