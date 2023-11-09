import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

const AgregarLibros = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [portada, setPortada] = useState("");
    const [url, setURL] = useState("");

    const BotonCrearLibro = async () =>{
        try{
            const docRef = await addDoc(collection(db, "Libros"), {
                Título: titulo,
                Autor: autor,
                Género: genero,
                Descripción: descripcion,
                Fecha: fecha,
                Portada: portada,
                URL: url,
            });
            console.log("Documento agregado correctamente con ID: ", docRef.id);
            setTitulo("");
            setAutor("");
            setGenero("");
            setDescripcion("");
            setFecha("");
            setPortada("");
            setURL("");
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
                <option>Seleccionar género</option>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Terror">Terror</option>
            </select>
            <textarea placeholder="Descripción..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
            <input
                type="number"
                placeholder="Año de publicación"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
            />
            <label for="imagen">Imagen de portada</label>
            <input
                id="imagen"
                type="file"
                value={portada}
                onChange={(e) => setPortada(e.target.value)}
            />
            <input
                type="url"
                placeholder="URL del libro"
                value={url}
                onChange={(e) => setURL(e.target.value)}
            />
            <button onClick={BotonCrearLibro}>Agregar libro</button>
            <button><Link to={"/listar-libros"}>Ver lista de libros</Link></button>
        </div>
    )
}

export default AgregarLibros;