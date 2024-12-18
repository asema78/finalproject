import React, { useState } from 'react';
import './contacts.css'
function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [status, setStatus] = useState(null);
    
      // Обработчик изменений в полях формы
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Обработчик отправки формы
      const handleSubmit = (e) => {
        e.preventDefault();
        // Тут обычно отправка данных на сервер или обработка
        setStatus('Ваше сообщение отправлено!');
        setFormData({ name: '', email: '', message: '' });
      };

  return (
    <div className="contacts-container">
    <div className="contacts-content">
      <h1 className="contacts-title">Контакты</h1>
      <p className="contacts-description">
        Мы всегда рады общению! Напишите нам, и мы постараемся ответить как можно скорее.
      </p>

      {/* Контактная форма */}
      <form className="contacts-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Ваш email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Отправить</button>
      </form>

      {/* Статус отправки */}
      {status && <div className="status-message">{status}</div>}

      <div className="contact-info">
        <h2>Наши контакты:</h2>
        <p>Email: <a href="mailto:info@bridge-to-future.com">info@bridge-to-future.com</a></p>
        <p>Телефон: <a href="tel:+1234567890">+996500337705</a></p>
      </div>
    </div>
  </div>
  );
}

export default Contacts;