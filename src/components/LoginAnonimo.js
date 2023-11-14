import React from "react";
import Anonimo from "./images/Anonimo.png";
import "./styles/BotonAnonimo.css";
import { auth } from "../firebaseConfig";
import { signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const BotonAnonimo = () => {
    const navigate = useNavigate();
    const IniciarAnonimo = () => {
        signInAnonymously(auth)
            .then((result) => {
                
                Swal.fire({
  title: "Bien hecho!",
  text: "Ingresó correctamente",
  icon: "success"
});
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="boton-anonimo">
            <button onClick={IniciarAnonimo}><img src={Anonimo}></img>Continuar como anónimo</button>
        </div>
    )
}

export default BotonAnonimo;