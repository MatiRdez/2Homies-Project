import React, { useState } from "react";
import "./styles/Menu.css";
import ImgLogo from "../components/images/LogoApp.png";
import Salir from "./Salir";
import { NavLink } from "react-router-dom";
import Buscador from "./Buscador";
import Swal from "sweetalert2";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const alerta = () => {
    Swal.fire({
      icon: "info",
      title: "Sección en desarrollo",
      text: "Vuelva próximamente",
  });
  }

  return (
    <div>
      <div className="header">
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <img src={ImgLogo} alt="Logo" className="logo" />
        <div className="search-container">
          <Buscador />
        </div>
      </div>
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <NavLink to="/home" onClick={toggleMenu}>
            <li>Inicio</li>
          </NavLink>
          <NavLink to="/navegar" onClick={toggleMenu}>
            <li>Navegar</li>
          </NavLink>
          <li onClick={alerta}>Mi colección</li>
          <NavLink to="/listar-libros" onClick={toggleMenu}>
            <li>CRUD - Libros</li>
          </NavLink>
          <Salir onClick={toggleMenu} />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
