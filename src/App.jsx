import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './Components/utils/global.context'; // Importa tu proveedor de tema
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Redirige la ruta raíz a /Home */}
          <Route path="/" element={<Navigate to="/Home" />} />
          
          {/* Define la ruta /Home */}
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
