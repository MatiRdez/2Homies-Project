import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import "../components/styles/BotonCRUD.css";
import Swal from 'sweetalert2'

const AgregarLibros = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [portada, setPortada] = useState(null);
    const [url, setURL] = useState("");

    const SubirImagen = async () => {
        try{
            const nombre = new Date().getTime() + portada.name;
            const storageRef = ref(storage, `portadas/${nombre}`);
            const uploadTask = uploadBytesResumable(storageRef, portada);
            const snapshot = await uploadTask;
            const portadaURL = await getDownloadURL(snapshot.ref);
            return portadaURL;
        }catch(error){
            console.error("Error al subir la imagen:", error);
            throw error;
        }
    };

    const BotonCrearLibro = async () =>{
        try{
            const portadaURL = await SubirImagen();
            const docRef = await addDoc(collection(db, "Libros"), {
                Título: titulo,
                Autor: autor,
                Género: genero,
                Descripción: descripcion,
                Fecha: fecha,
                PortadaURL: portadaURL,
                URL: url,
            });
            console.log("Documento agregado correctamente con ID: ", docRef.id);
            setTitulo("");
            setAutor("");
            setGenero("");
            setDescripcion("");
            setFecha("");
            setPortada(null);
            setURL("");
            Swal.fire({
                icon: "success",
                title: "Bien hecho!",
                text: "Documento agregado correctamente",
            });
        }
        catch(error){
            console.log("Error al agregar el documento: ", error);
            Swal.fire({
                icon: "error",
                title: "Parece que ha sucedido un error",
                text: "Por favor, complete los campos correctamente",
            });
        }
    }

    return(
        <div className="form-agregar">
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
                <option value="Fantasía">Fantasía</option>
                <option value="Historia">Historia</option>
                <option value="Romance">Romance</option>
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
                onChange={(e) => setPortada(e.target.files[0])}
            />
            <input
                type="url"
                placeholder="URL del libro"
                value={url}
                onChange={(e) => setURL(e.target.value)}
            />
            <button onClick={BotonCrearLibro}>Agregar libro</button>
            <button className="boton-lista"><Link to={"/listar-libros"} className="link">Ver lista de libros</Link></button>
        </div>
    )
}

export default AgregarLibros;