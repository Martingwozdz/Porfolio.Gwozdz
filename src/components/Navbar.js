import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  // 🔒 Cierra el menú automáticamente al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuVisible) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuVisible]);

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#inicio" onClick={closeMenu}>TINCHO</a>
        </div>

        <nav id="nav" className={menuVisible ? 'visible' : ''}>
          <ul>
            <li><a href="#sobremi" onClick={closeMenu}>{t('navbar.about')}</a></li>
            <li><a href="#skills" onClick={closeMenu}>{t('navbar.skills')}</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>{t('navbar.projects')}</a></li>
            <li><a href="#education" onClick={closeMenu}>{t('navbar.education')}</a></li>

            {/* 🌍 Selector de idioma */}
            <li className="lang-switch">
              <button onClick={() => changeLanguage('en')} aria-label="English">
                🇬🇧
              </button>
              <button onClick={() => changeLanguage('es')} aria-label="Español">
                🇦🇷
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-responsive" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
