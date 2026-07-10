"use client";

import { motion } from "motion/react";
import { FiTrendingUp, FiGitMerge, FiDollarSign, FiFileText, FiCheck } from "react-icons/fi";

const triggers = [
  { icon: FiTrendingUp, label: "Raising capital" },
  { icon: FiGitMerge, label: "Mergers & acquisitions" },
  { icon: FiDollarSign, label: "Selling your business" },
  { icon: FiFileText, label: "Financial reporting" },
];

const ourServices = [
  "Business and equity valuations",
  "Purchase Price Allocation (PPA)",
  "Impairment testing",
  "Valuation for mergers & acquisitions",
  "Investment and fundraising support",
  "Fair value assessments",
  "Shareholder dispute and litigation support",
  "Tax and regulatory valuations",
  "Strategic planning and succession planning",
];

const idealFor = ["Founders raising capital", "M&A parties", "Shareholders in dispute", "Companies needing fair value reporting"];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };
const panel = { hidden: { opacity: 0, y: 24, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export default function BusinessValuationInfo() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={intro}
          className="mx-auto mb-14 max-w-160 text-center"
        >
          <motion.span variants={introItem} className="eyebrow justify-center">
            Business Valuation
          </motion.span>
          <motion.p variants={introItem} className="mt-4 text-[1.15rem] font-semibold text-[#1a1a1a]">
            Business decisions are harder when clarity is missing.
          </motion.p>
          <motion.h2 variants={introItem} className="mb-4 mt-3 text-[clamp(2rem,3.6vw,2.9rem)]!">
            Unlock the True Value of Your Business
          </motion.h2>
          <motion.p variants={introItem} className="text-lg text-muted">
            Whether you&apos;re raising capital, planning a merger or acquisition, selling your business, or meeting
            financial reporting requirements, understanding your business&apos;s true value is critical. AccuSense
            Advisors provides independent, reliable, and professional business valuation services to help you make
            informed decisions with confidence.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mb-16"
        >
          <h3 className="mb-5 text-center text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
            When it matters most
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {triggers.map((trigger) => (
              <motion.div
                key={trigger.label}
                variants={item}
                className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-5 text-center transition-all duration-300 hover:-translate-y-0.75 hover:shadow-[0_18px_36px_-24px_rgba(26,26,26,0.24)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
                  <trigger.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                </span>
                <span className="text-[13.5px] font-semibold text-[#1a1a1a]">{trigger.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mb-12">
          <h3 className="mb-6 text-[clamp(1.5rem,2.2vw,1.9rem)]!">Our Services</h3>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-3"
          >
            {ourServices.map((service) => (
              <motion.li
                key={service}
                variants={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3.75 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-24px_rgba(26,26,26,0.24)]"
              >
                <span className="mt-0.25 flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <FiCheck className="h-3.5 w-3.5 text-accent" strokeWidth={2.6} />
                </span>
                <span className="text-[14px] font-semibold leading-snug text-[#1a1a1a]">{service}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={panel}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-paper px-8 py-9 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <div className="text-[2.6rem] font-bold leading-none tracking-[-0.02em] text-accent">9</div>
            <div className="mt-2 text-sm font-medium text-muted">Specialist valuation services under one roof</div>
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
