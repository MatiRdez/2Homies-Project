import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const Libros = () => {
    return(
        <div>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
            />
        </div>
    )
}