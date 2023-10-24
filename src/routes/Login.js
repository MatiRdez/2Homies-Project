import React, { useState } from "react";
import '../components/styles/Login.css';
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
import BotonGoogle from "../components/LoginGoogle";
import BotonGitHub from "../components/LoginGitHub";
import BotonAnonimo from "../components/LoginAnonimo";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Datos = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                alert("Logeado correctamente");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="form">
            <form onSubmit={Datos}>
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="text" onChange={(e) => setEmail(e.target.value)}></input>
                <label for="pass">Contraseña</label>
                <input id="pass" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <input id="enviar" type="submit" value="Acceder"></input>
            </form>
            <div className="botones">
                <BotonGoogle/>
                <BotonGitHub/>
            </div>
        </div>
    )
}

export default Login;