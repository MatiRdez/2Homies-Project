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
        <li><Salir/></li>
      </ul>
    </div>
  </div>
</div>

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

  <!-- Agrega más libros aquí -->
  
</div>

          
        </>
    )
}

export default Home;