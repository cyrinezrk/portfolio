import React, { useState, useEffect } from "react";
import "./Projet.css";

export default function Slides() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const slides = [
    {
      id: 1,
      title: "Locatio",
      text: "Notre mission était de créer un site permettant à professionnels et particuliers de proposer des produits à la location, pour quelques heures ou plusieurs mois. J’ai pris en charge la partie administration ainsi que le développement des pages listant les produits disponibles...",
      image: "/locatio.png",
      link: "",
    },
    {
      id: 2,
      title: "Chat GPT x Majoli",
      text: "Durant mon alternance, j’ai travaillé à améliorer le site de l’entreprise en automatisant la création des descriptions...",
      image: "majolichat.png",
      link: "",
    },
    {
      id: 3,
      title: "La chtite Marseillaise",
      text: "J’ai participé à la création du site de 'La Chtite Marseillaise', une artiste locale renommée...",
      image: "lachtite.png",
      link: "https://lachtitemarseillaise.com/",
    },
    {
      id: 4,
      title: "Pat VTC",
      text: "J’ai travaillé sur 'Pat VTC', un site web dédié à un service de VTC permettant aux utilisateurs de sélectionner une adresse...",
      image: "/patvtc.png",
      link: "https://patvtc.fr/",
    },
    {
      id: 5,
      title: "CogSpace",
      text: "Lors d’un projet scolaire, j’ai participé à la création d’un site web de base de connaissances...",
      image: "/cogspace.png",
      link: "",
    },
    {
      id: 6,
      title: "EcoSphere",
      text: "Lors d’une semaine intensive à l’Institut G4, nous avons travaillé sur une plateforme de sensibilisation écologique...",
      image: "ecoservice.png",
      link: "",
    },
    {
      id: 7,
      title: "We Are Jolies",
      text: "Lors d’un projet scolaire, j’ai participé à la création d’un site web de base de connaissances...",
      image: "/waj2.png",
      link: "https://wearejolies.com/",
    },
    {
      id: 8,
      title: "Circle",
      text: "Pour ce projet, nous avons créé un site e-commerce pour une marque de produits écoresponsables...",
      image: "/circle.png",
      link: "",
    },
    {
      id: 9,
      title: "Hangman",
      text: "À mon entrée à l’école Epitech, j’ai intégré une phase intensive appelée la piscine...",
      image: "/hangman.png",
      link: "https://github.com/nnevvw/hangman",
    },
  ];

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide slide${slide.id} ${
            index % 2 === 0 ? "row" : "row-reverse"
          }`}
        >
          <a href={slide.link} target="_blank" rel="noopener noreferrer">
            <img src={slide.image} alt={slide.title} className="slide-image" />
          </a>
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}

      {/* 🔼 Bouton scroll to top */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}
