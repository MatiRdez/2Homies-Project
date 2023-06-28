import React from "react";

const DetalleLibro = ({ libro }) => {
    return (
        <div>
          <h2>{libro.titulo}</h2>
          <img src={libro.portada} alt={libro.titulo} />
          <p>Autor: {libro.autor}</p>