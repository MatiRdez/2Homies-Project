import React from "react";
import Google from './images/Google.png';
import './styles/BotonGoogle.css';
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const BotonGoogle = () => {

    const Provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const IniciarConGoogle = () => {
        signInWithPopup(auth, Provider)
            .then((result) => {
                Swal.fire({
                    title: "Listo!",
                    text: "Logeado correctamente",
                    icon: "success"
                });
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="boton-google">
            <button onClick={IniciarConGoogle}><img src={Google}></img>Continuar con Google</button>
        </div>
    )
}

export default BotonGoogle;