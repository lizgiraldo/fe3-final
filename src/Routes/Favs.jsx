import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card'; // Reutilizamos el componente Card que ya tienes
import { ThemeContext } from '../Components/utils/global.context'; // Importamos el contexto de tema

const Favs = () => {
  const [favorites, setFavorites] = useState([]);  // Estado para almacenar los favoritos
  const { theme } = useContext(ThemeContext);  // Accedemos al tema del contexto

  // Cargar los favoritos del localStorage cuando el componente se monta
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavorites(storedFavs);
  }, []);

  return (
    <div className={theme === 'light' ? 'light-theme container' : 'dark-theme container'}>
      <h1 className="center-align">Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* Renderizamos las cards correspondientes a los favoritos */}
        {favorites.length > 0 ? (
          favorites.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No tienes dentistas en favoritos aún.</p>
        )}
      </div>
    </div>
  );
}

export default Favs;
