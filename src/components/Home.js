import React from "react";
import Salir from "./Salir";

const Home = (props) => {
    return(
        <>
          <h1>Bienvenidos!</h1>
          <div>
            <div className="header"> 
                <img src="logo.png" alt="Logo" />
                <label for="toggle">☰</label>
                <input type="checkbox" id="toggle" />
                <div className="navbar"> 
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        
                    </ul>   
                </div>
            </div>
        </div>
          <Salir/>
        </>
    )
}

export default Home;