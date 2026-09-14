import React from "react";
import "./MiniChart.css";

/** Barres horizontales en CSS, sans animation. */
export default function MiniChart({ chart, language }) {
  if (!chart) return null;

  const max = Math.max(...chart.series.map((s) => s.value));

  return (
    <figure className="mini-chart">
      <figcaption>{chart[language]}</figcaption>
      <ul>
        {chart.series.map((s) => (
          <li key={s.label}>
            <span className="mc-label">{s.label}</span>
            <span className="mc-track">
              <span className="mc-bar" style={{ width: `${(s.value / max) * 100}%` }} />
            </span>
            <span className="mc-value">
              {s.value}
              {chart.unit}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
