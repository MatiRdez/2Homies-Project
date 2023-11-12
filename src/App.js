import logo from './logo.svg';
import './App.css';
import LogoApp from './components/LogoApp.js';
import BotonLogin from './components/BotonLogin';
import Login from './routes/Login';
import Registro from './routes/Registro';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AgregarLibros from './components/AgregarLibros.js';
import ListarLibros from './components/ListarLibros.js';
import EditarLibro from "./components/EditarLibro.js"; 
import Categorias from './components/Categorias.js';
import Accion from './routes/Categorías/Accion.js';
import Aventura from './routes/Categorías/Aventura.js';
import Terror from './routes/Categorías/Terror.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/agregar-libros' element={<AgregarLibros/>}></Route>
          <Route path='/listar-libros' element={<ListarLibros/>}></Route>
          <Route path='/editar-libro/:libroId' element={<EditarLibro/>}></Route>
          <Route path='/Navegar' element={<Categorias/>}></Route>
          <Route path='/accion' element={<Accion/>}></Route>
          <Route path='/aventura' element={<Aventura/>}></Route>
          <Route path='/terror' element={<Terror/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
