"use client";

import { motion } from "motion/react";
import { FiCheck, FiAward } from "react-icons/fi";

const scopeAreas = [
  "Statutory financial statement audits",
  "Internal control reviews",
  "Special-purpose audits",
  "Fraud risk assessment",
  "Regulatory compliance audits",
  "Assurance reports for stakeholders",
];

const idealFor = ["SECP-regulated companies", "NGOs requiring donor audits", "Businesses seeking bank finance", "Boards needing independent assurance"];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };
const seal = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function AuditAssuranceInfo() {
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
            Audit & Assurance
          </motion.span>
          <motion.h2 variants={introItem} className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">
            An honest, independent look at the numbers
          </motion.h2>
          <motion.p variants={introItem} className="text-lg text-muted">
            Every engagement is carried out with the same independence and rigour, whatever the reason for the
            audit — regulator, donor, or bank.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2"
          >
            {scopeAreas.map((area) => (
              <motion.li
                key={area}
                variants={item}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.75 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-24px_rgba(26,26,26,0.24)]"
              >
                <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <FiCheck className="h-3.75 w-3.75 text-accent" strokeWidth={2.6} />
                </span>
                <span className="text-[14.5px] font-semibold text-[#1a1a1a]">{area}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={seal}
            className="mx-auto flex flex-col items-center"
          >
            <div className="relative flex h-62 w-62 items-center justify-center rounded-full border-2 border-dashed border-accent/40">
              <div className="flex h-47.5 w-47.5 flex-col items-center justify-center rounded-full border border-line bg-paper text-center">
                <FiAward className="mb-3 h-8 w-8 text-accent" strokeWidth={1.6} />
                <div className="text-[1.05rem] font-bold leading-tight text-[#1a1a1a]">
                  Chartered
                  <br />& Regulated
                </div>
                <div className="mt-1.5 text-[12px] font-medium text-muted">Independent Assurance</div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {idealFor.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12px] font-semibold text-[#1a1a1a]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
