import logo from './logo.svg';
import './App.css';
import LogoApp from './components/LogoApp.js';
import BotonLogin from './components/BotonLogin';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <LogoApp/>
      <BrowserRouter>
        <NavLink to='/login'><BotonLogin texto='Iniciar sesión'/></NavLink>
        <Routes>
          <Route path='/login'></Route>
        </Routes>
      </BrowserRouter>
      <BotonLogin texto='Registrarse'/>
    </div>
  );
}

export default App;
