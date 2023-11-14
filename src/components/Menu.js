import React from "react";
import "./styles/Home.css"
import ImgLogo from "../components/images/LogoApp.png";
import SearchBooks from "./Buscar";
import Salir from "./Salir";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return(
      <div>
        <div className="header">
          <img src={ImgLogo} alt="Logo" className="logo" />
          <h1 className="titulo">Bienvenidos!</h1>
          <div className="search-container">
            <input type="text" placeholder="Buscar..." className="search-input" />
            <button type="button" className="search-button">Buscar</button>
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