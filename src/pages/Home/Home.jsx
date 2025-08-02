import React, { useState, useEffect } from 'react';
import './Home.css';

import carrusel1 from '../../assets/carrusel1.jpg';
import carrusel2 from '../../assets/carrusel2.jpg';
import carrusel3 from '../../assets/carrusel3.jpg';

const carouselImages = [carrusel1, carrusel2, carrusel3];

const Home = () => {
  const scrollToNoticias = () => {
    const section = document.getElementById('noticias');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const [current, setCurrent] = useState(0);

  // Cambiar imagen manualmente
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % carouselImages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">Bienvenido a CantoNoticia</h1>
        <p className="home-subtitle">Donde tu voz encuentra su mejor versión</p>
        <button className="home-button" onClick={scrollToNoticias}>
          Explora nuestras clases
        </button>
      </div>
      {/* Carrusel de imágenes */}
      <div className="carousel-container">
  <button className="carousel-arrow left" onClick={prevImage} aria-label="Anterior">&#8592;</button>
  <a
    href="https://wa.me/51934099199"
    target="_blank"
    rel="noopener noreferrer"
    className="carousel-img-link"
  >
    <img
      src={carouselImages[current]}
      alt={`Carrusel ${current + 1}`}
      className="carousel-image"
    />
  </a>
  <button className="carousel-arrow right" onClick={nextImage} aria-label="Siguiente">&#8594;</button>
</div>
    </section>
  );
};

export default Home;