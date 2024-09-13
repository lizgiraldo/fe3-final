import React, { useContext } from 'react'; // Asegúrate de importar useContext
import { ThemeContext } from '../Components/utils/global.context'; // Importa tu contexto

const Footer = () => {
  const { theme } = useContext(ThemeContext); // Accede al tema actual

  return (
    <footer className={`footer ${theme === 'dark' ? 'footer-dark' : 'footer-light'}`}>
      <div className='footerInicial'>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
      </div>
      <div className='footerIconos'>
          
          <img src="/images/ico-facebook.png"  alt="Facebook" />
          <img src="/images/ico-instagram.png"  alt="Instagram" />
          <img src="/images/ico-tiktok.png"  alt="Tiktok" />
          <img src="/images/ico-whatsapp.png"  alt="WhatsApp" />
      </div>
    </footer>
  );
}

export default Footer;