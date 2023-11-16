import React from "react";
import "./styles/Menu.css"
import ImgLogo from "../components/images/LogoApp.png";

import Salir from "./Salir";
import { NavLink } from "react-router-dom";
import Buscador from "./Buscador";

const Menu = () => {
    return(
      <div>
        <div className="header">
          <img src={ImgLogo} alt="Logo" className="logo" />
          <h1 className="titulo">Bienvenidos!</h1>
          <div className="search-container">
           
            <Buscador/>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <NavLink to='/home'><li>Inicio</li></NavLink>
            <NavLink to='/navegar'><li>Navegar</li></NavLink>
            
            <li>Mi colección</li>
            <NavLink to="/listar-libros"><li>CRUD - Libros</li></NavLink>
            <Salir/>
          </ul>
        </div>
      </div>
    )
}

export default Menu;