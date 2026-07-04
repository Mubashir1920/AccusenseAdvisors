"use client";

import { motion } from "motion/react";
import { FiEdit3, FiRefreshCw, FiBarChart2, FiSend } from "react-icons/fi";

const steps = [
  { n: "01", icon: FiEdit3, title: "Record", description: "Every transaction logged and categorized as it happens — nothing waits till month-end." },
  { n: "02", icon: FiRefreshCw, title: "Reconcile", description: "Bank and card statements matched line by line, so the books always tie out." },
  { n: "03", icon: FiBarChart2, title: "Report", description: "Management accounts delivered on a fixed schedule, every single month." },
  { n: "04", icon: FiSend, title: "Handover", description: "Clean, audit-ready books passed straight to your tax and advisory team." },
];

const chips = [
  "Daily transaction recording",
  "Bank & card reconciliation",
  "Payroll-ready records",
  "Cloud accounting setup (Xero / QuickBooks)",
];

const idealFor = ["Startups & founders", "Growing SMEs", "E-commerce sellers", "Service businesses"];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const card = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

export default function AccountingBookkeepingInfo() {
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
            Accounting & Bookkeeping
          </motion.span>
          <motion.h2 variants={introItem} className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">
            The monthly close, on rails
          </motion.h2>
          <motion.p variants={introItem} className="text-lg text-muted">
            The same four-step rhythm runs every month, so your books are never a surprise — just current,
            reconciled, and ready.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="relative mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute inset-x-8 top-[38px] hidden h-px bg-line lg:block" aria-hidden="true" />
          {steps.map((step) => (
            <motion.div
              key={step.n}
              variants={card}
              className="group relative rounded-2xl border border-line bg-white p-6.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgba(26,26,26,0.24)]"
            >
              <span className="absolute right-5 top-6 text-xs font-bold text-line">{step.n}</span>
              <span className="relative z-1 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
                <step.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
              </span>
              <h4 className="mb-1.5 text-[1.05rem]!">{step.title}</h4>
              <p className="text-[13.5px] font-medium leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="mb-4.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">What&apos;s included</h3>
            <div className="flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-semibold text-[#1a1a1a]">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-7">
            <span className="eyebrow">Ideal for</span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {idealFor.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-[#1a1a1a]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="my-6.5 h-px bg-line" />
            <div className="text-[2.4rem] font-bold leading-none tracking-[-0.02em] text-accent">48h</div>
            <div className="mt-2 text-sm font-medium text-muted">Average turnaround on reconciliations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
