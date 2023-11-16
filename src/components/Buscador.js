import React, { useState } from 'react';
import '../components/styles/Buscador.css';

const Buscador = () => {
  const initialSuggestions = [
    'Terror',
    'Aventura',
    'Romance',
    'Acción',
    'Fantasía',
    'Historia'
  ];

  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [active, setActive] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    let filteredSuggestions = initialSuggestions.filter((data) =>
      data.toLowerCase().startsWith(input.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setActive(input !== ''); // Activa/desactiva según si hay texto en el input
  };

  

  return (
    <div className="container-buscador">
      
    </div>
  );
};

export default Buscador;
