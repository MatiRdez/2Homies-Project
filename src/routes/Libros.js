import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const Libros = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const BotonCrearLibro = async () =>{
        try{
            const docRef = await addDoc(collection(db, "Libros"), {
                Título: titulo,
                Autor: autor,
            });
        }
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />
            <button>Agregar libro</button>
        </div>
    )
}