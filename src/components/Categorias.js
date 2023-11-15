import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import "./styles/Categorias.css"

const Categorias = () => {
    return (
        <div>
            <Menu/>
            <div className="container">
                <div className="texto-categorias">
                    <p>¡Bienvenido a nuestro mundo de lectura emocionante y variada! Sumérgete en nuestras categorías y descubre un universo de historias fascinantes que abarcan desde la acción más intensa hasta los romances más apasionados. Explora la magia de la fantasía, vive la adrenalina de la aventura, y déjate envolver por el misterio del terror. Cada categoría es una puerta a un nuevo viaje literario. ¿Listo para explorar y encontrar tu próxima historia favorita? ¡Adelante, las páginas te esperan con ansias! 📚✨</p>
                </div>
                <div class="container-cats">
                    <div class="categoria aventura"><Link to="/aventura">
                        <h2>Aventura</h2>
                        <p>Explora mundos desconocidos y vive emocionantes peripecias con personajes valientes y decididos.</p>
                    </Link></div>
                    <div class="categoria acción"><Link to="/accion">
                        <h2>Acción</h2>
                        <p>Sumérgete en historias llenas de adrenalina, combates espectaculares y héroes que enfrentan desafíos extremos.</p>
                    </Link></div>
                    <div class="categoria terror"><Link to="/terror">
                        <h2>Terror</h2>
                        <p>Si buscas emociones fuertes y escalofríos, elige historias que te mantendrán al borde del asiento, llenas de misterio y suspense.</p>
                    </Link></div>
                    <div class="categoria fantasía"><Link to="/fantasia">
                        <h2>Fantasía</h2>
                        <p>Descubre mundos mágicos, criaturas extraordinarias y aventuras épicas que desafían las leyes de la realidad.</p>
                    </Link></div>
                    <div class="categoria historia">
                        <h2>Historia</h2>
                        <p>Sumérgete en el pasado y vive eventos históricos a través de relatos que te transportarán a diferentes épocas y culturas.</p>
                    </div>
                    <div class="categoria romance">
                        <h2>Romance</h2>
                        <p>Embárcate en historias de amor apasionadas y conmovedoras, donde los personajes enfrentan desafíos para encontrar el verdadero significado del amor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categorias;

