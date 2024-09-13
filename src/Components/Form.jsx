import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Components/utils/global.context'; // Importamos el contexto del tema



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const { theme } = useContext(ThemeContext); // Obtenemos el tema del contexto

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { fullName, email } = formData;
    if (fullName.length <= 5) {
      return 'El nombre completo debe tener más de 5 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Por favor ingresa un email válido.';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setFormError(error);
      setSuccessMessage('');
      return;
    }

    setFormError('');
    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail.`);
    console.log('Datos del formulario:', formData);

    setFormData({
      fullName: '',
      email: '',
    });
  };

  return (
    <div className={`contact-page-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1 className="center-align">Contacto</h1> <br /><br /><br />

      <form onSubmit={handleSubmit}>
        
        <div className="input-field">
          
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {formError && <p className="error-message">{formError}</p>}

        <button type="submit" className="btn">
          Enviar
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form> 
    </div>
  );
};

export default Form;