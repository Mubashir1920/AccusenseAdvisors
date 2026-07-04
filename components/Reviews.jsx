"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { FaStar } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    text: "They took over our messy books and had everything reconciled within a fortnight. For the first time I actually understand my numbers.",
    name: "Sara Rahman",
    role: "Founder, Loomcraft Studio",
    initials: "SR",
  },
  {
    text: "Fixed fees meant no nasty surprises, and they filed our returns early. Responsive, sharp, and genuinely helpful whenever I call.",
    name: "Daniyal Khan",
    role: "Director, Northline Logistics",
    initials: "DK",
  },
  {
    text: "The advice went well beyond bookkeeping. They helped me restructure and I saved more in tax than their fee for the whole year.",
    name: "Ayesha Malik",
    role: "Owner, Verde Interiors",
    initials: "AM",
  },
];

const AUTOPLAY_MS = 6000;

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const go = (n) => setIndex(((n % reviews.length) + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="overflow-hidden py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-160 text-center">
            <span className="eyebrow justify-center">Client Stories</span>
            <h2 className="mt-4">Trusted from day one</h2>
          </div>

          <div className="relative mx-auto max-w-[820px]">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.55, ease: [0.6, 0.05, 0.2, 1] }}
              >
                {reviews.map((review) => (
                  <div key={review.name} className="box-border min-w-full px-2">
                    <div className="rounded-2xl border border-line bg-white px-13 py-12 text-center max-[880px]:px-7 max-[880px]:py-9.5">
                      <span className="block h-[34px] text-[4rem] font-bold leading-[0.6] text-accent">
                        &rdquo;
                      </span>
                      <div className="my-2 mb-5.5 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className="h-5 w-5 text-accent" />
                        ))}
                      </div>
                      <p className="mb-7.5 text-[1.32rem] font-medium leading-[1.5] tracking-[-0.01em] text-[#1a1a1a] max-[880px]:text-[1.15rem]">
                        {review.text}
                      </p>
                      <div className="flex items-center justify-center gap-3.5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-base font-bold text-white">
                          {review.initials}
                        </span>
                        <div className="text-left">
                          <div className="text-[15px] font-bold">{review.name}</div>
                          <div className="text-[13px] text-muted">{review.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-8 flex justify-center gap-2.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => go(i)}
                  className={`relative h-[9px] overflow-hidden rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-accent/20" : "w-[9px] bg-line"
                  }`}
                >
                  {i === index && (
                    <motion.span
                      key={index}
                      className="absolute inset-0 origin-left bg-accent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-4.5 flex justify-center gap-3">
              <button
                aria-label="Previous review"
                onClick={() => go(index - 1)}
                className="group flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-line bg-white transition-colors duration-200 hover:border-[#1a1a1a] hover:bg-[#1a1a1a]"
              >
                <FiChevronLeft
                  className="h-[18px] w-[18px] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white"
                  strokeWidth={2.2}
                />
              </button>
              <button
                aria-label="Next review"
                onClick={() => go(index + 1)}
                className="group flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-line bg-white transition-colors duration-200 hover:border-[#1a1a1a] hover:bg-[#1a1a1a]"
              >
                <FiChevronRight
                  className="h-[18px] w-[18px] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white"
                  strokeWidth={2.2}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
