import Link from "next/link";
import { FiArrowRight, FiCheck, FiStar, FiAward, FiUsers } from "react-icons/fi";

const chips = [
  {
    label: "Chartered & regulated",
    position: "top-[15%] left-[3%] lg:left-[2%]",
    rotate: "rotate(-4deg)",
    delay: "0s",
  },
  {
    label: "Fixed-fee engagements",
    position: "top-[18%] right-[2%] lg:right-[1%]",
    rotate: "rotate(4deg)",
    delay: "1.2s",
  },
  {
    label: "Direct access to your accountant",
    position: "bottom-[16%] left-[6%] lg:left-[3%]",
    rotate: "rotate(3deg)",
    delay: "0.6s",
  },
];

const trustItems = [
  { icon: FiStar, title: "Best Advisors", description: "Seasoned specialists guiding every decision." },
  { icon: FiAward, title: "Certified Professionals", description: "Credentialed, regulated, always accountable." },
  { icon: FiUsers, title: "Trusted Clients", description: "Long-term partnerships built on results." },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="bg-ledger-grid" aria-hidden="true" />

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(60% 65% at 50% 42%, #fff 0%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 z-[2] hidden lg:block" aria-hidden="true">
          {chips.map((chip) => (
            <span
              key={chip.label}
              style={{ animationDelay: chip.delay, "--rot": chip.rotate }}
              className={`animate-floaty absolute inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-white py-2 pl-2.5 pr-4 text-[13.5px] font-semibold text-[#1a1a1a] shadow-[0_12px_30px_-12px_rgba(26,26,26,0.22)] ${chip.position}`}
            >
              <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-accent">
                <FiCheck className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              {chip.label}
            </span>
          ))}
        </div>

        <div className="relative z-[3] mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold shadow-[0_2px_14px_-6px_rgba(26,26,26,0.12)]">
            <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(208,11,20,0.14)]" />
            Precision you can count on
          </span>

          <h1 className="whitespace-nowrap max-[680px]:whitespace-normal">
            Accounting built on precision,
            <br />
            advice built on <span className="text-accent">trust.</span>
          </h1>

          <p className="mt-6 text-lg font-normal text-muted">
            A chartered accounting practice for founders and businesses who want clean books, sharp advice, and
            complete peace of mind.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn inline-flex items-center gap-2 rounded bg-accent px-6 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a free consultation
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="btn inline-flex items-center gap-2 rounded border-[1.5px] border-[#1a1a1a] px-6 py-3.5 text-sm text-[#1a1a1a] transition-colors duration-200 hover:bg-[#1a1a1a] hover:text-white"
            >
              Our services
            </Link>
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
