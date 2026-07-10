"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowRight, FiCheck, FiStar, FiAward, FiUsers } from "react-icons/fi";

const trustItems = [
  { icon: FiStar, title: "Best Advisors", description: "Seasoned specialists guiding every decision." },
  { icon: FiAward, title: "Certified Professionals", description: "Credentialed, regulated, always accountable." },
  { icon: FiUsers, title: "Trusted Clients", description: "Long-term partnerships built on results." },
];

const bars = [
  { height: 38 },
  { height: 58 },
  { height: 46 },
  { height: 72 },
  { height: 92, hot: true },
];

const TILE_EASE = [0.34, 1.3, 0.5, 1];
const TEXT_EASE = [0.22, 1, 0.36, 1];

const copyContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const copyItem = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: TEXT_EASE } } };

function Tile({ className, delay, floatDuration, floatDelay, floatDistance, reduceMotion, children }) {
  return (
    <motion.div
      className={`absolute rounded-2xl border border-line bg-white shadow-[0_30px_60px_-34px_rgba(26,26,26,0.3)] ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: TILE_EASE }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -floatDistance, 0] }}
        transition={
          reduceMotion ? undefined : { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const reduceMotionRef = useRef(reduceMotion);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    reduceMotionRef.current = reduceMotion;
  }, [reduceMotion]);

  useEffect(() => {
    const target = 248640;
    const duration = 1500;
    const startDelay = 650;
    let raf;

    const timeout = setTimeout(() => {
      if (reduceMotionRef.current) {
        setBalance(target);
        return;
      }

      let start;
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setBalance(Math.round(target * eased));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-26 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 z-0 max-[680px]:[background-size:44px_44px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(26,26,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(120% 90% at 70% 40%, #000 25%, transparent 80%)",
            maskImage: "radial-gradient(120% 90% at 70% 40%, #000 25%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-1 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 min-[901px]:grid-cols-[1.05fr_0.95fr] min-[901px]:gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={copyContainer}
            className="text-center min-[901px]:text-left"
          >
            <motion.span
              variants={copyItem}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold shadow-[0_2px_14px_-6px_rgba(26,26,26,0.12)]"
            >
              <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(208,11,20,0.14)]" />
              Precision you can count on
            </motion.span>

            <motion.h1 variants={copyItem} className="text-[clamp(2.5rem,4.4vw,3.7rem)]!">
              Accounting built on precision,
              <br />
              advice built on <span className="text-accent">trust.</span>
            </motion.h1>

            <motion.p
              variants={copyItem}
              className="mx-auto mb-2 mt-6.5 max-w-[32rem] text-[1.16rem] text-muted min-[901px]:mx-0"
            >
              A chartered accounting practice for founders and businesses who want clean books, sharp advice, and
              complete peace of mind.
            </motion.p>

            <motion.div
              variants={copyItem}
              className="mt-9.5 flex flex-wrap items-center justify-center gap-4 min-[901px]:justify-start"
            >
              <Link
                href="/contact"
                className="btn group inline-flex items-center gap-2.5 rounded border-[1.5px] border-accent bg-accent px-6.5 py-3.25 text-[15px] text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book a free consultation
                <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1">
                  <FiArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services"
                className="btn inline-flex items-center gap-2.5 rounded border-[1.5px] border-[#1a1a1a] px-6.5 py-3.25 text-[15px] text-[#1a1a1a] transition-colors duration-200 hover:bg-[#1a1a1a] hover:text-white"
              >
                Our services
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex justify-center">
            <div className="relative h-105 w-full max-w-115 origin-top scale-100 max-[680px]:-mb-7.5 min-[421px]:max-[680px]:h-90 min-[421px]:max-[680px]:scale-[0.82] max-[420px]:h-80 max-[420px]:scale-[0.72]">
              {/* balance tile */}
              <Tile
                className="left-0 top-0 z-2 w-75 px-6 py-5.5"
                delay={0.05}
                floatDuration={7}
                floatDelay={0.9}
                floatDistance={10}
                reduceMotion={reduceMotion}
              >
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">Net position</span>
                  <span className="rounded-full border border-accent/20 bg-accent/[0.09] px-2.25 py-1 text-[11px] font-semibold text-accent">
                    + Healthy
                  </span>
                </div>
                <div className="text-[2.1rem] font-bold tracking-[-0.03em] text-[#1a1a1a]">
                  Rs.{balance.toLocaleString("en-US")}
                </div>
                <div className="mt-2 h-11.5">
                  <svg viewBox="0 0 200 46" preserveAspectRatio="none" className="block h-full w-full">
                    <defs>
                      <linearGradient id="heroSparkGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#D00B14" stopOpacity="0.14" />
                        <stop offset="1" stopColor="#D00B14" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M2,38 L34,30 L66,33 L98,20 L130,24 L162,10 L198,6 L198,46 L2,46 Z"
                      fill="url(#heroSparkGradient)"
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M2,38 L34,30 L66,33 L98,20 L130,24 L162,10 L198,6"
                      fill="none"
                      stroke="#D00B14"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={reduceMotion ? false : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </svg>
                </div>
              </Tile>

              {/* compliant check tile */}
              <Tile
                className="right-0 top-37.5 z-3 flex w-62.5 items-center gap-3.5 px-4.5 py-4"
                delay={0.22}
                floatDuration={8}
                floatDelay={1.1}
                floatDistance={13}
                reduceMotion={reduceMotion}
              >
                <span className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] bg-accent">
                  <FiCheck className="h-5.5 w-5.5 text-white" strokeWidth={2.6} />
                </span>
                <div>
                  <b className="block text-[15px] font-bold text-[#1a1a1a]">Filed & compliant</b>
                  <span className="text-[12.5px] font-medium text-muted">0 issues found</span>
                </div>
              </Tile>

              {/* mini bars tile */}
              <Tile
                className="bottom-0 left-6 z-2 w-50 px-5 py-4.5"
                delay={0.38}
                floatDuration={7.5}
                floatDelay={1.3}
                floatDistance={10}
                reduceMotion={reduceMotion}
              >
                <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.04em] text-muted">
                  Cash flow
                </span>
                <div className="flex h-15 items-end gap-2.25">
                  {bars.map((bar, i) => (
                    <motion.span
                      key={i}
                      className={`flex-1 origin-bottom rounded ${bar.hot ? "bg-accent" : "bg-[#1a1a1a]/12"}`}
                      style={{ height: `${bar.height}%` }}
                      initial={reduceMotion ? false : { scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.55, delay: 0.7 + i * 0.1, ease: TILE_EASE }}
                    />
                  ))}
                </div>
              </Tile>

              {/* stat tile */}
              <Tile
                className="bottom-8.5 right-3.5 z-3 w-37.5 px-5 py-4.5"
                delay={0.5}
                floatDuration={8.5}
                floatDelay={1.5}
                floatDistance={13}
                reduceMotion={reduceMotion}
              >
                <div className="text-[2.2rem] font-bold leading-none tracking-[-0.03em] text-[#1a1a1a]">
                  100<span className="text-accent">%</span>
                </div>
                <div className="mt-1 text-[12.5px] font-medium text-muted">On-time filings</div>
              </Tile>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-8 py-9 ${
                i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-[#1a1a1a]">
                <item.icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
              </span>
              <div>
                <h4 className="text-[1.12rem] font-bold">{item.title}</h4>
                <p className="text-[13.5px] font-medium text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
