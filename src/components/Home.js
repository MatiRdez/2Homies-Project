import React from "react";
import Salir from "./Salir";
import "./styles/Home.css";

const Home = (props) => {
    return(
        <>
          <h1>Bienvenidos!</h1>
          <div>
            <div className="header"> 
                <img src="logo.png" alt="Logo" />
                <label for="toggle">☰</label>
                <input class="check" type="checkbox" id="toggle" />
                <div className="navbar"> 
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Navegar</a></li>
                        <li><a href="#">Libros</a></li>
                        <li><a href="#">Buscar</a></li>
                        <Salir/>
                    </ul>   
                </div>
            </div>
        </div>
          
        </>
    )
}

export default Home;