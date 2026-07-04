"use client";

import { motion } from "motion/react";
import { FiFileText, FiBook, FiRefreshCw, FiUsers, FiMapPin, FiMail } from "react-icons/fi";

const items = [
  { icon: FiFileText, title: "Incorporation & registration", description: "Company formation handled end to end with SECP." },
  { icon: FiBook, title: "Statutory registers", description: "Minute books and registers maintained and kept current." },
  { icon: FiRefreshCw, title: "Annual returns & filings", description: "Every statutory filing tracked and submitted on time." },
  { icon: FiUsers, title: "Share transfers & allotments", description: "Ownership changes documented and processed correctly." },
  { icon: FiMapPin, title: "Registered office", description: "A compliant registered address, maintained on your behalf." },
  { icon: FiMail, title: "Regulatory correspondence", description: "Notices and correspondence handled so nothing is missed." },
];

const idealFor = ["New companies", "Private limited firms", "NGOs & non-profits", "Foreign-owned entities"];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const row = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function CorporateSecretarialInfo() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-7 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-160">
          <span className="eyebrow">Corporate & Secretarial</span>
          <h2 className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">Every statutory box, checked</h2>
          <p className="text-lg text-muted">
            From incorporation to your next annual return, we track every obligation your company has with the
            regulator — so nothing is ever missed.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3.5 rounded-2xl border border-line bg-paper px-6 py-4.5">
          <span className="text-[2rem] font-bold leading-none tracking-[-0.02em] text-accent">100%</span>
          <span className="text-xs font-medium leading-snug text-muted">
            SECP filings
            <br />
            on schedule
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="border-t border-line"
        >
          {items.map((entry, index) => (
            <motion.div
              key={entry.title}
              variants={row}
              className="group relative flex flex-col gap-4 overflow-hidden border-b border-line px-4 py-6.5 transition-colors duration-300 hover:bg-paper sm:flex-row sm:items-center sm:gap-7 sm:px-6"
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden="true"
              />
              <span
                className="text-[2rem] font-bold leading-none tracking-tight text-transparent sm:w-20 sm:shrink-0"
                style={{ WebkitTextStroke: "1.5px rgba(26,26,26,0.2)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
                <entry.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
              </span>
              <div>
                <h4 className="mb-1 text-[1.05rem]!">{entry.title}</h4>
                <p className="text-[14px] font-medium leading-relaxed text-muted">{entry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">Ideal for</span>
          {idealFor.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-[#1a1a1a]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
