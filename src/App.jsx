import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Noticias from './pages/Noticias/Noticias';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';


function App() {
  return (
    <>
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
