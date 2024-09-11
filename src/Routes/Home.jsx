import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import { ThemeContext } from '../Components/utils/global.context'; // Importa tu contexto // Importa el contexto del theme

const Home = () => {
  const [dentists, setDentists] = useState([]);  // Estado para almacenar los dentistas
  const { theme } = useContext(ThemeContext);    // Obtener el tema del contexto

  // Obtener los dentistas de la API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') // Cambia por tu API real
      .then(response => {
        setDentists(response.data);  // Guardar los datos en el estado
      })
      .catch(error => {
        console.error("Error al obtener los dentistas:", error);
      });
  }, []);

  return (
    <main className={theme === 'light' ? 'light-theme' : 'dark-theme'}> {/* Aplicar clase según el tema */}
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Renderizamos las cards aquí */}
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
}

export default Home;
