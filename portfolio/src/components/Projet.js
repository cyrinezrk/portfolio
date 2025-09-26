import React from "react";
import "./Projet.css";

export default function Slides() {
  const slides = [
    {
      id: 1,
      title: "Concerf",
      text: "Ceci est le premier projet auquels j'ai participé durant mes études, j'en parlerais plus tard !!",
      image: "/concerf1.png",
    },
    {
      id: 2,
      title: "Locatio",
      text: "Mon premier projet en tant qu'apprentie développeuse web",
      image: "/locatio.png",
      link: "",
    },
    {
      id: 3,
      title: "Chat GPT x Majoli",
      text: "Mon premier projet seul avec de l'intégration IA.",
      image: "majolichat.png",
      link: "",
    },
    {
      id: 4,
      title: "La chtite Marseillaise",
      text: "Un des projets que j'ai pu mener durant mon alternance, un site web pour une designeuse graphique.",
      image: "lachtite.png",
      link: "https://lachtitemarseillaise.com/",
    },
    {
      id: 5,
      title: "PAt VTC",
      text: "Un site que j'ai développé en entreprise pour un chauffeur vtc sa propre plateforme de réservtion.",
      image: "/patvtc.png",
      link: "https://patvtc.fr/",
    },
    {
      id: 6,
      title: "CogSpace",
      text: "Un projet au sein de l'institut g4 pour commencer l'année en tant que chef de projet, je me suis bcp investi dans le développement du backoffice.",
      image: "/cogspace.png",
      link: "",
    },
    {
      id: 7,
      title: "EcoSphere",
      text: "Projet de Cercle de Projet.",
      image: "ecoservice.png",
      link: "",
    },
    {
      id: 8,
      title: "We Are Jolies",
      text: "Travail en interne mais voci ce que j'ai appris.",
      image: "/waj2.png",
      link: "https://wearejolies.com/",
    },
    {
      id: 9,
      title: "Circle",
      text: "Ecommerce ecologique, complet.",
      image: "/circle.png",
      link: "",
    },
    {id: 10,
      title:"Hangman",
      text: "Premier projet en Piscine Python au sein d'épitech",
      image: "/hangman.png",
      link: "https://github.com/nnevvw/hangman",
    }
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
    </div>
  );
}
