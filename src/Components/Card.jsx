import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ dentist }) => {
  
  // Función para agregar a favoritos
  const addToFavs = () => {
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!favs.find(fav => fav.id === dentist.id)) {
      favs.push(dentist);
      localStorage.setItem('favs', JSON.stringify(favs));
      alert(`${dentist.name} añadido a favoritos`);
    } else {
      alert(`${dentist.name} ya está en favoritos`);
    }
  };

  return (
    <div className="custom-card">
      <div className="custom-card-content">
        <h3 className="custom-card-title">{dentist.name}</h3>
        <p className="custom-card-username">Username: {dentist.username}</p>
      </div>
      <div className="custom-card-actions">
        <Link to={`/dentist/${dentist.id}`} className="custom-link">Ver Detalles</Link>
        <button className="custom-btn" onClick={addToFavs}>
          ADD FAV
        </button>
      </div>
    </div>
  );
};

export default Card;
