import React from "react";
import '../components/styles/Login.css';

const Login = () => {
    return(
        <div className="form">
            <label for="correo">Correo electrónico</label>
            <input id="correo" type="text"></input>
            <label for="pass">Contraseña</label>
            <input id="pass" type="password"></input>
            <input id="enviar" type="button" value="Acceder"></input>
        </div>
    )
}

export default Login;