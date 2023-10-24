import React from "react";
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
        <div>
            <button onClick={IniciarAnonimo}>Continuar como anónimo</button>
        </div>
    )
}

export default BotonAnonimo;