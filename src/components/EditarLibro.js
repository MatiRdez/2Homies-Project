import React, { useState, useEffect } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const EditarLibro = ({libroId}) => {

    const [libro, setLibro] = useState({});
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevoAutor, setNuevoAutor] = useState("");
    const [nuevoGenero, setNuevoGenero] = useState("");

    useEffect(() => {
        const obtenerLibro = async () => {
            const docRef = doc(db, "Libros", libroId);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLibro({ id: docSnap.id, ...docSnap.data() });
            }else{
                console.log("Error al encontrar el libro");
            }
        };
        obtenerLibro();
    }, [libroId]);

    return(
        <div>
            <input
                type="text"
                placeholder="Actualizar título"
                value={titulo}
            />
            <input
                type="text"
                placeholder="Actualizar autor"
                value={autor}
            />
            <select value={genero}>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Terror">Terror</option>
            </select>
            <button>Actualizar libro</button>
        </div>
    )
}