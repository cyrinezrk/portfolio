import React from "react";
import "./ProjectCover.css";

/* Motif dessiné pour les projets sans capture d'écran. */

function Bars() {
  const values = [46, 72, 58, 88, 64, 40, 76];
  return (
    <div className="cover-bars" aria-hidden="true">
      {values.map((v, i) => (
        <span key={i} style={{ height: `${v}%`, animationDelay: `${i * 0.09}s` }} />
      ))}
    </div>
  );
}

function Book() {
  const lines = [96, 88, 72, 92, 64, 84, 78, 56];
  const marked = new Set([1, 4, 6]);
  return (
    <div className="cover-book" aria-hidden="true">
      {lines.map((w, i) => (
        <span
          key={i}
          className={marked.has(i) ? "is-marked" : ""}
          style={{ width: `${w}%`, animationDelay: `${i * 0.07}s` }}
        />
      ))}
    </div>
  );
}

function Veil() {
  const cards = [0, 1, 2];
  const lines = [88, 62, 74, 46];
  return (
    <div className="cover-veil" aria-hidden="true">
      {cards.map((c) => (
        <span key={c} className={`veil-card v${c}`}>
          {lines.map((w, i) => (
            <i key={i} style={{ width: `${w}%` }} />
          ))}
        </span>
      ))}
      <span className="veil-sweep" />
    </div>
  );
}

export default function ProjectCover({ project, alt = "" }) {
  if (project.image) {
    // Les planches se montrent entières, les captures supportent le recadrage.
    return (
      <img
        src={project.image}
        alt={alt}
        loading="lazy"
        className={project.fit === "contain" ? "is-contain" : ""}
      />
    );
  }

  return (
    <div className={`cover cover-${project.cover || "plain"}`}>
      {project.cover === "bars" && <Bars />}
      {project.cover === "book" && <Book />}
      {project.cover === "veil" && <Veil />}
    </div>
  );
}
