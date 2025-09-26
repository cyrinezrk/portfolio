import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function CompetencesSlider() {
  const competences = [
    { href: "https://fr.react.dev/", img: "/logo192.png", alt: "react", name: "React" },
    { href: "https://www.python.org/", img: "/pythoned.png", alt: "python", name: "Python" },
    { href: "https://bubble.io/", img: "/bubble.png", alt: "bubble", name: "Bubble" },
    { href: "", img: "/JS.png", alt: "js", name: "JavaScript" },
    { href: "", img: "/html.png", alt: "html", name: "HTML" },
    { href: "https://www.shopify.com/fr", img: "/shopify.png", alt: "shopify", name: "Shopify" },
    { href: "https://trello.com/home", img: "/trello.png", alt: "trello", name: "Trello" },
    { href: "https://www.figma.com/fr-fr/", img: "/Figma.png", alt: "figma", name: "Figma" },
    { href: "https://workspace.google.com/intl/fr/", img: "/google.png", alt: "google", name: "Google Workspace" },
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
