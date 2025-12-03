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
      text: "Notre mission était de créer un site permettant à professionnels et particuliers de proposer des produits à la location, pour quelques heures ou plusieurs mois. J’ai pris en charge la partie administration ainsi que le développement des pages listant les produits disponibles. Nous avons réalisé ce projet avec Bubble, ce qui m’a permis de travailler sur la gestion de bases de données, la création de workflows, et l’optimisation des interfaces utilisateur. Malheureusement, je n’ai plus de lien vers le site, mais ce projet reste une expérience précieuse où j’ai pu développer mes compétences techniques tout en relevant de nombreux défis.",      
      image: `${process.env.PUBLIC_URL}/locatio.png`,
      link: "",
    },
    {
      id: 2,
      title: "Chat GPT x Majoli",
      text: "Durant mon alternance, j’ai travaillé à améliorer le site de l’entreprise en automatisant la création des descriptions pour les pages partenaires de domiciliation. Nous collaborons avec plusieurs partenaires à travers la France, chacun ayant une page dédiée présentant ses services et tarifs. Avec ChatGPT, j’ai conçu un prompt universel capable de générer des textes détaillés et cohérents, intégrant automatiquement les informations nécessaires. Ce projet m’a permis d’approfondir mes compétences en conception de prompts, intégration d’API et optimisation de workflows. Malheureusement, je n’ai plus de lien vers le site.",      
      image: `${process.env.PUBLIC_URL}/majolichat.png`,
      link: "",
    },
    {
      id: 3,
      title: "La chtite Marseillaise",
      text: "J’ai participé à la création du site de 'La Chtite Marseillaise', une artiste locale renommée. Ce projet, axé principalement sur le front-end, m’a permis de perfectionner mes compétences en design web. En utilisant Bubble, nous avons pu nous concentrer sur la conception et les fonctionnalités, créant une interface attrayante et responsive adaptée à tous les appareils. Avec Lorenzo Biancotto, nous avons exploité pleinement les capacités de Bubble pour offrir une expérience utilisateur fluide qui reflète le style unique de l’artiste. Ce projet a renforcé mes compétences en design web et ma capacité à développer des solutions techniques efficaces en équipe.",      
      image: `${process.env.PUBLIC_URL}/lachtite.png`,
      link: "https://lachtitemarseillaise.com/",
    },
    {
      id: 4,
      title: "Pat VTC",
      text: "Lors d’un projet scolaire, j’ai participé à la création d’un site web de base de connaissances avec authentification, moteur de recherche et gestion des fiches. En tant que cheffe de projet et responsable design, j’ai utilisé React pour le front-end et MySQL pour la base de données, avec DBeaver et Docker. Nous avons organisé le travail via Google Drive et Discord, réalisé les maquettes sur Figma et la présentation finale sur Canva. Ce projet a renforcé mes compétences techniques et organisationnelles.",
      image: `${process.env.PUBLIC_URL}/patvtc.png`,
      link: "https://patvtc.fr/",
    },
    {
      id: 5,
      title: "CogSpace",
      text: "Lors d’une semaine intensive à l’Institut G4, nous avons travaillé en équipes formées au hasard sur un projet commun. Cette année, le défi était de créer une plateforme de sensibilisation aux gestes écologiques, intégrant gamification et intelligence artificielle. Avec Vue.js, nous avons développé une application proposant des défis quotidiens ou hebdomadaires générés par l’IA, avec un système de “feuilles” pour récompenser les participants et créer des classements. Ce projet intense m’a permis de renforcer mes compétences techniques, créatives et collaboratives.",
      image:`${process.env.PUBLIC_URL}/cogspace.png`,
      link: "",
    },
    {
      id: 6,
      title: "EcoSphere",
      text: "Lors d’une semaine intensive à l’Institut G4, nous avons travaillé en équipes formées au hasard sur un projet commun. Cette année, le défi était de créer une plateforme de sensibilisation aux gestes écologiques, intégrant gamification et intelligence artificielle. Avec Vue.js, nous avons développé une application proposant des défis quotidiens ou hebdomadaires générés par l’IA, avec un système de “feuilles” pour récompenser les participants et créer des classements. Ce projet intense m’a permis de renforcer mes compétences techniques, créatives et collaboratives.",
      image: `${process.env.PUBLIC_URL}/ecoservice.png`,
      link: "",
    },
    {
      id: 7,
      title: "We Are Jolies",
      text: "Lors d’un projet scolaire, j’ai participé à la création d’un site web de base de connaissances avec authentification, moteur de recherche et gestion des fiches. En tant que cheffe de projet et responsable design, j’ai utilisé React pour le front-end et MySQL pour la base de données, avec DBeaver et Docker. Nous avons organisé le travail via Google Drive et Discord, réalisé les maquettes sur Figma et la présentation finale sur Canva. Ce projet a renforcé mes compétences techniques et organisationnelles.",
      image: `${process.env.PUBLIC_URL}/waj2.png`,
      link: "https://wearejolies.com/",
    },
    {
      id: 8,
      title: "Circle",
      text: "Pour ce projet, nous avons créé un site e-commerce pour une nouvelle marque de produits écoresponsables et zéro déchet, distincte de l’activité principale de l’entreprise. J’ai occupé le rôle de cheffe de projet, en pilotant la création des maquettes, l’identité visuelle et l’univers graphique, tout en utilisant une stack moderne (React, Next.js, TypeScript, Tailwind CSS) sans CMS. Le site présentait la philosophie zéro déchet, un catalogue de produits, des pages « Do It Yourself », et a été conçu en étroite collaboration avec le client pour refléter ses valeurs. Nous avons également créé notre agence web fictive, Data WOLF, pour structurer et professionnaliser le projet.",
      image: `${process.env.PUBLIC_URL}/circle.png`,
      link: "",
    },
    {
      id: 9,
      title: "Hangman",
      text: "À mon entrée à l’école Epitech, j’ai intégré une phase intensive appelée la piscine, un programme d’immersion destiné à renforcer nos compétences techniques dès le début. Nous avons commencé par une piscine Python, un apprentissage intensif qui m’a permis de consolider mes bases en programmation. Comme premier projet, nous avons réalisé le jeu du pendu, un exercice à la fois ludique et formateur qui m’a appris à structurer un programme, gérer la logique et optimiser le code. Ce projet a marqué mes premiers pas concrets dans le développement, et il symbolise le début d’un parcours riche en apprentissages. Ce n’est que le début : je viendrai enrichir ce portfolio avec de nouveaux projets, toujours plus ambitieux et variés, pour refléter ma progression et ma créativité.",      
      image: `${process.env.PUBLIC_URL}/hangman.png`,
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
