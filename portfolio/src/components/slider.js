import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CompetencesSlider() {
  const competences = [
    { href: "https://fr.react.dev/", img: "/logo192.png", alt: "react" },
    { href: "https://www.python.org/", img: "/pythoned.png", alt: "python" },
    { href: "https://bubble.io/", img: "/bubble.png", alt: "bubble" },
    { href: "", img: "/JS.png", alt: "js" },
    { href: "", img: "/html.png", alt: "html" },
    { href: "https://www.shopify.com/fr", img: "/shopify.png", alt: "shopify" },
    { href: "https://trello.com/home", img: "/trello.png", alt: "trello" },
    { href: "https://www.figma.com/fr-fr/", img: "/Figma.png", alt: "figma" },
    { href: "https://workspace.google.com/intl/fr/", img: "/google.png", alt: "google" },
  ];

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      loop
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      style={{ padding: "10px" }}
    >
      {competences.map((comp, idx) => (
        <SwiperSlide key={idx}>
          <a href={comp.href} target="_blank" rel="noopener noreferrer" className="competence-slide">
            <img src={comp.img} alt={comp.alt} className="logo" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
