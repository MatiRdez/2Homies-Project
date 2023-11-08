import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

const AgregarLibros = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");

    const BotonCrearLibro = async () =>{
        try{
            const docRef = await addDoc(collection(db, "Libros"), {
                Título: titulo,
                Autor: autor,
                Género: genero,
            });
            console.log("Documento agregado correctamente con ID: ", docRef.id);
            setTitulo("");
            setAutor("");
            setGenero("");
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
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Terror">Terror</option>
            </select>
            <button onClick={BotonCrearLibro}>Agregar libro</button>
            <button><Link to={"/listar-libros"}>Ver lista de libros</Link></button>
        </div>
    )
}

export default AgregarLibros;