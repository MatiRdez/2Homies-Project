import React from "react";
import Salir from "./Salir";
import "./styles/Home.css";
import ScrollToSearchButton from "./Buscar";
import SearchBooks from "./Buscar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Home = (props) => {
    return(
        <>
          <Menu></Menu>
          <div className="book-list">
          <div className="book">
            <img src="book1.jpg" alt="Libro 1" />
            <h2>Título del Libro 1</h2>
            <p>Autor: Autor del Libro 1</p>
            <p>Descripción del Libro 1</p>
          </div>

          <div className="book">
            <img src="book2.jpg" alt="Libro 2" />
            <h2>Título del Libro 2</h2>
            <p>Autor: Autor del Libro 2</p>
            <p>Descripción del Libro 2</p>
          </div>
          


          
        </div>

        </>
    )
}

export default Home;