import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Zastąp własnym Service ID
      'YOUR_TEMPLATE_ID', // Zastąp własnym Template ID
      formData,
      'YOUR_USER_ID' // Zastąp własnym User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Wiadomość wysłana pomyślnie!');
      setFormData({ email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Wystąpił błąd przy wysyłaniu wiadomości.');
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label className="label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div>
        <label className="label">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea"
          required
        />
      </div>
      <button type="submit" className="button">Wyślij</button>
    </form>
  );
};

export default ContactForm;