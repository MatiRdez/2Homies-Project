import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom"
import EditarLibro from "./EditarLibro";

const ListarLibros = () => {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const obtenerLibros = async () => {
            const querySnapshot = await getDocs(collection(db, "Libros"));
            const librosArray = [];
            querySnapshot.forEach((doc) => {
                librosArray.push({ id: doc.id, ...doc.data() });
            });
            setLibros(librosArray);
        };
        obtenerLibros();
    }, []);

    return(
        <div>
            <h1>Lista de libros</h1>
            <ul>
                {libros.map((libro) => (
                    <li key={libro.id}>
                        <strong>Título:</strong> {libro.Título}, <strong>Autor:</strong> {libro.Autor}, <strong>Género:</strong> {libro.Género}
                        <button><Link to={`/editar-libro/${libro.id}`}>Modificar</Link></button>
                        <button>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListarLibros;