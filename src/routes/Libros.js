import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const Libros = () => {

    const [titulo, setTitulo] = useState("");

    return(
        <div>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
            />
            <button>Agregar libro</button>
        </div>
    )
}