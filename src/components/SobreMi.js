import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/SobreMi.css';

function SobreMi() {
  const { t } = useTranslation();

  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>{t('sobreMi.title')}</h2>
        <p><span>{t('sobreMi.description')}</span></p>
        <div className="fila">
          <div className="col">
            <h3>{t('sobreMi.personalData')}</h3>
            <ul>
              <li><strong>{t('sobreMi.birthday')}</strong> 12-07-1999</li>
              <li><strong>{t('sobreMi.phone')}</strong> +54 9 11 3507 6377</li>
              <li><strong>{t('sobreMi.email')}</strong> martin.gwozdz.it@gmail.com</li>
              <li><strong>{t('sobreMi.website')}</strong> www.Worldoftincho.com.ar</li>
              <li><strong>{t('sobreMi.address')}</strong> Buenos Aires, Argentina</li>
            </ul>
          </div>
          <div className="col">
            <h3>{t('sobreMi.interests')}</h3>
            <div className="contenedor-intereses">
              <div className="interes"><i className="fa-solid fa-robot"></i><span>{t('sobreMi.ai')}</span></div>
              <div className="interes"><i className="fa-solid fa-headphones"></i><span>{t('sobreMi.music')}</span></div>
              <div className="interes"><i className="fa-solid fa-umbrella-beach"></i><span>{t('sobreMi.travel')}</span></div>
              <div className="interes"><i className="fa-solid fa-house-chimney-window"></i><span>{t('sobreMi.family')}</span></div>
              <div className="interes"><i className="fa-solid fa-sailboat"></i><span>{t('sobreMi.yachting')}</span></div> 
              <div className="interes"><i className="fa-sharp fa-solid fa-otter"></i><span>{t('sobreMi.animals')}</span></div>
              <div className="interes"><i className="fa-sharp fa-solid fa-dumbbell"></i><span>{t('sobreMi.gym')}</span></div>
              <div className="interes"><i className="fa-sharp fa-solid fa-book-open"></i><span>{t('sobreMi.reading')}</span></div>
            </div>
          </div>
        </div>
        <a href="./documents/CV.pdf" download="CV-Martin-Gwozdz.pdf">
          <button>
            {t('sobreMi.downloadCV')} <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default SobreMi;
