"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { frame, cancelFrame } from "motion";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function update({ timestamp }) {
      lenis.raf(timestamp);
    }

    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return children;
}
