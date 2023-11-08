import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom"
import EditarLibro from "./EditarLibro";
import EliminarLibro from "./EliminarLibro";

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
                        <EliminarLibro libroId={libro.id}/>
                    </li>
                ))}
            </ul>
            <button><Link to={"/agregar-libros"}>Agregar libros (+)</Link></button>
        </div>
    )
}

export default ListarLibros;