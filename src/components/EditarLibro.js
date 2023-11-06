import React, { useState, useEffect } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";

const EditarLibro = () => {

    const { libroId } = useParams();
    
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

    const GuardarCambios = async () => {
        try{
            await updateDoc(doc(db, "Libros", libroId), {
                Título: nuevoTitulo,
                Autor: nuevoAutor,
                Género: nuevoGenero,
            });
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
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Terror">Terror</option>
            </select>
            <button onClick={GuardarCambios}>Actualizar libro</button>
        </div>
    )
}

export default EditarLibro;