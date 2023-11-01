import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const Salir = () => {
    return(
        <div>
            <button>Cerrar sesión</button>
        </div>
    )
}