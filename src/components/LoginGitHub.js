import React from "react";
import { auth } from "../firebaseConfig";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";

const BotonGitHub = () => {

    const Provider = new GithubAuthProvider();

    return(
        <div>
            <button>Continuar con GitHub</button>
        </div>
    )
}

export default BotonGitHub;