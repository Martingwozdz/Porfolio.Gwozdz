import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi.js';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import '../src/styles.css';
import Education from './components/Education.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <SobreMi />
      <Skills />
      <Portfolio />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
