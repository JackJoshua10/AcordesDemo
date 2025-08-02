import React from 'react';
import './Nosotros.css';
import fotoEquipo from '../../assets/equipo-canto.jpg'; // Asegúrate de tener esta imagen o usa otra

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros-section">
      <div className="container-nosotros">
        <div className="nosotros-texto">
          <h2>Nosotros</h2>
          <p>
            En <strong>CantoNoticia</strong> creemos que cada voz es única y merece ser escuchada. Somos una academia dedicada a formar cantantes con técnica, pasión y confianza.
          </p>
          <p>
            Nuestro equipo está formado por profesionales del canto con años de experiencia en escenarios nacionales e internacionales. A través de clases personalizadas, ayudamos a nuestros alumnos a alcanzar su máximo potencial vocal.
          </p>
        </div>
        <div className="nosotros-imagen">
          <img src={fotoEquipo} alt="Equipo de CantoNoticia" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
