import React from "react";
import Salir from "./Salir";
import "./styles/Home.css";
import ScrollToSearchButton from "./Buscar";
import SearchBooks from "./Buscar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Home = (props) => {
    return(
      <div>
        

        <Menu/>
        <div class="container">
    <h1>Nosotros</h1>

    <div class="section">
      <p>Bienvenido a BooksHub, donde la pasión por la lectura se encuentra con la diversidad literaria.</p>
    </div>

    <div class="section">
      <h2>Nuestra Misión</h2>
      <p>Nuestra misión es fomentar la conexión entre los lectores y los libros que aman.</p>
    </div>

    <div class="section">
      <h2>Explora y Descubre</h2>
      <p>Descubre nuevos mundos a través de nuestro vasto catálogo. Utiliza nuestra búsqueda intuitiva para encontrar el libro perfecto.</p>
    </div>

    <div class="section">
      <h2>Experiencia Personalizada</h2>
      <p>Te ofrecemos recomendaciones personalizadas para expandir tus horizontes literarios.</p>
    </div>

    <div class="section">
      <h2>Únete a la Comunidad</h2>
      <p>Conéctate con otros amantes de la lectura en eventos, clubes de lectura y discusiones en línea.</p>
    </div>

    <div class="section">
      <h2>Tu Aventura Literaria Comienza Aquí</h2>
      <p>En BooksHub, cada página es una nueva aventura y cada libro es un compañero de viaje. Bienvenido a tu destino literario.</p>
    </div>
  </div>
      </div>
    )
}

export default Home;