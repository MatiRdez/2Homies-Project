import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";

const Accion = () => {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const obtenerLibros = async () => {
            try{
                const librosCollection = collection(db, "Libros");
                const librosSnapshot = await getDocs(librosCollection);
                const librosAccion = [];

                librosSnapshot.forEach((doc) => {
                    const libro = doc.data();
                    if (libro.Género === "Acción") {
                        librosAccion.push(libro);
                    }
                });

                setLibros(librosAccion);
            } catch (error) {
                console.error("Error al obtener libros:", error);
            }
        };

        obtenerLibros();
    }, []);

    return(
        <div>

        </div>
    )
}