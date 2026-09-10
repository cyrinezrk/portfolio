import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import FrameNav from "./components/FrameNav";
import StarField from "./components/StarField";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ui } from "./data/content";
import "./App.css";

const LANG_KEY = "portfolio:lang";
const THEME_KEY = "portfolio:theme";

/* Doit rester d'accord avec --bg dans theme.css : c'est la couleur que
   les navigateurs mobiles peignent derrière la barre d'adresse. */
const BROWSER_UI = { light: "#fbf7ff", dark: "#120e20" };

export default function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "fr" || saved === "en") return saved;
    } catch {
      /* navigation privée, stockage bloqué : on retombe sur la langue par défaut */
    }
    /* Le site s'ouvre en anglais, quelle que soit la langue du navigateur : les
       recruteurs et les équipes data ne sont pas tous francophones. Le français
       reste à un clic, et le choix est retenu d'une visite à l'autre. */
    return "en";
  });

  const t = ui[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANG_KEY, language);
    } catch {
      /* rien à faire : la préférence ne sera juste pas retenue */
    }
  }, [language]);

  const toggleLanguage = () => setLanguage((l) => (l === "fr" ? "en" : "fr"));

  /* Le site reste clair par défaut : le mode nuit est un choix, pas un
     réglage deviné depuis le système. Une fois choisi, il est retenu.
     La valeur est déjà posée sur <html> par le script d'index.html, avant
     le premier rendu, sinon la page clignoterait en blanc au chargement. */
  const [theme, setTheme] = useState(() => {
    try {
      const saved = window.localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* stockage bloqué : on ouvre en clair */
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", BROWSER_UI[theme]);
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* rien à faire : la préférence ne sera juste pas retenue */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((v) => (v === "dark" ? "light" : "dark"));

  // L'ordre des écrans : qui je suis, d'où je viens, ce que je fais, comment me joindre.
  const frames = [
    { id: "top", label: t.navHome },
    { id: "about", label: t.navAbout },
    { id: "projects", label: t.navWork },
    { id: "contact", label: t.navContact },
  ];

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="grain" aria-hidden="true" />
      <StarField />

      <a className="skip-link" href="#about">
        {language === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>

      <Nav
        t={t}
        language={language}
        onToggleLanguage={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <FrameNav frames={frames} />

      <main>
        <Hero t={t} />
        <About t={t} language={language} />
        <Projects t={t} language={language} />
        <Contact t={t} language={language} />
      </main>
    </>
  );
}
