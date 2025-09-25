import React from "react";
import "./Projet.css";

export default function Slides() {
  return (
    <div className="relative">
      <div className="slide slide1">
        <h2>The First slide</h2>
        <p>Scroll Down for next slide</p>
      </div>

      <div className="slide slide2">
        <h2>The Second slide</h2>
        <p>Scroll Down for next slide</p>
      </div>

      <div className="slide slide3">
        <h2>The Third slide</h2>
        <p>Scroll Down</p>
      </div>

      <div className="slide slide4">
        <h2>The Fourth slide</h2>
      </div>
    </div>
  );
}
