import React, { useEffect, useRef, useState } from "react";
import useInView from "../hooks/useInView";

/** Compte de 0 à `value` quand l'élément devient visible. */
export default function Counter({ value, suffix = "", duration = 1400 }) {
  const [ref, shown] = useInView(0.5);
  const [display, setDisplay] = useState(0);
  // On ne rejoue pas au retour à l'écran.
  const played = useRef(false);
  const decimals = String(value).includes(".") ? 1 : 0;

  useEffect(() => {
    if (!shown || played.current) return undefined;
    played.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    // rAF est en pause dans un onglet inactif : on pose la valeur finale.
    const settle = setTimeout(() => setDisplay(value), duration + 120);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, [shown, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
