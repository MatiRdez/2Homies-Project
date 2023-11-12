import React, { useState, useEffect } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams, useNavigate } from "react-router-dom";

const EditarLibro = () => {

    const { libroId } = useParams();

    const navigate = useNavigate();

    const [libro, setLibro] = useState({});
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevoAutor, setNuevoAutor] = useState("");
    const [nuevoGenero, setNuevoGenero] = useState("");
    const [nuevoDescripcion, setNuevoDescripcion] = useState("");
    const [nuevoFecha, setNuevoFecha] = useState("");
    const [nuevoPortada, setNuevoPortada] = useState(null);
    const [nuevoURL, setNuevoURL] = useState("");

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

    const SubirImagen = async () => {
        try{
            const nombre = new Date().getTime() + nuevoPortada.name;
            const storageRef = ref(storage, `portadas/${nombre}`);
            const uploadTask = uploadBytesResumable(storageRef, nuevoPortada);
            const snapshot = await uploadTask;
            const nuevoPortadaURL = await getDownloadURL(snapshot.ref);
            return nuevoPortadaURL;
        }catch(error){
            console.error("Error al subir la imagen:", error);
            throw error;
        }
    };

    const GuardarCambios = async () => {
        try{
            await updateDoc(doc(db, "Libros", libroId), {
                Título: nuevoTitulo,
                Autor: nuevoAutor,
                Género: nuevoGenero,
                Descripción: nuevoDescripcion,
                Fecha: nuevoFecha,
                Portada: nuevoPortada,
                URL: nuevoURL,
            });
            alert("Libro actualizado correctamente");
            navigate("/listar-libros");
        }catch(error){
            console.error("Error al actualizar el libro: ", error);
        }
    };

    return(
        <div>
            <input
                type="text"
                placeholder="Actualizar título"
                value={nuevoTitulo}
                onChange={(e) => setNuevoTitulo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Actualizar autor"
                value={nuevoAutor}
                onChange={(e) => setNuevoAutor(e.target.value)}
            />
            <select value={nuevoGenero} onChange={(e) => setNuevoGenero(e.target.value)}>
                <option>Seleccionar género</option>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Terror">Terror</option>
            </select>
            <textarea placeholder="Descripción..." value={nuevoDescripcion} onChange={(e) => setNuevoDescripcion(e.target.value)}></textarea>
            <input
                type="number"
                placeholder="Año de publicación"
                value={nuevoFecha}
                onChange={(e) => setNuevoFecha(e.target.value)}
            />
            <label for="imagen">Imagen de portada</label>
            <input
                id="imagen"
                type="file"
                value={nuevoPortada}
                onChange={(e) => setNuevoPortada(e.target.value)}
            />
            <input
                type="url"
                placeholder="URL del libro"
                value={nuevoURL}
                onChange={(e) => setNuevoURL(e.target.value)}
            />
            <button onClick={GuardarCambios}>Actualizar libro</button>
        </div>
    )
}

export default EditarLibro;