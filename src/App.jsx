import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Noticias from './pages/Noticias/Noticias';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';


function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={handleClose}
        >
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()} // Evita cerrar al hacer click dentro
          >
            <h2 className="modal-title">¡Inscríbete Ya!</h2>
            <a
              href="https://wa.me/51934099199"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
            >
              Más información
            </a>
          </div>
        </div>
      )}

      {/* Tu contenido normal */}
      <Navbar />
      <main>
        <Home />
        <Noticias />
        <Nosotros />
        <Contacto />
      </main>
    </>
  );
}

export default App;
