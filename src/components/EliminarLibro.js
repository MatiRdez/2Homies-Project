import React, { useState, useEffect } from "react";
import { collection, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";

const EliminarLibro = () => {

    const BotonEliminar = async () => {
        try{
            const libroRef = doc(db, "Libros", libroId);
            await deleteDoc(libroRef);
            alert("Libro eliminado con éxito");
        }
        catch(error){
            console.error("Error al eliminar el libro:", error);
        }
    };

    return(
        <div>
            <button onClick={BotonEliminar}>Eliminar</button>
        </div>
    )
}

export default EliminarLibro;