"use client";

import { motion } from "motion/react";
import { FiSearch, FiSettings, FiLink, FiHeadphones } from "react-icons/fi";

const nodes = [
  { n: "01", icon: FiSearch, title: "Assess", description: "We map your current workflows and pick the right-fit system." },
  { n: "02", icon: FiSettings, title: "Implement", description: "Configuration and data migration, tailored to your operations." },
  { n: "03", icon: FiLink, title: "Integrate", description: "Connected cleanly with your accounting and reporting stack." },
  { n: "04", icon: FiHeadphones, title: "Support", description: "Ongoing help as your systems and business keep evolving." },
];

const idealFor = ["Manufacturing businesses", "Multi-location operations", "Retail & distribution", "Businesses outgrowing spreadsheets"];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const node = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const panel = { hidden: { opacity: 0, y: 24, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export default function ErpConsultancyInfo() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={intro}
          className="mx-auto mb-18 max-w-160 text-center"
        >
          <motion.span variants={introItem} className="eyebrow justify-center">
            ERP Consultancy
          </motion.span>
          <motion.h2 variants={introItem} className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">
            One system, built around how you work
          </motion.h2>
          <motion.p variants={introItem} className="text-lg text-muted">
            From first assessment to day-to-day support, we take your systems from scattered spreadsheets to one
            connected source of truth.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="relative mx-auto mb-16 max-w-6xl"
        >
          <div className="pointer-events-none absolute inset-x-[12%] top-[34px] hidden h-px bg-line lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {nodes.map((n) => (
              <motion.div key={n.n} variants={node} className="group relative flex flex-col items-center text-center">
                <span className="relative z-1 mb-5 flex h-17 w-17 items-center justify-center rounded-full border-2 border-[#1a1a1a] bg-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                  <n.icon className="h-6.5 w-6.5 text-[#1a1a1a] transition-colors duration-300 group-hover:text-white" strokeWidth={1.8} />
                </span>
                <span className="mb-1 text-xs font-bold text-accent">{n.n}</span>
                <h4 className="mb-1.5 text-[1.05rem]!">{n.title}</h4>
                <p className="max-w-[24ch] text-[13.5px] font-medium leading-relaxed text-muted">{n.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={panel}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-paper px-8 py-9 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <div className="text-[2.6rem] font-bold leading-none tracking-[-0.02em] text-accent">30%</div>
            <div className="mt-2 text-sm font-medium text-muted">Average reduction in manual admin</div>
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
