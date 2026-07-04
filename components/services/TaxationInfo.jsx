"use client";

import { motion } from "motion/react";
import { FiCalendar, FiCheck } from "react-icons/fi";

const groups = [
  { freq: "Monthly", items: ["Sales tax returns", "Withholding tax statements"] },
  { freq: "Quarterly", items: ["Advance tax payments", "Statement reviews"] },
  { freq: "Annual", items: ["Corporate / individual tax return", "Wealth statement filing"] },
];

const idealFor = ["Registered companies", "Sole proprietors", "Freelancers & consultants", "Multi-province businesses"];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const card = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const panel = { hidden: { opacity: 0, y: 24, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export default function TaxationInfo() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={intro}
          className="mx-auto mb-16 max-w-160 text-center"
        >
          <motion.span variants={introItem} className="eyebrow justify-center">
            Taxation Services
          </motion.span>
          <motion.h2 variants={introItem} className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">
            Every filing, tracked to its own calendar
          </motion.h2>
          <motion.p variants={introItem} className="text-lg text-muted">
            Monthly, quarterly, and annual obligations are tracked separately and filed the moment they&apos;re due
            — never bundled into a last-minute scramble.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {groups.map((group) => (
            <motion.div key={group.freq} variants={card} className="rounded-2xl border border-line bg-white p-7">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                <FiCalendar className="h-3.5 w-3.5" />
                {group.freq}
              </span>
              <ul className="flex flex-col gap-3">
                {group.items.map((label) => (
                  <li key={label} className="flex items-start gap-2.5 text-[14.5px] font-semibold text-[#1a1a1a]">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={panel}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-paper px-8 py-9 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <div className="text-[2.6rem] font-bold leading-none tracking-[-0.02em] text-accent">0</div>
            <div className="mt-2 text-sm font-medium text-muted">Missed filing deadlines, ever</div>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {idealFor.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-[#1a1a1a]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
