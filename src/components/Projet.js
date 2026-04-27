import React, { useState, useEffect } from "react";
import "./Projet.css";

export default function Projet({ language = "fr" }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const texts = {
    fr: {
      visitProject: "Voir le projet",
      projects: [
        {
          id: 1,
          title: "Locatio",
          text: "Notre mission était de créer un site permettant aux professionnels et aux particuliers de proposer des produits à la location, pour quelques heures ou plusieurs mois. J'ai pris en charge la partie administration ainsi que le développement des pages listant les produits disponibles. Réalisé avec Bubble, ce projet m'a permis de travailler sur la gestion de bases de données, la création de workflows et l'optimisation des interfaces utilisateur.",
          image: `${process.env.PUBLIC_URL}/locatio.png`,
          projectLink: null,
        },
        {
          id: 2,
          title: "Chat GPT x Majoli",
          text: "Durant mon alternance, j'ai travaillé sur l'automatisation de la création de descriptions pour les pages partenaires de domiciliation de l'entreprise. Avec ChatGPT, j'ai conçu un prompt universel capable de générer des textes détaillés et cohérents en intégrant automatiquement les informations utiles. Ce projet m'a permis d'approfondir mes compétences en prompt engineering, en intégration d'API et en optimisation de workflows.",
          image: `${process.env.PUBLIC_URL}/majolichat.png`,
          projectLink: null,
        },
        {
          id: 3,
          title: "La Chtite Marseillaise",
          text: "J'ai participé à la création du site de La Chtite Marseillaise, une artiste locale reconnue. Ce projet, principalement orienté front-end, m'a permis de perfectionner mes compétences en design web. Avec Bubble, nous avons conçu une interface attrayante et responsive, adaptée à tous les appareils, afin d'offrir une expérience fidèle à l'univers de l'artiste.",
          image: `${process.env.PUBLIC_URL}/lachtite.png`,
          projectLink: "https://lachtitemarseillaise.com/",
        },
        {
          id: 4,
          title: "Pat VTC",
          text: "Dans le cadre d'un projet scolaire, j'ai participé à la création d'un site web avec authentification, moteur de recherche et gestion des fiches. En tant que cheffe de projet et responsable design, j'ai utilisé React pour le front-end et MySQL pour la base de données, avec DBeaver et Docker. Ce projet a renforcé mes compétences techniques et organisationnelles.",
          image: `${process.env.PUBLIC_URL}/patvtc.png`,
          projectLink: "https://patvtc.fr/",
        },
        {
          id: 5,
          title: "CogSpace",
          text: "Lors d'une semaine intensive à l'Institut G4, nous avons travaillé en équipes sur un projet commun. Le défi consistait à créer une plateforme de sensibilisation aux gestes écologiques intégrant gamification et intelligence artificielle. Avec Vue.js, nous avons développé une application proposant des défis générés par l'IA, un système de récompenses et des classements.",
          image: `${process.env.PUBLIC_URL}/cogspace.png`,
          projectLink: null,
        },
        {
          id: 6,
          title: "EcoSphere",
          text: "EcoSphere est un projet centré sur l'écologie et l'engagement utilisateur. Nous avons imaginé une plateforme capable d'encourager les bonnes pratiques grâce à des mécaniques ludiques, à des défis récurrents et à une approche pédagogique. Ce travail m'a aidée à renforcer mes compétences en conception produit, en développement front-end et en collaboration d'équipe.",
          image: `${process.env.PUBLIC_URL}/ecoservice.png`,
          projectLink: null,
        },
        {
          id: 7,
          title: "We Are Jolies",
          text: "Chez We Are Jolies, j'ai contribué à plusieurs sujets liés à la maintenance web, au suivi des performances et à l'optimisation des process internes. Cette expérience m'a permis de mêler analyse, gestion de projet et amélioration continue, tout en travaillant sur des besoins concrets d'une marque digitale.",
          image: `${process.env.PUBLIC_URL}/waj2.png`,
          projectLink: "https://wearejolies.com/",
        },
        {
          id: 8,
          title: "Circle",
          text: "Pour ce projet, nous avons créé un site e-commerce dédié à une nouvelle marque de produits écoresponsables et zéro déchet. J'ai occupé le rôle de cheffe de projet en pilotant les maquettes, l'identité visuelle et l'univers graphique, tout en travaillant sur une stack moderne composée de React, Next.js, TypeScript et Tailwind CSS. Le site présentait la philosophie de la marque, son catalogue et des pages DIY.",
          image: `${process.env.PUBLIC_URL}/circle.png`,
          projectLink: null,
        },
        {
          id: 9,
          title: "Hangman",
          text: "À mon entrée à Epitech, j'ai intégré la piscine Python, une phase intensive destinée à renforcer rapidement nos bases en programmation. Parmi les premiers projets, nous avons réalisé le jeu du pendu. Cet exercice ludique et formateur m'a appris à structurer un programme, gérer la logique métier et améliorer la qualité du code. Il marque mes premiers pas concrets dans le développement.",
          image: `${process.env.PUBLIC_URL}/hangman.png`,
          projectLink: "https://github.com/cyrinezrk/hangman",
        },
      ],
    },
    en: {
      visitProject: "View project",
      projects: [
        {
          id: 1,
          title: "Locatio",
          text: "Our mission was to build a website where both professionals and private individuals could offer products for rent, whether for a few hours or several months. I handled the administration side as well as the development of the pages listing available products. Built with Bubble, this project helped me strengthen my skills in database management, workflow creation, and user interface optimization.",
          image: `${process.env.PUBLIC_URL}/locatio.png`,
          projectLink: null,
        },
        {
          id: 2,
          title: "Chat GPT x Majoli",
          text: "During my apprenticeship, I worked on automating the creation of descriptions for the company's business address partner pages. Using ChatGPT, I designed a universal prompt able to generate detailed and consistent texts while automatically inserting the relevant information. This project helped me deepen my skills in prompt engineering, API integration, and workflow optimization.",
          image: `${process.env.PUBLIC_URL}/majolichat.png`,
          projectLink: null,
        },
        {
          id: 3,
          title: "La Chtite Marseillaise",
          text: "I contributed to the creation of the website for La Chtite Marseillaise, a well-known local artist. This mainly front-end project allowed me to improve my web design skills. With Bubble, we designed an attractive and responsive interface adapted to every device to deliver an experience aligned with the artist's identity.",
          image: `${process.env.PUBLIC_URL}/lachtite.png`,
          projectLink: "https://lachtitemarseillaise.com/",
        },
        {
          id: 4,
          title: "Pat VTC",
          text: "As part of a school project, I helped build a website with authentication, a search engine, and record management. As project lead and design owner, I used React for the front end and MySQL for the database, along with DBeaver and Docker. This project strengthened both my technical and organizational skills.",
          image: `${process.env.PUBLIC_URL}/patvtc.png`,
          projectLink: "https://patvtc.fr/",
        },
        {
          id: 5,
          title: "CogSpace",
          text: "During an intensive week at Institut G4, we worked in teams on a shared project. The challenge was to create a platform promoting eco-friendly habits through gamification and artificial intelligence. Using Vue.js, we developed an application featuring AI-generated challenges, a reward system, and rankings.",
          image: `${process.env.PUBLIC_URL}/cogspace.png`,
          projectLink: null,
        },
        {
          id: 6,
          title: "EcoSphere",
          text: "EcoSphere is a project focused on ecology and user engagement. We designed a platform intended to encourage positive habits through playful mechanics, recurring challenges, and an educational approach. This work helped me improve my product thinking, front-end development, and teamwork skills.",
          image: `${process.env.PUBLIC_URL}/ecoservice.png`,
          projectLink: null,
        },
        {
          id: 7,
          title: "We Are Jolies",
          text: "At We Are Jolies, I contributed to several topics related to web maintenance, performance tracking, and internal process optimization. This experience allowed me to combine analysis, project management, and continuous improvement while working on the concrete needs of a digital brand.",
          image: `${process.env.PUBLIC_URL}/waj2.png`,
          projectLink: "https://wearejolies.com/",
        },
        {
          id: 8,
          title: "Circle",
          text: "For this project, we created an e-commerce website for a new eco-friendly and zero-waste product brand. I acted as project lead, overseeing wireframes, visual identity, and the overall graphic direction while working with a modern stack including React, Next.js, TypeScript, and Tailwind CSS. The website showcased the brand philosophy, product catalog, and DIY pages.",
          image: `${process.env.PUBLIC_URL}/circle.png`,
          projectLink: null,
        },
        {
          id: 9,
          title: "Hangman",
          text: "When I joined Epitech, I completed the Python pool, an intensive phase designed to quickly strengthen our programming foundations. One of the first projects was a Hangman game. This fun and educational exercise taught me how to structure a program, manage application logic, and improve code quality. It represents my very first concrete steps into software development.",
          image: `${process.env.PUBLIC_URL}/hangman.png`,
          projectLink: "https://github.com/cyrinezrk/hangman",
        },
      ],
    },
  };

  const currentText = texts[language] || texts.fr;

  return (
    <div className="relative">
      {currentText.projects.map((project, index) => (
        <div
          key={project.id}
          className={`slide slide${project.id} ${
            index % 2 === 0 ? "row" : "row-reverse"
          }`}
        >
          {project.projectLink ? (
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="slide-image" />
            </a>
          ) : (
            <img src={project.image} alt={project.title} className="slide-image" />
          )}
          <div className="slide-content">
            <h2>{project.title}</h2>
            <p>{project.text}</p>
            <div className="slide-actions">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-link"
                >
                  {currentText.visitProject}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
}
