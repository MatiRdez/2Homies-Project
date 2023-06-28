import React from "react";
const Categorias = () => {
    const categorias = ["Ficción", "No ficción", "Ciencia ficción", "Fantasía", "Misterio", "Romance", "Aventura"];

    return (
        <div>
          <h2>Categorías</h2>
          <ul>
           {categorias.map((categoria, index) => (
             <li key={index}>{categoria}</li>
          ))}
          </ul>
    </div>
  );
}