import React, { useEffect, useState } from "react";
import "./random.css";

const photos = [
  { url: `${process.env.PUBLIC_URL}/poulep/pouleprrr.png`, link: "https://youtu.be/hvL1339luv0?si=XZMtD5WVGv-x9YcQ" },
  { url: `${process.env.PUBLIC_URL}/poulep/poulup.png`, link: "https://youtu.be/IxX_QHay02M?si=sPzDcuIMXw7ZZ7sF" },
  { url: `${process.env.PUBLIC_URL}/poulep/pouulep.png`, link: "https://youtu.be/ptnRdZeNr4g?si=JrUuxEYHFbnsBRw_" },
  { url: `${process.env.PUBLIC_URL}/poulep/prrr.png`, link: "https://youtu.be/AtPrjYp75uA?si=ei1mDO60wUYdQAzj" }
];


const MARGIN_TOP = 150;
const MARGIN_BOTTOM = 50;
const MARGIN_SIDE = 20;

function getRandomEdgePosition(size) {
  const edge = Math.floor(Math.random() * 4); //calcule position aléatoire le long du bord 
  switch (edge) {
    case 0: 
      return { top: MARGIN_TOP, left: MARGIN_SIDE + Math.random() * (window.innerWidth - size - MARGIN_SIDE * 2) };
    case 1: 
      return { top: MARGIN_TOP + Math.random() * (window.innerHeight - size - MARGIN_TOP - MARGIN_BOTTOM), left: window.innerWidth - size - MARGIN_SIDE };
    case 2: 
      return { top: window.innerHeight - size - MARGIN_BOTTOM, left: MARGIN_SIDE + Math.random() * (window.innerWidth - size - MARGIN_SIDE * 2) };
    case 3: 
      return { top: MARGIN_TOP + Math.random() * (window.innerHeight - size - MARGIN_TOP - MARGIN_BOTTOM), left: MARGIN_SIDE };
    default:
      return { top: MARGIN_TOP, left: MARGIN_SIDE };
  }
}

export default function RandomPhotos() { //etat qui contient image(taille) liens positions 
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => { //toute les 3s, selection img aléatoire, position aléatoire sur un bord 
    const size = 100; 
    const interval = setInterval(() => {
      const photo = photos[Math.floor(Math.random() * photos.length)];
      const position = getRandomEdgePosition(size);

      setCurrentPhoto({
        ...photo,
        position,
        size
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  if (!currentPhoto) return null; //renvoie rien si pas de choix 

  return (
    <img
      src={currentPhoto.url}
      alt="Random"
      className="random-photo"
      style={{
        top: `${currentPhoto.position.top}px`,
        left: `${currentPhoto.position.left}px`,
        width: `${currentPhoto.size}px`,
        height: `${currentPhoto.size}px`
      }}
      onClick={() => window.open(currentPhoto.link, "_blank")}
    />
  );
}
