import React, { useState } from "react";
import '../components/styles/Registro.css';
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";

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
            })
    }

    return(
        <div className="form-registro">
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