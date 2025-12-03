import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function CompetencesSlider() {
  const competences = [
    { href: "https://mariadb.org/", img: `${process.env.PUBLIC_URL}/maria.png`, alt: "maria", name: "" },
    { href: "https://fr.react.dev/", img: `${process.env.PUBLIC_URL}/logo192.png`, alt: "react", name: "React" },
    { href: "https://www.python.org/", img: `${process.env.PUBLIC_URL}/pythoned.png`, alt: "python", name: "Python" },
    { href: "https://bubble.io/", img: `${process.env.PUBLIC_URL}/bubble.png`, alt: "bubble", name: "Bubble" },
    { href: "", img: `${process.env.PUBLIC_URL}/JS.png`, alt: "js", name: "JavaScript" },
    { href: "", img: `${process.env.PUBLIC_URL}/html.png`, alt: "html", name: "HTML" },
    { href: "https://www.shopify.com/fr", img: `${process.env.PUBLIC_URL}/shopify.png`, alt: "shopify", name: "Shopify" },
    { href: "https://trello.com/home", img: `${process.env.PUBLIC_URL}/trello.png`, alt: "trello", name: "Trello" },
    { href: "https://www.figma.com/fr-fr/", img: `${process.env.PUBLIC_URL}/Figma.png`, alt: "figma", name: "" },
    { href: "https://workspace.google.com/intl/fr/", img: `${process.env.PUBLIC_URL}/google.png`, alt: "google", name: "Workspace" },
    { href: "https://www.java.com/fr/", img: `${process.env.PUBLIC_URL}/java.png`, alt: "java", name: "" },
    { href: "https://www.phpmyadmin.net/", img: `${process.env.PUBLIC_URL}/Phpmyadmin.png`, alt: "php", name: "" },
    { href: "https://www.debian.org/index.fr.html", img: `${process.env.PUBLIC_URL}/debian.png`, alt: "debian", name: "Debian" },
    { href: "https://www.mysql.com/fr/", img: `${process.env.PUBLIC_URL}/MySQL.png`, alt: "sql", name: "" },
    { href: "", img: `${process.env.PUBLIC_URL}/LINUX.png`, alt: "linux", name: "" },


  ];  

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView="auto"
      loop={true}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={5000}
      style={{ padding: "10px" }}
    >
      {[...competences, ...competences].map((comp, idx) => (
        <SwiperSlide key={idx} style={{ width: '120px', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
          <a
            href={comp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center gap-10"
            style={{textDecoration:"none"}}
          >
            <div className="mb-2 flex items-center justify-center overflow-hidden rounded;
"  style={{ width: '70px', height:"70px", padding:"1em"}}>
              <img
                src={comp.img}
                alt={comp.alt}
                className="max-w-full max-h-full object-cover"
                  style={{ width: '100%', height:"100%", padding:"1em 0"}}
              />
            </div>
            <span className="flex text-sm font-medium mx-auto text-center w-full text-black" style={{color:"black"}}>{comp.name}</span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// export default function CompetencesSlider() {
//   const competences = [
//     // { href: "https://mariadb.org/", img: `${process.env.PUBLIC_URL}/maria.png`, alt: "maria", name: "Maria" },
//     { href: "https://fr.react.dev/", img: `${process.env.PUBLIC_URL}/logo192.png`, alt: "react", name: "React" },
//     { href: "https://www.python.org/", img: `${process.env.PUBLIC_URL}/pythoned.png`, alt: "python", name: "Python" },
//     { href: "https://bubble.io/", img: `${process.env.PUBLIC_URL}/bubble.png`, alt: "bubble", name: "Bubble" },
//     { href: "", img: `${process.env.PUBLIC_URL}/JS.png`, alt: "js", name: "JavaScript" },
//     { href: "", img: `${process.env.PUBLIC_URL}/html.png`, alt: "html", name: "HTML" },
//     { href: "https://www.shopify.com/fr", img: `${process.env.PUBLIC_URL}/shopify.png`, alt: "shopify", name: "Shopify" },
//     { href: "https://trello.com/home", img: `${process.env.PUBLIC_URL}/trello.png`, alt: "trello", name: "Trello" },
//     { href: "https://www.figma.com/fr-fr/", img: `${process.env.PUBLIC_URL}/Figma.png`, alt: "figma", name: "Figma" },
//     { href: "https://workspace.google.com/intl/fr/", img: `${process.env.PUBLIC_URL}/google.png`, alt: "google", name: "Google Workspace" },
//     { href: "https://www.java.com/fr/", img: `${process.env.PUBLIC_URL}/java.png`, alt: "java", name: "Java" },
//   ];

//   return (
//     <Swiper
//       modules={[Autoplay]}
//       spaceBetween={30}
//       slidesPerView={4}
//       loop={true}
//       freeMode={true}
//       freeModeMomentum={false}
//       allowTouchMove={false}
//       autoplay={{
//         delay: 0,
//         disableOnInteraction: false,
//       }}
//       speed={4000}
//       style={{ padding: "10px" }}
//       breakpoints={{
//         640: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1024: { slidesPerView: 5 },
//       }}
//     >
//       {competences.map((comp, idx) => (
//         <SwiperSlide key={idx} >
//           <a
//             href={comp.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="competence-slide "
//           >
//             <img src={comp.img} alt={comp.alt} className="logo " />
//             <span className="">{comp.name}</span>
//           </a>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }