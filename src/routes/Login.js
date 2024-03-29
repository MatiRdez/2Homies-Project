import React, { useState } from "react";
import '../components/styles/Login.css';
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
import BotonGoogle from "../components/LoginGoogle";
import BotonGitHub from "../components/LoginGitHub";
import BotonAnonimo from "../components/LoginAnonimo";
import { useNavigate, NavLink } from "react-router-dom";
import BotonLogin from "../components/BotonLogin";
import Swal from 'sweetalert2'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const Datos = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                Swal.fire({
                    title: "Listo!",
                    text: "Logeado correctamente",
                    icon: "success"
                });
                navigate("/home");
            })
            .catch((error) => {
                console.log(error.code);
                if(error.code === 'auth/invalid-email'){
                    
                    Swal.fire({
                        icon: "error",
                        title: "Parece que ha sucedido un error",
                        text: "Ingrese un correo electrónico válido",
                    });
                }
                else{
                    if(error.code === 'auth/user-not-found'){
                        
                        Swal.fire({
                            icon: "error",
                            title: "Parece que ha sucedido un error",
                            text: "El usuario no está registrado",
                        });
                        
                    }
                    else{
                        if(error.code === 'auth/wrong-password'){
                            Swal.fire({
                                icon: "error",
                                title: "Parece que ha sucedido un error",
                                text: "La contraseña es incorrecta",
                            });
                        }
                        else{
                            Swal.fire({
                                icon: "error",
                                title: "Parece que ha sucedido un error",
                                text: "Por favor, complete los campos correctamente",
                            });
                        }
                    }
                }
            })
    }

    return(
        <div>
            <div className="fondo"></div>
            <div className="form">
                <form onSubmit={Datos}>
                    <label for="correo">Correo electrónico</label>
                    <input id="correo" type="text" onChange={(e) => setEmail(e.target.value)}></input>
                    <label for="pass">Contraseña</label>
                    <input id="pass" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <input id="enviar" type="submit" value="Acceder"></input>
                </form>
                <hr></hr>
                <div className="registrarse">O</div>
                <NavLink to='/registro'><BotonLogin texto='Registrarse'/></NavLink>
                <div className="botones">
                    <BotonGoogle/>
                    <BotonGitHub/>
                    <BotonAnonimo/>
                </div>
            </div>
        </div>
    )
}

export default Login;