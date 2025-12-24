import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Inicio.css';
import profile from '../images/profile.jpg';

function Inicio() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={profile} alt="Profile" />
        </div>
        <h1>{t('inicio.name')}</h1>
        <h2>{t('inicio.title')}</h2>
        <div className="redes">
          <a href="https://www.linkedin.com/in/martingwozdz">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:martin.gwozdz.it@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/5491135076377">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
