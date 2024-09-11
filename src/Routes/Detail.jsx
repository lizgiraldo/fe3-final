import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../Components/utils/global.context'; // Importa el contexto del tema

const Detail = () => {
  const { id } = useParams(); // Obtener el ID del dentista desde la URL
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { theme } = useContext(ThemeContext); // Accedemos al tema desde el contexto

  useEffect(() => {
    // Hacer una solicitud para obtener la información del dentista
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)  // Cambia esta URL por la tuya
      .then(response => {
        setDentist(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dentist details:', error);
        setError('No se pudo cargar la información del dentista.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1>Detalle del Dentista</h1>
      {dentist && (
        <div className="dentist-details">
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Sitio Web:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      )}
    </div>
  );
};

export default Detail;