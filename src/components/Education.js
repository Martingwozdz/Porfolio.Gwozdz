import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Education.css';

import p5Logo from '../images/p5logo.jpg';
import tiffinLogo from '../images/TIFFINLOGO.jpg';

function Education() {
  const { t } = useTranslation();

  return (
    <section className="education" id="education">
      {/* Fondos */}
      <div className="education-bg left-bg"></div>
      <div className="education-bg right-bg"></div>

      <div className="education-overlay">
        <h2>{t('education.title')}</h2>

        <div className="education-grid">
          {/* Plataforma 5 */}
          <a
            href="https://www.plataforma5.la"
            target="_blank"
            rel="noopener noreferrer"
            className="education-card"
          >
            <img src={p5Logo} alt="Plataforma 5 Logo" className="edu-logo" />
            <h3>Plataforma 5</h3>
            <p>{t('education.plataforma5.description')}</p>
          </a>

          {/* Tiffin */}
          <a
            href="https://www.tiffin.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="education-card"
          >
            <img src={tiffinLogo} alt="Tiffin University Logo" className="edu-logo" />
            <h3>Tiffin University</h3>
            <p>{t('education.tiffin.description')}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
