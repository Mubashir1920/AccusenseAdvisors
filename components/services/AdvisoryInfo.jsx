"use client";

import { motion } from "motion/react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const tiles = [
  { label: "Cash runway", value: "14 mo", trend: "up", note: "+2 vs last quarter", bars: [40, 55, 50, 70, 65, 85] },
  { label: "Revenue growth", value: "18%", trend: "up", note: "vs. prior year", bars: [30, 35, 45, 40, 60, 72] },
  { label: "Gross margin", value: "42%", trend: "up", note: "steady improvement", bars: [50, 48, 55, 58, 60, 64] },
  { label: "Burn rate", value: "Improving", trend: "down", note: "vs. last 3 months", bars: [80, 70, 65, 55, 48, 40] },
];

const idealFor = ["Founders raising capital", "Businesses scaling up", "Family-owned enterprises", "Boards & investors"];

const planningPoints = [
  "Cash flow forecasting",
  "Budgeting & scenario planning",
  "Business valuations",
  "Investment & funding readiness",
];

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const panel = { hidden: { opacity: 0, y: 26, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const tile = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

export default function AdvisoryInfo() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={intro}>
          <motion.span variants={introItem} className="eyebrow">
            Advisory Services
          </motion.span>
          <motion.h2 variants={introItem} className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">
            Your numbers, read like a story
          </motion.h2>
          <motion.p variants={introItem} className="mb-7 text-[1.05rem] text-muted">
            We turn raw financials into a clear read on where your business stands — and what to do about it —
            covering everything from runway to readiness for your next raise.
          </motion.p>

          <motion.ul variants={introItem} className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {planningPoints.map((point) => (
              <li key={point} className="text-[14.5px] font-semibold text-[#1a1a1a]">
                <span className="mr-2 text-accent">—</span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={introItem} className="flex flex-wrap gap-2.5">
            {idealFor.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12.5px] font-semibold text-[#1a1a1a]">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={panel}
          className="rounded-[20px] border border-line bg-white p-7 shadow-[0_30px_60px_-32px_rgba(26,26,26,0.3)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">Live snapshot</span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-accent">
              <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-accent" />
              Updated monthly
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid grid-cols-2 gap-4"
          >
            {tiles.map((t) => (
              <motion.div key={t.label} variants={tile} className="rounded-xl border border-line bg-paper p-4">
                <div className="mb-2.5 text-[12px] font-semibold text-muted">{t.label}</div>
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="text-[1.35rem] font-bold leading-none text-[#1a1a1a]">{t.value}</span>
                  {t.trend === "up" ? (
                    <FiTrendingUp className="h-4 w-4 text-accent" />
                  ) : (
                    <FiTrendingDown className="h-4 w-4 text-accent" />
                  )}
                </div>
                <div className="mb-3 flex h-8 items-end gap-1">
                  {t.bars.map((h, i) => (
                    <span
                      key={i}
                      className="w-full rounded-[2px] bg-accent"
                      style={{ height: `${h}%`, opacity: 0.25 + (i / t.bars.length) * 0.6 }}
                    />
                  ))}
                </div>
                <div className="text-[11px] font-medium text-muted">{t.note}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
