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
        {[ // Array para recorrer las noticias fijas
          { img: noticia1, titulo: "Concierto de estudiantes – Agosto 2025", texto: "Los alumnos de CantoNoticia presentarán un recital abierto al público con repertorio clásico y contemporáneo." },
          { img: noticia2, titulo: "Nuevo curso: Canto para principiantes", texto: "Inscríbete al nuevo taller de iniciación al canto. Ideal para quienes quieren empezar desde cero." },
          { img: noticia3, titulo: "Semana de audiciones abiertas", texto: "¿Te gustaría formar parte de un ensamble vocal? ¡Ven a audicionar!" }
        ].map((noti, idx) => (
          <a
            key={idx}
            href="https://wa.me/51934099199?text=Hola%20CantoNoticia!%20Estoy%20interesado%20en%20más%20información%20sobre%20las%20noticias"
            target="_blank"
            rel="noopener noreferrer"
            className="noticia-card"
          >
            <img src={noti.img} alt={noti.titulo} className="noticia-img" />
            <h3>{noti.titulo}</h3>
            <p>{noti.texto}</p>
          </a>
        ))}

        {/* Noticias dinámicas desde Firebase */}
        {noticias.map(noticia => (
          <a
            key={noticia.id}
            href="https://wa.me/51934099199?text=Hola%20CantoNoticia!%20Estoy%20interesado%20en%20más%20información%20sobre%20las%20noticias"
            target="_blank"
            rel="noopener noreferrer"
            className="noticia-card"
          >
            {noticia.imagen && (
              <img src={noticia.imagen} alt={noticia.titulo} className="noticia-img" />
            )}
            <h3>{noticia.titulo}</h3>
            <p>{noticia.contenido}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Noticias;