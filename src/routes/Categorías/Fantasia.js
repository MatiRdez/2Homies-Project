import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import "../../components/styles/ListarLibros.css";

const Fantasia = () => {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const obtenerLibros = async () => {
            try{
                const librosCollection = collection(db, "Libros");
                const librosSnapshot = await getDocs(librosCollection);
                const librosFantasia = [];

                librosSnapshot.forEach((doc) => {
                    const libro = doc.data();
                    if (libro.Género === "Fantasía") {
                        librosFantasia.push(libro);
                    }
                });

                setLibros(librosFantasia);
            } catch (error) {
                console.error("Error al obtener libros:", error);
            }
        };

        obtenerLibros();
    }, []);

    return(
        <div>
            <div className="libro-contenedor">
                <h1 className="titulo-cat">Libros del género Fantasía</h1>
                <div className="libros">
                    {libros.map((libro) => (
                        <div key={libro.id} className="libro-carta">
                            <h2 className="libro-titulo">{libro.Título} | {libro.Autor} - ({libro.Fecha})</h2>
                            <div className="libro-detalles">
                                <img src={libro.PortadaURL} alt={`Portada de ${libro.Título}`} className="portada"/>
                                <p className="libro-desc">{libro.Descripción}</p>
                            </div>
                            <div className="libro-botones">
                                <button className="boton-leer"><Link to={libro.URL} className="boton-link">Leer libro</Link></button>
                                <button className="boton-fav">Agregar a favoritos</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Fantasia;