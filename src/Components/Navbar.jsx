import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Components/utils/global.context'; // Importa tu contexto

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Accede al tema y la función de cambio de tema

  return (
    <nav className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}>
      <h2>Clinica-Lizeth-Gladys</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/favs">Destacados</Link></li>
      </ul>
      {/* Botón para cambiar de tema */}
      <button onClick={toggleTheme}>
        Change to {theme === 'light' ? 'Dark' : 'Light'} theme
      </button>
    </nav>
  );
}

export default Navbar;
