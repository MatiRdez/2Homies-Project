import React, { useState } from "react";
import { Auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const Registro = () => {

    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const Datos = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(Auth, email, usuario, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <form>
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="text" value={email}></input>
                <label for="usuario">Nombre de usuario</label>
                <input id="usuario" type="text" value={usuario}></input>
                <label for="pass">Contraseña</label>
                <input id="pass" type="password" value={password}></input>
                <input id="enviar" type="submit" value="Registrarse"></input>
            </form>
        </div>
    )
}

export default Registro;