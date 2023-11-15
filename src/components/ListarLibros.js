import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom"
import EliminarLibro from "./EliminarLibro";
import "../components/styles/ListaLibros.css";

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
        <div className="lista-libros">
            <h1>Lista de libros</h1>
            <ul>
                {libros.map((libro) => (
                    <li key={libro.id}>
                        <div className="detalle-libro"><strong>Título:</strong> {libro.Título} <strong>Autor:</strong> {libro.Autor} <strong>Género:</strong> {libro.Género}</div>
                        <button className="modificar"><Link to={`/editar-libro/${libro.id}`} className="link">Modificar</Link></button>
                        <EliminarLibro libroId={libro.id}/>
                    </li>
                ))}
            </ul>
            <button className="agregar"><Link to={"/agregar-libros"} className="link">Agregar libros (+)</Link></button>
        </div>
    )
}

export default ListarLibros;