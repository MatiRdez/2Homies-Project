import React from "react";
import '../components/styles/Login.css';
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = () => {
    return(
        <div className="form">
            <form>
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="text"></input>
                <label for="pass">Contraseña</label>
                <input id="pass" type="password"></input>
                <input id="enviar" type="submit" value="Acceder"></input>
            </form>
        </div>
    )
}

export default Login;