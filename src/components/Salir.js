import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Salir = () => {

    const navigate = useNavigate();

    const CerrarSesion = () => {
        signOut(auth)
            .then(() => {
                alert("Sesión cerrada correctamente")
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <button onClick={CerrarSesion}>Cerrar sesión</button>
        </div>
    )
}

export default Salir;