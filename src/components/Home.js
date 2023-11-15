import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Home = () => {
    return(
      <div>
        <Menu/>
        <div className="container">
          <div className="section">
            <p className="texto">¡Bienvenido a BooksHub! 📚✨ ¡Tu refugio literario definitivo! Sumérgete en un universo de palabras cautivadoras y emociones desatadas. 🌟 Nuestras estanterías virtuales albergan una rica variedad de géneros, desde épicas fantásticas hasta poesía conmovedora e historias de terror que acelerarán tu pulso. Sea cual sea tu pasión literaria, aquí encontrarás tu próxima obsesión. Únete a nuestra comunidad de lectores apasionados, comparte reseñas, descubre recomendaciones personalizadas y participa en desafíos de lectura que desatarán tu imaginación. 🗣️📖 En BooksHub, celebramos la diversidad de historias y voces. ¿Listo para sumergirte en un mundo de letras inexplorado? ¡Bienvenido a tu nuevo hogar literario, bienvenido a BooksHub! 🚀📚</p>
          </div>
          <hr></hr>
          <div>
            <button className="boton-navegar"><Link to="/navegar" className="link-navegar">Comenzar a navegar!</Link></button>
          </div>
        </div>
      </div>
    )
}

export default Home;