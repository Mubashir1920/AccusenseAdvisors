"use client";

import { motion } from "motion/react";
import { FiUser, FiTrendingUp, FiPieChart, FiGlobe } from "react-icons/fi";

const segments = [
  {
    icon: FiUser,
    title: "Entrepreneurs & Business Owners",
    description:
      "Helping business owners gain financial clarity and confidence through reliable accounting, tax compliance, business advisory, and performance insights that support informed decision-making.",
    tag: "Clarity",
  },
  {
    icon: FiTrendingUp,
    title: "Startups, SMEs & Growing Businesses",
    description:
      "Supporting growing businesses with scalable accounting solutions, financial reporting, budgeting, internal controls, tax compliance, and advisory services to build a strong financial foundation.",
    tag: "Scale",
  },
  {
    icon: FiPieChart,
    title: "Finance Leaders & Management Teams",
    description:
      "Empowering finance departments with management reporting, financial analysis, budgeting, process improvements, internal controls, IFRS reporting, and CFO-level advisory to enhance business performance.",
    tag: "Performance",
  },
  {
    icon: FiGlobe,
    title: "Investors & Expanding Businesses",
    description:
      "Assisting local and international businesses with market entry, business structuring, regulatory compliance, financial reporting, tax advisory, due diligence, and business valuation to facilitate successful expansion and investment decisions.",
    tag: "Expansion",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const row = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function WhoWeHelp() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-160 text-center">
          <span className="eyebrow justify-center">Who we help</span>
          <h2 className="mb-4 mt-4 text-[clamp(2rem,3.8vw,3rem)]!">
            Financial expertise tailored to every stage of your business
          </h2>
          <p className="text-lg text-muted">
            At Accusense Advisor, we partner with businesses of all sizes to deliver accurate financial
            information, regulatory compliance, and strategic insights that drive sustainable growth.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mx-auto max-w-240 border-t border-line"
        >
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              variants={row}
              className="group relative flex flex-col gap-4 overflow-hidden border-b border-line px-4 py-7 transition-colors duration-300 hover:bg-paper sm:flex-row sm:items-center sm:gap-8 sm:px-6"
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
                  <segment.icon className="h-5.5 w-5.5 text-white" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="mb-1 text-[1.1rem]!">{segment.title}</h3>
                  <p className="max-w-[56ch] text-[14.5px] font-medium leading-relaxed text-muted">
                    {segment.description}
                  </p>
                </div>
              </div>

              <span className="hidden shrink-0 whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent lg:block">
                {segment.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
