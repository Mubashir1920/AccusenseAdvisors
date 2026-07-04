"use client";

import { motion } from "motion/react";
import ServiceCard from "./ServiceCard";
import { FiFileText, FiBarChart2, FiClock, FiMonitor, FiCheckSquare } from "react-icons/fi";
import { FaBuildingColumns } from "react-icons/fa6";

const services = [
  {
    number: "01",
    icon: FiFileText,
    title: "Accounting & Bookkeeping",
    description:
      "Efficient financial management, so you can focus on the bigger picture while we handle the numbers.",
    href: "/services/accounting-bookkeeping",
  },
  {
    number: "02",
    icon: FiBarChart2,
    title: "Taxation Services",
    description:
      "Make the most of your finances and secure your future with comprehensive, compliant tax strategy.",
    href: "/services/taxation",
  },
  {
    number: "03",
    icon: FaBuildingColumns,
    title: "Corporate & Secretarial",
    description: "Stay compliant and run smoothly — avoid penalties and stay ahead of the competition.",
    href: "/services/corporate-secretarial",
  },
  {
    number: "04",
    icon: FiClock,
    title: "Advisory Services",
    description: "Gain the confidence to make informed decisions and an edge in an ever-changing market.",
    href: "/services/advisory",
  },
  {
    number: "05",
    icon: FiMonitor,
    title: "ERP Consultancy",
    description:
      "Harness the power of ERP to revolutionize your business, tailored to how you actually operate.",
    href: "/services/erp-consultancy",
  },
  {
    number: "06",
    icon: FiCheckSquare,
    title: "Audit & Assurance",
    description: "Uncover the truth of your financials, so you can trust your future and decide with confidence.",
    href: "/services/audit-assurance",
  },
];

const headVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services({
  eyebrow = "Our Services",
  heading = (
    <>
      One partner, every
      <br />
      financial need
    </>
  ),
  description = "Comprehensive services tailored to your goals — so you get clarity, compliance, and confidence in every outcome.",
}) {
  return (
    <section id="services" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={headVariants}
          className="mx-auto mb-16 max-w-160 text-center"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mb-4 mt-4">{heading}</h2>
          <p className="mx-auto text-lg text-muted">{description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.number} variants={cardVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
