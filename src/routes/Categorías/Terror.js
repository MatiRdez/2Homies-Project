import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";

const Terror = () => {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const obtenerLibros = async () => {
            try{
                const librosCollection = collection(db, "Libros");
                const librosSnapshot = await getDocs(librosCollection);
                const librosTerror = [];

                librosSnapshot.forEach((doc) => {
                    const libro = doc.data();
                    if (libro.Género === "Terror") {
                        librosTerror.push(libro);
                    }
                });

                setLibros(librosTerror);
            } catch (error) {
                console.error("Error al obtener libros:", error);
            }
        };

        obtenerLibros();
    }, []);

    return(
        <div>
            <h1>Libros del género terror</h1>
            {libros.map((libro) => (
                <div key={libro.id}>
                    <h1>{libro.Título} | {libro.Autor} - ({libro.Fecha})</h1>
                    <div>
                        <img src={libro.PortadaURL} alt={`Portada de ${libro.Título}`}/>
                        <p>{libro.Descripción}</p>
                    </div>
                    <button><Link to={libro.URL}>Leer libro</Link></button>
                    <button>Agregar a favoritos</button>
                </div>
            ))}
        </div>
    )
}

export default Terror;