import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles/BotonSalir.css";
import Swal from 'sweetalert2'
const Salir = () => {

    const navigate = useNavigate();

    const CerrarSesion = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    title: "Listo!",
                    text: "Sesión cerrada correctamente",
                    icon: "success"
                });
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="salir">
            <button onClick={CerrarSesion}>Cerrar sesión</button>
        </div>
    )
}

export default Salir;