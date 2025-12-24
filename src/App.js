import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi.js';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import '../src/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <SobreMi />
      <Skills />
      <Portfolio />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
