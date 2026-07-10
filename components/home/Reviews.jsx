"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "motion/react";
import { FaStar } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";

const reviews = [
  {
    text: "They took over our messy books and had everything reconciled within a fortnight. For the first time I actually understand my numbers.",
    name: "Sara Rahman",
    role: "Founder, Loomcraft Studio",
    initials: "SR",
    service: "Bookkeeping",
  },
  {
    text: "Fixed fees meant no nasty surprises, and they filed our returns early. Responsive, sharp, and genuinely helpful whenever I call.",
    name: "Daniyal Khan",
    role: "Director, Northline Logistics",
    initials: "DK",
    service: "Taxation",
  },
  {
    text: "The advice went well beyond bookkeeping. They helped me restructure and I saved more in tax than their fee for the whole year.",
    name: "Ayesha Malik",
    role: "Owner, Verde Interiors",
    initials: "AM",
    service: "Advisory",
  },
  {
    text: "Our old ERP was a mess of workarounds. They rebuilt our workflows from scratch and cut our month-end admin dramatically.",
    name: "Bilal Ahmed",
    role: "Operations Lead, Skyline Manufacturing",
    initials: "BA",
    service: "ERP Consultancy",
  },
  {
    text: "Every SECP filing handled on time, every year, without me having to chase or even think about it. One less thing to worry about.",
    name: "Hina Farooq",
    role: "Director, Crestview Retailers",
    initials: "HF",
    service: "Corporate & Secretarial",
  },
  {
    text: "Their valuation report gave our investors real confidence in the numbers. Thorough, independent, and delivered faster than we expected.",
    name: "Omar Sheikh",
    role: "Partner, Vantage Capital",
    initials: "OS",
    service: "Business Valuation",
  },
];

const CARD_WIDTH = 340;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
const SET_WIDTH = STEP * reviews.length;
const SPEED = 32; // px per second

const track = [...reviews, ...reviews];

const head = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const headItem = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

export default function Reviews() {
  const x = useMotionValue(0);
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const jumping = useRef(false);
  const lastIndex = useRef(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useAnimationFrame((_, delta) => {
    if (paused.current || jumping.current || reducedMotion.current) return;

    let next = x.get() - (SPEED * delta) / 1000;
    if (next <= -SET_WIDTH) next += SET_WIDTH;
    x.set(next);

    const idx = Math.floor(-next / STEP) % reviews.length;
    if (idx !== lastIndex.current) {
      lastIndex.current = idx;
      setActive(idx);
    }
  });

  const goTo = (i) => {
    jumping.current = true;
    lastIndex.current = i;
    setActive(i);
    animate(x, -(i * STEP), {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        jumping.current = false;
      },
    });
  };

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={head}
          className="mx-auto mb-14 max-w-160 text-center"
        >
          <motion.span variants={headItem} className="eyebrow justify-center">
            Client Stories
          </motion.span>
          <motion.h2 variants={headItem} className="mt-4">
            Trusted from day one
          </motion.h2>
        </motion.div>

        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)",
            maskImage: "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)",
          }}
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          <motion.div className="flex gap-6" style={{ x }}>
            {track.map((review, i) => (
              <article
                key={i}
                aria-hidden={i >= reviews.length ? "true" : undefined}
                className="flex w-85 shrink-0 flex-col rounded-2xl border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-[0_26px_50px_-30px_rgba(26,26,26,0.28)]"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} className="h-3.5 w-3.5 text-accent" />
                    ))}
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-accent/25 bg-accent/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-accent">
                    {review.service}
                  </span>
                </div>

                <p className="mb-6 line-clamp-4 flex-1 text-[15px] font-medium leading-relaxed text-[#1a1a1a]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between gap-3 border-t border-line pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-[13px] font-bold text-white">
                      {review.initials}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-bold leading-tight text-[#1a1a1a]">{review.name}</div>
                      <div className="text-[12px] leading-tight text-muted">{review.role}</div>
                    </div>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-accent">
                    <FiCheck className="h-3.5 w-3.5" strokeWidth={2.6} />
                    Verified
                  </span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-9 flex justify-center gap-2">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              aria-label={`Go to ${review.name}'s review`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-accent" : "w-4 bg-line hover:bg-[#1a1a1a]/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
