"use client";

import { motion } from "motion/react";
import { FiCheckSquare, FiCheckCircle, FiEye, FiMessageSquare, FiZap, FiBarChart2 } from "react-icons/fi";

const values = [
  {
    icon: FiCheckSquare,
    title: "Precision",
    description: "We treat every figure as if a decision depends on it — because it does. Accuracy is where trust begins.",
    tag: "Accuracy",
  },
  {
    icon: FiCheckCircle,
    title: "Integrity",
    description: "Honest advice, honest pricing, honest answers — even when they're not the easy ones to give.",
    tag: "Honesty",
  },
  {
    icon: FiEye,
    title: "Transparency",
    description: "No hidden fees, no black boxes. You'll always understand what we're doing and why it matters.",
    tag: "Clarity",
  },
  {
    icon: FiMessageSquare,
    title: "Partnership",
    description: "We're not a faceless service. We're the team that picks up the phone and knows your business by name.",
    tag: "Together",
  },
  {
    icon: FiZap,
    title: "Responsiveness",
    description: "Questions don't wait, so neither do we. When you need us, you'll hear back fast — from a real person.",
    tag: "Speed",
  },
  {
    icon: FiBarChart2,
    title: "Growth",
    description: "We measure our success by yours. Every insight we share is aimed at moving your business forward.",
    tag: "Forward",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function OurValues() {
  return (
    <section className="border-y border-line bg-paper py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-160 text-center">
          <span className="eyebrow justify-center">What we stand for</span>
          <h2 className="mb-4 mt-4 text-[clamp(2rem,3.8vw,3rem)]!">Our values</h2>
          <p className="text-lg text-muted">
            Six principles that shape every engagement, every number, and every conversation.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mx-auto max-w-240 border-t border-line"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={row}
              className="group relative flex flex-col gap-4 overflow-hidden border-b border-line px-4 py-7 transition-colors duration-300 hover:bg-white sm:flex-row sm:items-center sm:gap-8 sm:px-6"
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden="true"
              />

              <span
                className="text-[2.4rem] font-bold leading-none tracking-tight text-transparent transition-all duration-300 group-hover:text-[rgba(208,11,20,0.08)] sm:w-[100px] sm:shrink-0 sm:text-[3rem]"
                style={{ WebkitTextStroke: "1.5px rgba(26,26,26,0.22)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-1 items-center gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
                  <value.icon className="h-5.5 w-5.5 text-white" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="mb-1 text-[1.18rem]!">{value.title}</h3>
                  <p className="max-w-[46ch] text-[14.5px] font-medium leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </div>

              <span className="hidden shrink-0 whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent lg:block">
                {value.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
