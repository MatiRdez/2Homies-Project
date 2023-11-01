import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Salir = () => {

    const navigate = useNavigate();

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