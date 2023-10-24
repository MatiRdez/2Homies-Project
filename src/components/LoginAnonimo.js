import React from "react";
import Anonimo from "./images/Anonimo.png";
import "./styles/BotonAnonimo.css";
import { auth } from "../firebaseConfig";
import { signInAnonymously } from "firebase/auth";

const BotonAnonimo = () => {

    const IniciarAnonimo = () => {
        signInAnonymously(auth)
            .then((result) => {
                alert("Ingresó correctamente");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="boton-anonimo">
            <button onClick={IniciarAnonimo}><img src={Anonimo}></img>Continuar como anónimo</button>
        </div>
    )
}

export default BotonAnonimo;