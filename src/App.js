import logo from './logo.svg';
import './App.css';
import LogoApp from './components/LogoApp.js';
import BotonLogin from './components/BotonLogin';

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
