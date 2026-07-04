import Link from "next/link";
import { FiArrowRight, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden py-24 sm:py-32">
      <div className="bg-ledger-grid" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(60% 65% at 50% 42%, #fff 0%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[3] mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <span className="eyebrow justify-center">404 error</span>

        <h1 className="mt-4.5 text-4xl! leading-none! tracking-[-0.03em]!">
          Page <span className="text-accent">not found.</span>
        </h1>

        <p className="mt-6 text-lg font-normal text-muted">
          The page you&apos;re looking for has been moved, renamed, or never existed. Let&apos;s get you back to
          somewhere that reconciles.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn inline-flex items-center gap-2 rounded bg-accent px-6 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FiHome className="h-4 w-4" />
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="btn inline-flex items-center gap-2 rounded border-[1.5px] border-[#1a1a1a] px-6 py-3.5 text-sm text-[#1a1a1a] transition-colors duration-200 hover:bg-[#1a1a1a] hover:text-white"
          >
            Contact us
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
