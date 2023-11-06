import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

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
                        <p>Título:</p> {libro.Título}, <p>Autor:</p> {libro.Autor}, <p>Género:</p> {libro.Género}
                    </li>
                ))}
            </ul>
        </div>
    )
}