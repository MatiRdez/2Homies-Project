import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import "./styles/Categorias.css"

const Categorias = () => {
  return (
    <div>
      <Menu></Menu>
      <div class="container">
    <div class="genre-box mystery">
      <p>Misterio</p>
    </div>
    <div class="genre-box romance">
      <p>Romance</p>
    </div>
    <div class="genre-box fantasy">
      <p>Fantasía</p>
    </div>
    <div class="genre-box scifi">
      <p>Ciencia Ficción</p>
    </div>
    <div class="genre-box thriller">
      <p>Thriller</p>
    </div>
  </div>
    </div>
  )
}
export default Categorias;

