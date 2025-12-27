import React from 'react';
import { useTranslation } from 'react-i18next';
import birasLogo from '../images/biras.jpg';
import portfolioVideo from '../images/portfolio-bg.mp4';
import '../styles/Portfolio.css';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="portfolio" id="portfolio">
      
      {/* VIDEO DE FONDO */}
      <video
        className="portfolio-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={portfolioVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="portfolio-overlay"></div>

      {/* CONTENIDO */}
      <div className="contenido-seccion">
        <h2>{t('portfolio.title')}</h2>

        <div className="galeria">
          <div className="proyecto">
            <a
              href="https://www.biras.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Biras Creek Resort"
            >
              <img src={birasLogo} alt="Biras Creek Resort" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
