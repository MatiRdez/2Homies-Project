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

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setUserInput(suggestion);
    setActive(false);
    // Puedes realizar aquí cualquier acción adicional al seleccionar una sugerencia
  };

  return (
    <div className="container-buscador">
      <div className={`search-input-box ${active ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="¿Qué quieres buscar?"
          value={userInput}
          onChange={handleInputChange}
        />
        </div>
    </div>
  );
};

export default Buscador;
