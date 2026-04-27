import "./App.css";
import React, { useState, useEffect } from "react";
import Accueil from "./components/Accueil";
import Projet from "./components/Projet";
import Contact from "./components/Contact";
// import RandomPhotos from "./components/random";

function App() {
  const [activePage, setActivePage] = useState("Accueil");
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("fr");

  const translations = {
    fr: {
      banner: "Portfolio en cours de mise à jour ! Contactez-moi pour découvrir mes derniers projets ;p",
      nav: {
        Accueil: "Accueil",
        Projet: "Projets",
        Contact: "Contact",
      },
      role: "Étudiante en informatique",
      github: "GitHub",
      downloadCv: "Télécharger mon CV",
      switchLanguage: "EN",
      switchLanguageAria: "Passer le site en anglais",
    },
    en: {
      banner: "Portfolio currently being updated! Contact me to learn more about my latest projects ;p",
      nav: {
        Accueil: "Home",
        Projet: "Projects",
        Contact: "Contact",
      },
      role: "Computer Science Student",
      github: "GitHub",
      downloadCv: "Download my resume",
      switchLanguage: "FR",
      switchLanguageAria: "Switch website to French",
    },
  };

  const currentText = translations[language];

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "fr" ? "en" : "fr"));
  };

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <img
        src={`${process.env.PUBLIC_URL}/violet.png`}
        alt="Background"
        className="App-background"
      />
      {/* <RandomPhotos /> */}

      <div className={`hero ${activePage === "Projet" ? "hero-projet" : ""}`}>
        <div className="top-banner">
          <p>{currentText.banner}</p>
        </div>

        <header className={`App-header ${scrolled ? "scrolled" : ""}`}>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="App-logo"
            alt="Logo Cyrine Zarkouna"
            onClick={() => handleNavClick("Accueil")}
          />
          <nav className="nav_words">
            {["Accueil", "Projet", "Contact"].map((page) => (
              <p
                key={page}
                className={activePage === page ? "active" : ""}
                onClick={() => handleNavClick(page)}
                tabIndex={0}
                onKeyDown={(event) => event.key === "Enter" && handleNavClick(page)}
              >
                {currentText.nav[page]}
              </p>
            ))}
          </nav>

          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={currentText.switchLanguageAria}
          >
            {currentText.switchLanguage}
          </button>
        </header>

        <div className="who">
          <h1>Zarkouna Cyrine</h1>
          <p>{currentText.role}</p>
        </div>

        <ul className="reseaux">
          <li>
            <a
              href="https://github.com/cyrinezrk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={currentText.github}
            >
              <svg className="social-icon github-icon" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.95 10.95 0 0 1 12 6.05c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cyrine-zarkouna-6022301b1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={`${process.env.PUBLIC_URL}/linkedin.png`} className="social-icon" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cyrine_zrk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={`${process.env.PUBLIC_URL}/instagram.png`} className="social-icon" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="mailto:cyrine@example.com" aria-label="Email">
              <img src={`${process.env.PUBLIC_URL}/email.png`} className="social-icon" alt="Email" />
            </a>
          </li>
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/CVCyrine.pdf`}
              download="Cyrine_Zarkouna_CV.pdf"
              aria-label={currentText.downloadCv}
            >
              <img src={`${process.env.PUBLIC_URL}/cv.png`} className="social-icon" alt="cv" />
            </a>
          </li>
        </ul>
      </div>

      <main className="main">
        {activePage === "Accueil" && <Accueil language={language} />}
        {activePage === "Projet" && <Projet language={language} />}
        {activePage === "Contact" && <Contact language={language} />}
      </main>
    </div>
  );
}

export default App;
