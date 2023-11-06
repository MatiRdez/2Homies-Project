import React, { useState, useEffect } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const EditarLibro = () => {

    const [libro, setLibro] = useState({});
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevoAutor, setNuevoAutor] = useState("");
    const [nuevoGenero, setNuevoGenero] = useState("");

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