import React from "react";
import Anonimo from "./images/Anonimo.png";
import "./styles/BotonAnonimo.css";
import { auth } from "../firebaseConfig";
import { signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const BotonAnonimo = () => {
    const navigate = useNavigate();
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