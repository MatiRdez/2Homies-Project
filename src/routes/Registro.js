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

    const Datos = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, usuario, password)
            .then((userCredential) => {
                console.log(userCredential);
                alert("Registrado correctamente");
            })
            .catch((error) => {
                console.log(error);
                if(error.code === 'auth/invalid-email'){
                    alert("Ingrese un correo electrónico válido");
                }
                else{
                    if(error.code === 'auth/email-already-in-use'){
                        alert("El correo electrónico que ingresó ya está en uso, intente con otro");
                    }
                    else{
                        alert("Por favor, complete los campos correctamente");
                    }
                }
            })
    }

    return(
        <div className="form-registro">
            <NavLink to='/login'><BotonLogin texto='Iniciar sesión'/></NavLink>
            <form onSubmit={Datos}>
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label for="usuario">Nombre de usuario</label>
                <input id="usuario" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                <label for="pass">Contraseña</label>
                <input id="pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input id="enviar" type="submit" value="Registrarse"></input>
            </form>
        </div>
    )
}

export default Registro;