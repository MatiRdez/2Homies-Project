import React, { useState } from "react";
import '../components/styles/Login.css';
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
import BotonGoogle from "../components/LoginGoogle";
import BotonGitHub from "../components/LoginGitHub";
import BotonAnonimo from "../components/LoginAnonimo";
import { useNavigate } from "react-router-dom";
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
                console.log(error.code);
                if(error.code === 'auth/invalid-email'){
                    alert("Ingrese un correo electrónico válido");
                }
                else{
                    if(error.code === 'auth/user-not-found'){
                        alert("El usuario no está registrado")
                    }
                    else{
                        if(error.code === 'auth/wrong-password'){
                            alert("La contraseña es incorrecta");
                        }
                    }
                }
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
                <BotonAnonimo/>
            </div>
        </div>
    )
}

export default Login;