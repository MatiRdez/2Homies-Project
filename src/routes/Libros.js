import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Libros = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const BotonCrearLibro = async () =>{
        try{
            const docRef = await addDoc(collection(db, "Libros"), {
                Título: titulo,
                Autor: autor,
            });
            console.log("Documento agregado correctamente con ID: ", docRef.id);
            setTitulo("");
            setAutor("");
        }
        catch(error){
            console.log("Error al agregar el documento: ", error);
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
            <button onClick={BotonCrearLibro}>Agregar libro</button>
        </div>
    )
}

export default Libros;