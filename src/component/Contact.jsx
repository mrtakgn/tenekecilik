import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact" id="iletisim">
      <div className="contact-container">
        <h1>İletişim</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Bize Ulaşın</h2>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Adres</h3>
                <p>İzmir, Türkiye<br/>Urla ve çevre bölgelere hizmet</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Telefon</h3>
                <p>+90 (232) 123 45 67</p>
                <p>+90 (555) 123 45 67</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h3>E-posta</h3>
                <p>info@tenekecilik.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cumartesi: 08:00 - 19:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
