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

/* Doit suivre --bg dans theme.css. */
const BROWSER_UI = { light: "#fbf7ff", dark: "#120e20" };

export default function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "fr" || saved === "en") return saved;
    } catch {
      /* stockage bloqué */
    }
    return "en";
  });

  const t = ui[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANG_KEY, language);
    } catch {
      /* stockage bloqué */
    }
  }, [language]);

  const toggleLanguage = () => setLanguage((l) => (l === "fr" ? "en" : "fr"));

  /* Le thème est déjà posé sur <html> par index.html, avant le premier rendu. */
  const [theme, setTheme] = useState(() => {
    try {
      if (window.localStorage.getItem(THEME_KEY) === "light") return "light";
    } catch {
      /* stockage bloqué */
    }
    return "dark";
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
