import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function CompetencesSlider() {
  const competences = [
    { href: "https://fr.react.dev/", img: `${process.env.PUBLIC_URL}/logo192.png`, alt: "react", name: "React" },
    { href: "https://www.python.org/", img: `${process.env.PUBLIC_URL}/pythoned.png`, alt: "python", name: "Python" },
    { href: "https://bubble.io/", img: `${process.env.PUBLIC_URL}/bubble.png`, alt: "bubble", name: "Bubble" },
    { href: "", img: `${process.env.PUBLIC_URL}/JS.png`, alt: "js", name: "JavaScript" },
    { href: "", img: `${process.env.PUBLIC_URL}/html.png`, alt: "html", name: "HTML" },
    { href: "https://www.shopify.com/fr", img: `${process.env.PUBLIC_URL}/shopify.png`, alt: "shopify", name: "Shopify" },
    { href: "https://trello.com/home", img: `${process.env.PUBLIC_URL}/trello.png`, alt: "trello", name: "Trello" },
    { href: "https://www.figma.com/fr-fr/", img: `${process.env.PUBLIC_URL}/Figma.png`, alt: "figma", name: "Figma" },
    { href: "https://workspace.google.com/intl/fr/", img: `${process.env.PUBLIC_URL}/google.png`, alt: "google", name: "Google Workspace" },
    { href: "https://www.java.com/fr/", img: `${process.env.PUBLIC_URL}/java.png`, alt: "java", name: "Java" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      freeMode={true}
      freeModeMomentum={false}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={4000}
      style={{ padding: "10px" }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {competences.map((comp, idx) => (
        <SwiperSlide key={idx} className="flex flex-col items-center">
          <a
            href={comp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="competence-slide flex flex-col items-center"
          >
            <img src={comp.img} alt={comp.alt} className="logo w-16 h-16 object-contain mb-2" />
            <span className="text-sm text-center font-medium">{comp.name}</span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
