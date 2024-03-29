import React, { useState } from "react";
import '../components/styles/Registro.css';
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import BotonLogin from '../components/BotonLogin';
import Swal from 'sweetalert2'

const Registro = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Datos = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, usuario, password)
            .then((userCredential) => {
                console.log(userCredential);
                Swal.fire({
                    title: "Listo!",
                    text: "Registrado correctamente",
                    icon: "success"
                });
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
                if(error.code === 'auth/invalid-email'){
                    Swal.fire({
                        icon: "error",
                        title: "Parece que ha sucedido un error",
                        text: "Ingrese un correo electrónico válido",
                    });    
                }
                else{
                    if(error.code === 'auth/email-already-in-use'){
                        Swal.fire({
                            icon: "error",
                            title: "Parece que ha sucedido un error",
                            text: "El correo electrónico que ingresó ya está en uso, intente con otro",
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
                if(password.length < 8){
                    Swal.fire({
                        icon: "error",
                        title: "Parece que ha sucedido un error",
                        text: "La contraseña debe tener al menos 8 caracteres.",
                    });
                    return;
                }
        
                if(password !== confirmPassword){
                    
                    Swal.fire({
                        icon: "error",
                        title: "Parece que ha sucedido un error",
                        text: "Las contraseñas no coinciden.",
                    });
                    return;
                }
            })
    }

    return(
        <div>
            <div className="fondo"></div>
            <div className="form-registro">
                <form onSubmit={Datos}>
                    <label for="correo">Correo electrónico</label>
                    <input id="correo" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label for="usuario">Nombre de usuario</label>
                    <input id="usuario" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                    <label for="pass">Contraseña</label>
                    <input id="pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label for="confirmPass">Confirmar contraseña</label>
                    <input id="confirmPass" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <input id="enviar" type="submit" value="Registrarse"></input>
                </form>
                <hr></hr>
                <div className="registrarse">O</div>
                <NavLink to='/'><BotonLogin texto='Iniciar sesión'/></NavLink>
            </div>
        </div>
    )
}

export default Registro;