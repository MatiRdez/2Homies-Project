import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import "./styles/Categorias.css"

const Categorias = () => {
  return (
    <div>
      <Menu/>
      <div class="container">
        <div class="categoria-aventura">
            <h2>Aventura</h2>
            <p>Explora mundos desconocidos y vive emocionantes peripecias con personajes valientes y decididos.</p>
        </div>
        <div class="categoria-acción">
            <h2>Acción</h2>
            <p>Sumérgete en historias llenas de adrenalina, combates espectaculares y héroes que enfrentan desafíos extremos.</p>
        </div>
        <div class="categoria-terror">
            <h2>Terror</h2>
            <p>Si buscas emociones fuertes y escalofríos, elige historias que te mantendrán al borde del asiento, llenas de misterio y suspense.</p>
        </div>
        <div class="categoria-fantasía">
            <h2>Fantasía</h2>
            <p>Descubre mundos mágicos, criaturas extraordinarias y aventuras épicas que desafían las leyes de la realidad.</p>
        </div>
        <div class="categoria-historia">
            <h2>Historia</h2>
            <p>Sumérgete en el pasado y vive eventos históricos a través de relatos que te transportarán a diferentes épocas y culturas.</p>
        </div>
        <div class="categoria-romance">
            <h2>Romance</h2>
            <p>Embárcate en historias de amor apasionadas y conmovedoras, donde los personajes enfrentan desafíos para encontrar el verdadero significado del amor.</p>
        </div>
    </div>
    </div>
  )
}
export default Categorias;

