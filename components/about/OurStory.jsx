"use client";

import { motion } from "motion/react";
import { FaRocket } from "react-icons/fa6";
import { FiTrendingUp, FiBriefcase } from "react-icons/fi";


const audiences = [
  {
    icon: FaRocket,
    title: "Startups & founders",
    description: "From incorporation to your first audit, we help you build the right financial foundations early.",
  },
  {
    icon: FiTrendingUp,
    title: "Growing SMEs",
    description: "Systems and processes that scale with you, without adding unnecessary overhead.",
  },
  {
    icon: FiBriefcase,
    title: "Established businesses",
    description: "A second set of eyes on the numbers, and a steady partner for the bigger decisions.",
  },
];

const intro = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const introItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function OurStory() {
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
            Our story
          </motion.span>
          <motion.h2 variants={introItem} className="mb-5 mt-4 text-[clamp(2rem,3.8vw,2.9rem)]!">
            Built to make accounting feel human again
          </motion.h2>
          <motion.p variants={introItem} className="mb-4 text-[1.08rem] text-muted">
            Too many businesses have felt let down by their accountants — chased for documents, hit with
            surprise invoices, and left in the dark about their own numbers.
          </motion.p>
          <motion.p variants={introItem} className="text-[1.08rem] text-muted">
            So we set out to build something different — a practice where the accountant who reviews your
            books is the same one who picks up the phone.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={intro}
          className="mx-auto mb-9 max-w-160 text-center"
        >
          <motion.span variants={introItem} className="eyebrow justify-center">
            Who we work with
          </motion.span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {audiences.map((audience) => (
            <motion.div
              key={audience.title}
              variants={card}
              className="group rounded-2xl border border-line bg-white p-7.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgba(26,26,26,0.24)]"
            >
              <span className="mb-5 flex h-12.5 w-12.5 items-center justify-center rounded-[11px] border-[1.5px] border-[#1a1a1a] transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                <audience.icon
                  className="h-6 w-6 text-[#1a1a1a] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.8}
                />
              </span>
              <h4 className="mb-1.5 text-[1.1rem]!">{audience.title}</h4>
              <p className="text-[14.5px] font-medium leading-relaxed text-muted">{audience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
