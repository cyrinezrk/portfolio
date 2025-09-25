import './App.css';
import React, { useState } from 'react';
import Accueil from './components/Accueil';
import Projet from './components/Projet';
import Contact from './components/Contact';

function App() {
    const [activePage, setActivePage] = useState('Accueil');

  const handleNavClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/logo.png"
          className="App-logo"
          alt="logo"
          onClick={() => handleNavClick('Accueil')} // <-- ici la correction
        />
        <div className="nav_words">
          <p className={activePage === 'Accueil' ? 'active' : ''}
            onClick={() => handleNavClick('Accueil')}>Accueil</p>
          <p className={activePage === 'Projet' ? 'active' : ''}
            onClick={() => handleNavClick('Projet')}>Projet</p>
          <p className={activePage === 'Contact' ? 'active' : ''}
            onClick={() => handleNavClick('Contact')}>Contact</p>
        </div>
      </header>

      <div className='main'>
        {activePage === 'Accueil' && <Accueil />}
        {activePage === 'Projet' && <Projet />}
        {activePage === 'Contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
