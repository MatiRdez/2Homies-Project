import React from "react";
import './styles/BotonLogin.css';

const BotonLogin = (props) => {
    return(
        <div className="boton">
            <input type="button" value={props.texto}></input>
        </div>
    )
}

export default BotonLogin;