import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const Salir = () => {

    const CerrarSesion = () => {
        signOut(auth)
            .then(() => {
                console.log("Sesión cerrada correctamente")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <button>Cerrar sesión</button>
        </div>
    )
}