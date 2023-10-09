import React from "react";
import Google from './images/Google.png';
import './styles/BotonGoogle.css';
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

const BotonGoogle = () => {

    const Provider = new GoogleAuthProvider();

    const IniciarConGoogle = () => {
        signInWithPopup(auth, Provider)
            .then((result) => {
                alert("Logeado correctamente");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="boton-google">
            <button onClick={IniciarConGoogle}><img src={Google}></img>Continuar con Google</button>
        </div>
    )
}

export default BotonGoogle;