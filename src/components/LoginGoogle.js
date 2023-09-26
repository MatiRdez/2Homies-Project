import React from "react";
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
        <div>
            <button>Continuar con Google</button>
        </div>
    )
}

export default BotonGoogle;