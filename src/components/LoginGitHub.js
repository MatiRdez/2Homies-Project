import React from "react";
import GitHub from './images/GitHub.png';
import './styles/BotonGitHub.css';
import { auth } from "../firebaseConfig";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BotonGitHub = () => {

    const Provider = new GithubAuthProvider();

    const navigate = useNavigate();

    const IniciarConGitHub = () => {
        signInWithPopup(auth, Provider)
            .then((result) => {
                Swal.fire({
                    title: "Listo!",
                    text: "Logeado correctamente",
                    icon: "success"
                });
                navigate("/home")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="boton-github">
            <button onClick={IniciarConGitHub}><img src={GitHub}></img>Continuar con GitHub</button>
        </div>
    )
}

export default BotonGitHub;