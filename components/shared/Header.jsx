"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
  FaBuildingColumns,
  FaGears,
  FaScaleBalanced,
} from "react-icons/fa6";
import logo from "@/public/ACCUSENSE-ADVISOR.png";

const services = [
  {
    name: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
    icon: FaCalculator,
    description: "Accurate books you can always rely on.",
  },
  {
    name: "Taxation Services",
    href: "/services/taxation",
    icon: FaFileInvoiceDollar,
    description: "Compliant filings, minimized liability.",
  },
  {
    name: "Corporate & Secretarial",
    href: "/services/corporate-secretarial",
    icon: FaBuildingColumns,
    description: "Formation, compliance, and governance.",
  },
  {
    name: "Advisory Services",
    href: "/services/advisory",
    icon: FaChartLine,
    description: "Strategic guidance behind every decision.",
  },
  {
    name: "ERP Consultancy",
    href: "/services/erp-consultancy",
    icon: FaGears,
    description: "Systems tailored to how you operate.",
  },
  {
    name: "Business Valuation",
    href: "/services/business-valuation",
    icon: FaScaleBalanced,
    description: "Unlock the true value of your business.",
  },
];

function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-sm font-medium text-[#1a1a1a] transition-colors duration-200 hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" onClick={closeMobile}>
          <Image src={logo} alt="Accusense Advisors" priority className="h-16 md:h-20  w-auto" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <NavLink href="/">Home</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              onClick={() => setServicesOpen(false)}
              className="flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] transition-colors duration-200 hover:text-accent"
            >
              Services
              <FiChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </Link>

            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                servicesOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="w-88 origin-top rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-black/3"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <service.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-[#1a1a1a]">
                        {service.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-[#1a1a1a]/60">
                        {service.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink href="/who-we-help">Who We Help</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn inline-flex items-center justify-center bg-accent rounded-md px-5 py-2.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Leave a Message
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#1a1a1a] transition-colors duration-200 hover:bg-black/5 md:hidden"
        >
          {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-60 overflow-hidden md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <Image src={logo} alt="Accusense Advisors" className="h-16 w-auto" />
            <button
              aria-label="Close menu"
              onClick={closeMobile}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#1a1a1a] transition-colors duration-200 hover:bg-black/5"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4">
            <Link
              href="/"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-black/3"
              onClick={closeMobile}
            >
              Home
            </Link>

            <div className="flex items-center justify-between rounded-lg pr-1.5 text-sm font-medium text-[#1a1a1a] hover:bg-black/3">
              <Link
                href="/services"
                className="flex-1 px-3 py-2.5"
                onClick={closeMobile}
              >
                Services
              </Link>
              <button
                aria-label="Toggle services submenu"
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/5"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                <FiChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-1 py-1 pl-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#1a1a1a]/80 hover:bg-black/3"
                    onClick={closeMobile}
                  >
                    <service.icon className="h-4 w-4 text-accent" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/who-we-help"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-black/3"
              onClick={closeMobile}
            >
              Who We Help
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-black/3"
              onClick={closeMobile}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-black/3"
              onClick={closeMobile}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="btn mt-4 inline-flex items-center justify-center bg-accent px-5 py-2.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5 rounded-md"
              onClick={closeMobile}
            >
              Leave a Message
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
