"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiPhone, FiEdit3, FiFileText, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    icon: FiPhone,
    title: "Book a call",
    description: "A free 30-minute chat to understand your business and where you need help.",
  },
  {
    icon: FiEdit3,
    title: "We review",
    description: "We take a close look at your books and current setup, then map out exactly what's needed.",
  },
  {
    icon: FiFileText,
    title: "Fixed-fee proposal",
    description: "A clear, upfront quote with no hidden costs. You know exactly what you're paying.",
  },
  {
    icon: FiCheckCircle,
    title: "We take it from here",
    description: "Your books are handled, deadlines met, and your accountant is always a message away.",
  },
];

const EASE = [0.22, 1, 0.36, 1];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } };
const track = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } };
const line = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } };
const step = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } };
const footer = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } };

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-size-[60px_60px] bg-[linear-gradient(rgba(26,26,26,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.04)_1px,transparent_1px)]"
        style={{
          WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, #000 20%, transparent 75%)",
          maskImage: "radial-gradient(120% 90% at 50% 0%, #000 20%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-1 mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={intro}
          className="mx-auto mb-18 max-w-170 text-center"
        >
          <motion.span variants={introItem} className="eyebrow justify-center">
            How it works
          </motion.span>
          <motion.h2 variants={introItem} className="mb-4 mt-4">
            Getting started is simple
          </motion.h2>
          <motion.p variants={introItem} className="text-[1.08rem] text-muted">
            No lengthy onboarding, no confusing paperwork. Four steps from first hello to books fully handled.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={track}
          className="relative grid max-w-110 grid-cols-1 mx-auto min-[861px]:max-w-none min-[861px]:grid-cols-4 min-[861px]:gap-7"
        >
          <motion.div
            variants={line}
            className="absolute top-8.5 left-[12.5%] right-[12.5%] z-0 hidden h-0.5 origin-left bg-[repeating-linear-gradient(to_right,var(--line)_0_8px,transparent_8px_16px)] min-[861px]:block"
            aria-hidden="true"
          />

          {steps.map((s, i) => {
            const isStart = i === 0;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={s.title}
                variants={step}
                className="group relative z-1 flex items-start gap-5.5 pb-10 min-[861px]:flex-col min-[861px]:items-center min-[861px]:pb-0 min-[861px]:text-center"
              >
                {!isLast && (
                  <div
                    className="absolute left-8.25 top-17 bottom-0 w-0.5 bg-[repeating-linear-gradient(to_bottom,var(--line)_0_6px,transparent_6px_12px)] min-[861px]:hidden"
                    aria-hidden="true"
                  />
                )}

                <div
                  className={`relative mb-0 flex h-17 w-17 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 min-[861px]:mb-6.5 ${
                    isStart
                      ? "border-[#1a1a1a] bg-[#1a1a1a]"
                      : "border-line bg-white group-hover:border-[#1a1a1a] group-hover:-translate-y-1"
                  }`}
                >
                  <span className={`text-[22px] font-bold ${isStart ? "text-white" : "text-[#1a1a1a]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`absolute -top-1.25 -right-1.25 h-3.5 w-3.5 rounded-full border-[3px] border-paper bg-accent transition-all duration-300 ${
                      isStart ? "scale-100 opacity-100" : "scale-40 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />
                </div>

                <div className="pt-1.5 min-[861px]:pt-0">
                  <s.icon className="mb-2.5 h-6.5 w-6.5 text-accent min-[861px]:mx-auto min-[861px]:mb-3.5" strokeWidth={1.8} />
                  <h3 className="mb-2.5 text-[1.22rem]!">{s.title}</h3>
                  <p className="text-[14.5px] font-medium text-muted min-[861px]:mx-auto min-[861px]:max-w-[24ch]">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={footer}
          className="mt-18 text-center"
        >
          <span className="mb-4 block text-sm font-medium text-muted">
            No obligation. We&apos;ll only suggest what you actually need.
          </span>
          <Link
            href="/contact"
            className="btn inline-flex items-center gap-2 rounded bg-accent px-7 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Book your free call
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
