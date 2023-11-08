import React from "react";
import "./styles/Home.css"
import SearchBooks from "./Buscar";
import Salir from "./Salir";
import { NavLink } from "react-router-dom";
const Menu = () => {
    return(
      <div className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <h1>Bienvenidos!</h1>
      <label for="toggle">☰</label>
      <input class="check" type="checkbox" id="toggle" />
      <div className="navbar">
        <ul>
        <NavLink to='/Home'><li>Inicio</li></NavLink>
        <NavLink to='/Navegar'><li>Navegar</li></NavLink>
          
        </ul>
        
      </div>
      </div>
    )
}

export default Menu;