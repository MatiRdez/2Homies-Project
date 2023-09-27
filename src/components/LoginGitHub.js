import React from "react";
import { auth } from "../firebaseConfig";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";

const BotonGitHub = () => {

    const Provider = new GithubAuthProvider();

    const IniciarConGitHub = () => {
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
            <button>Continuar con GitHub</button>
        </div>
    )
}

export default BotonGitHub;