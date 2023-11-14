import React, { useState } from "react";
import '../components/styles/Registro.css';
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { NavLink } from "react-router-dom";
import BotonLogin from '../components/BotonLogin';
const Registro = () => {

    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Datos = (e) => {

        if(password.length < 8){
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden.");
            return;
        }

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, usuario, password)
            .then((userCredential) => {
                console.log(userCredential);
                alert("Registrado correctamente");
            })
            .catch((error) => {
                console.log(error);
                if(error.code === 'auth/invalid-email'){
                  
                    Swal.fire({
                            icon: "error",
                            title: "Parece que ha sucedido un error",
                            text: "Ingrese un correo electrónico válido",
                            footer: '<a href="#">Why do I have this issue?</a>'
                          });
                        
                }
                else{
                    if(error.code === 'auth/email-already-in-use'){
                        
                        Swal.fire({
                            icon: "error",
                            title: "Parece que ha sucedido un error",
                            text: "El correo electrónico que ingresó ya está en uso, intente con otro",
                            footer: '<a href="#">Why do I have this issue?</a>'
                          });
                        
                    }
                    else{
                        
                        Swal.fire({
                            icon: "error",
                            title: "Parece que ha sucedido un error",
                            text: "Por favor, complete los campos correctamente",
                            footer: '<a href="#">Why do I have this issue?</a>'
                          });
                        
                    }
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