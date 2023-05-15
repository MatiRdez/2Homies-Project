import React from "react";

const BotonLogin = (props) => {
    return(
        <div>
            <input type="button" value={props.texto}></input>
        </div>
    )
}

export default BotonLogin;