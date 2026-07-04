"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiChevronRight } from "react-icons/fi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function PageHero({ crumb, parent, title, description }) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-paper py-19 text-center lg:py-18">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.045) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          WebkitMaskImage: "radial-gradient(110% 130% at 50% 0%, #000 25%, transparent 72%)",
          maskImage: "radial-gradient(110% 130% at 50% 0%, #000 25%, transparent 72%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-0.5"
        style={{
          background: "linear-gradient(to right, transparent, rgba(208,11,20,0.35) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-1 mx-auto max-w-7xl px-6"
      >
        <motion.div variants={item} className="mb-5 inline-flex items-center gap-2.5 text-sm font-medium text-muted">
          <Link href="/" className="transition-colors duration-200 hover:text-accent">
            Home
          </Link>
          {parent && (
            <>
              <FiChevronRight className="h-3.5 w-3.5" />
              <Link href={parent.href} className="transition-colors duration-200 hover:text-accent">
                {parent.label}
              </Link>
            </>
          )}
          <FiChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-[#1a1a1a]">{crumb}</span>
        </motion.div>

        <motion.h1 variants={item} className="mx-auto mb-4.5 max-w-3xl text-[clamp(2.6rem,5vw,4rem)]!">
          {title}
        </motion.h1>

        <motion.p variants={item} className="mx-auto max-w-160 text-lg text-muted">
          {description}
        </motion.p>
      </motion.div>
    </header>
  );
}
