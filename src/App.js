import logo from './logo.svg';
import './App.css';
import LogoApp from './components/LogoApp.js';
import BotonLogin from './components/BotonLogin';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <LogoApp/>
      <BotonLogin texto='Iniciar sesión'/>
      <BotonLogin texto='Registrarse'/>
    </div>
  );
}

export default App;
