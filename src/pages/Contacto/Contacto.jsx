import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-section">
      <h2 className="contacto-title">Contáctanos</h2>

      <div className="contacto-content">
        <div className="contacto-info">
          <p><strong>Dirección:</strong> Av. Los Álamos 123, Lima, Perú</p>
          <p><strong>Teléfono:</strong> +51 999 888 777</p>
          <p><strong>Email:</strong> contacto@cantonoticia.com</p>
        </div>

        <div className="contacto-mapa">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62413.825603528545!2d-77.07013380898525!3d-12.121449626121526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8137c30393f%3A0x5268cb2b1c4b162b!2sMiraflores!5e0!3m2!1ses-419!2spe!4v1754103391136!5m2!1ses-419!2spe"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </section>
  );
};

export default Contacto;
