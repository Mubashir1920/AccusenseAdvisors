"use client";

import { motion } from "motion/react";
import { FiCheckCircle, FiUser, FiTrendingUp, FiAward, FiClock } from "react-icons/fi";
import { FaScaleBalanced } from "react-icons/fa6";

const features = [
  {
    icon: FiCheckCircle,
    title: "Precision as standard",
    description:
      "Every figure is checked and reconciled. No estimates, no “close enough” — your books are always accurate and audit-ready.",
  },
  {
    icon: FiUser,
    title: "One point of contact",
    description:
      "You deal directly with the accountant who knows your business — not a rotating cast or a support ticket queue.",
  },
  {
    icon: FaScaleBalanced,
    title: "Fixed fees, no surprises",
    description: "Every engagement is quoted upfront at a clear, flat rate. You'll never open an invoice you didn't expect.",
  },
  {
    icon: FiTrendingUp,
    title: "Advice beyond the numbers",
    description:
      "We don't just record what happened — we help you plan what's next, from cash flow to tax-efficient growth.",
  },
  {
    icon: FiAward,
    title: "Chartered & regulated",
    description: "Your work is handled by a properly regulated practice, held to professional standards you can rely on.",
  },
  {
    icon: FiClock,
    title: "Deadlines, never missed",
    description: "Filings and reports are tracked and delivered on time, every time — so late penalties are never your problem.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyServicesStandOut() {
  return (
    <section className="border-y border-line bg-paper py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-160 text-center">
          <span className="eyebrow justify-center">The difference</span>
          <h2 className="mb-4 mt-4">Why our services stand out</h2>
          <p className="mx-auto text-lg text-muted">
            Plenty of firms can file your returns. Here&apos;s what makes working with us feel different.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group flex items-start gap-5 rounded-2xl border border-line bg-white p-7.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgba(26,26,26,0.24)]"
            >
              <span className="flex h-12.5 w-12.5 shrink-0 items-center justify-center rounded-[11px] border-[1.5px] border-[#1a1a1a] transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                <feature.icon
                  className="h-6 w-6 text-[#1a1a1a] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.8}
                />
              </span>
              <div>
                <h4 className="mb-1.5 text-[1.14rem]!">{feature.title}</h4>
                <p className="text-[14.5px] font-medium leading-relaxed text-muted">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
