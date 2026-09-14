import { useEffect, useRef, useState } from "react";

/** Entrée / sortie du viewport. L'état retombe à false quand on repart. */
export default function useInView(threshold = 0.4) {
  const ref = useRef(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [inView, setInView] = useState(reduced);

  useEffect(() => {
    if (reduced || !ref.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, reduced]);

  return [ref, inView];
}
