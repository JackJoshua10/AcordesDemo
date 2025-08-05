import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar" role="banner">
      <nav className="navbar-container" role="navigation" aria-label="Main navigation">
        <a href="#inicio" className="logo">Logo/Acrodes</a>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          <span className="hamburger"></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#noticias" className="nav-link">Noticias</a>
          <a href="#nosotros" className="nav-link">Nosotros</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;