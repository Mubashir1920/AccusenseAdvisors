"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import logo from "@/public/ACCUSENSE-ADVISOR.png";

const serviceLinks = [
  { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { label: "Taxation Services", href: "/services/taxation" },
  { label: "Corporate & Secretarial", href: "/services/corporate-secretarial" },
  { label: "Advisory Services", href: "/services/advisory" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
];

const useFullLinks = [
  { label: "About us", href: "/about" },
  { label: "PSEB", href: "https://techdestination.com/" },
  { label: "FBR", href: "https://www.fbr.gov.pk/" },
  { label: "SECP", href: "https://www.secp.gov.pk/" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
  { label: "X", icon: FaXTwitter, href: "https://x.com" },
  { label: "Email", icon: FiMail, href: "mailto:hello@accusense.co" },
];

function FooterHeading({ children }) {
  return (
    <h4 className="relative mb-5 pb-3.5 text-xs! font-semibold! uppercase tracking-[0.16em]! text-[#1a1a1a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-5.5 after:bg-accent after:content-['']">
      {children}
    </h4>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block text-[14.5px] font-medium text-[#1a1a1a]/60 transition-all duration-200 hover:translate-x-1 hover:text-[#1a1a1a]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Asia/Karachi",
          }).format(new Date())
        );
      } catch {
        setTime(new Date().toTimeString().slice(0, 5));
      }
    };
    tick();
    const interval = setInterval(tick, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-[#1a1a1a]/12 bg-paper text-[#1a1a1a]">
      <div
        className="pointer-events-none absolute inset-0 bg-size-[56px_56px] bg-[linear-gradient(rgba(26,26,26,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.02)_1px,transparent_1px)]"
        style={{
          WebkitMaskImage: "linear-gradient(180deg, #000, rgba(0,0,0,0.15))",
          maskImage: "linear-gradient(180deg, #000, rgba(0,0,0,0.15))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-1 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-7 border-b border-[#1a1a1a]/12 py-15 min-[681px]:flex-row min-[681px]:items-end min-[681px]:justify-between min-[681px]:gap-10 min-[681px]:py-21">
          <h4 className="text-[clamp(2.25rem,4.5vw,3rem)]! font-bold leading-[0.98]! tracking-[-0.03em]!">
            Let&apos;s balance
            <br />
            your <span className="text-accent">books.</span>
            <span className="mt-4.5 block max-w-[34ch] text-[clamp(1rem,1.6vw,1.15rem)]! font-medium! leading-[1.5] tracking-normal! text-[#1a1a1a]/60">
              Book a free consultation and see how straightforward good accounting can be.
            </span>
          </h4>

          <Link
            href="/contact"
            className="btn w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-md bg-accent px-7.5 py-4.5 text-base text-white transition-all duration-200 hover:-translate-y-0.75 hover:bg-[#e11020] min-[681px]:flex min-[681px]:w-auto"
          >
            <span className="flex items-center justify-center gap-3">
              Book a free call
              <FiArrowRight className="h-[18px] w-[18px]" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-9 py-14 min-[901px]:grid-cols-[1.5fr_1fr_1fr_1fr] min-[901px]:gap-10">
          <div className="col-span-2 min-[901px]:col-span-1">
            <Link href="/" className="mb-5 inline-block">
              <img src={logo.src} alt="Accusense Advisor" className="h-28 w-auto" />
            </Link>
            <p className="my-5 max-w-[30ch] text-[14.5px] font-medium leading-[1.6] text-[#1a1a1a]/60">
              Precise books, sharp advice, and complete peace of mind for founders and growing businesses.
            </p>
            <div className="flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1a1a1a]/12 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Useful Links" links={useFullLinks} />

          <div>
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5 text-[14.5px] font-medium leading-[1.5] text-[#1a1a1a]/60">
                <FiPhone className="mt-0.75 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+920000000000" className="transition-colors duration-200 hover:text-[#1a1a1a]">
                  +92 000 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14.5px] font-medium leading-[1.5] text-[#1a1a1a]/60">
                <FiMail className="mt-0.75 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:hello@accusense.co" className="transition-colors duration-200 hover:text-[#1a1a1a]">
                  hello@accusense.co
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14.5px] font-medium leading-[1.5] text-[#1a1a1a]/60">
                <FiMapPin className="mt-0.75 h-4 w-4 shrink-0 text-accent" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[#1a1a1a]/12 py-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex -rotate-3 items-center gap-2 rounded-full border-[1.5px] border-accent/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              <FiCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
              Books reconciled
            </span>
            <span className="text-[13px] font-medium text-[#1a1a1a]/45">
              © {new Date().getFullYear()}{" "}
              <b className="font-semibold text-[#1a1a1a]/60">Accusense Advisor</b>. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5.5">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1a1a1a]/45">
              <span className="h-[7px] w-[7px] animate-pulse-ring rounded-full bg-accent" />
              {time} PKT
            </span>
            <Link
              href="/privacy"
              className="text-[13px] font-medium text-[#1a1a1a]/45 transition-colors duration-200 hover:text-[#1a1a1a]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] font-medium text-[#1a1a1a]/45 transition-colors duration-200 hover:text-[#1a1a1a]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
