import logo from './logo.svg';
import './App.css';
import LogoApp from './components/LogoApp.js';
import BotonLogin from './components/BotonLogin';
import Login from './routes/Login';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <LogoApp/>
      <BrowserRouter>
        <NavLink to='/login'><BotonLogin texto='Iniciar sesión'/></NavLink>
        <NavLink to='/registro'><BotonLogin texto='Registrarse'/></NavLink>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
