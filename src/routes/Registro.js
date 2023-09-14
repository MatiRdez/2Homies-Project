import React from "react";

const Registro = () => {
    return(
        <div>
            <form>
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="text"></input>
                <label for="usuario">Nombre de usuario</label>
                <input id="usuario" type="text"></input>
                <label for="pass">Contraseña</label>
                <input id="pass" type="password"></input>
                <input id="enviar" type="submit" value="Registrarse"></input>
            </form>
        </div>
    )
}

export default Registro;