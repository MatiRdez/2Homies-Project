import React from "react";
import { auth } from "../firebaseConfig";
import { signInAnonymously } from "firebase/auth";

const BotonAnonimo = () => {
    return(
        <div>
            <button>Continuar como anónimo</button>
        </div>
    )
}