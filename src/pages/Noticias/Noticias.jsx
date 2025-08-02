import React, { useState, useEffect } from 'react';
import './Noticias.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore';

// Imágenes fijas para las noticias destacadas
import noticia1 from '../../assets/noticia1.jpg';
import noticia2 from '../../assets/noticia2.jpg';
import noticia3 from '../../assets/noticia3.jpg';

const Noticias = () => {
  // Estado para noticias de Firebase
  const [noticias, setNoticias] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  // Cargar noticias desde Firebase
  useEffect(() => {
    const fetchNoticias = async () => {
      const q = query(collection(db, "noticias"), orderBy("fecha", "desc"));
      const querySnapshot = await getDocs(q);
      const datos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNoticias(datos);
    };
    fetchNoticias();
  }, []);

  // Agregar noticia a Firebase
  const handleAgregarNoticia = async (e) => {
    e.preventDefault();
    if (!titulo || !contenido) return;
    await addDoc(collection(db, "noticias"), {
      titulo,
      contenido,
      fecha: serverTimestamp()
    });
    setTitulo('');
    setContenido('');
    // Recargar noticias
    const q = query(collection(db, "noticias"), orderBy("fecha", "desc"));
    const querySnapshot = await getDocs(q);
    const datos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNoticias(datos);
  };

  return (
    <section id="noticias" className="noticias-section">
      <h2 className="noticias-title">Últimas Noticias</h2>

      {/* Formulario para agregar noticia */}
      <form className="noticia-form" onSubmit={handleAgregarNoticia}>
        <input
          type="text"
          placeholder="Título de la noticia"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Contenido de la noticia"
          value={contenido}
          onChange={e => setContenido(e.target.value)}
        />
        <button type="submit">Agregar Noticia</button>
      </form>

      <div className="noticias-grid">
        {/* Noticias fijas */}
        <a
          href="https://wa.me/51934099199?text=Hola%20CantoNoticia!%20Estoy%20interesado%20en%20el%20concierto%20de%20agosto"
          target="_blank"
          rel="noopener noreferrer"
          className="noticia-card"
        >
          <img src={noticia1} alt="Noticia 1" className="noticia-img" />
          <h3>Concierto de estudiantes – Agosto 2025</h3>
          <p>Los alumnos de CantoNoticia presentarán un recital abierto al público con repertorio clásico y contemporáneo.</p>
        </a>

        <article className="noticia-card">
          <img src={noticia2} alt="Noticia 2" className="noticia-img" />
          <h3>Nuevo curso: Canto para principiantes</h3>
          <p>Inscríbete al nuevo taller de iniciación al canto. Ideal para quienes quieren empezar desde cero.</p>
        </article>

        <article className="noticia-card">
          <img src={noticia3} alt="Noticia 3" className="noticia-img" />
          <h3>Semana de audiciones abiertas</h3>
          <p>¿Te gustaría formar parte de un ensamble vocal? ¡Ven a audicionar!</p>
        </article>

        {/* Noticias dinámicas desde Firebase */}
        {noticias.map(noticia => (
          <article className="noticia-card" key={noticia.id}>
            <h3>{noticia.titulo}</h3>
            <p>{noticia.contenido}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Noticias;