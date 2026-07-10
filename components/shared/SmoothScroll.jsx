"use client";

import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import { useIsomorphicLayoutEffect } from "motion/react";

function LenisRouteReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    if (!lenis) return;
    lenis.resize();
    lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <LenisRouteReset />
      {children}
    </ReactLenis>
  );
}
