import React from "react";

const Login = () => {
    return(
        <div>
            <label for="correo">Correo electrónico</label>
            <input id="correo" type="text"></input>
            <label for="pass">Contraseña</label>
            <input id="pass" type="password"></input>
            <input type="button" value="Acceder"></input>
        </div>
    )
}