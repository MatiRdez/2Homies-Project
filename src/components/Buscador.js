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

  
  return (
    <div className="container-buscador">
      
    </div>
  );
};

export default Buscador;
