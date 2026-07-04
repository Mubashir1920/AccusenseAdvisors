import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="px-6 pb-24 pt-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] px-6 py-16 text-center sm:px-10 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 120% at 50% -20%, rgba(208,11,20,0.28), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 40%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
              WebkitMaskImage: "radial-gradient(80% 80% at 50% 50%, #000, transparent 75%)",
              maskImage: "radial-gradient(80% 80% at 50% 50%, #000, transparent 75%)",
            }}
          />

          <div className="relative z-[1] mx-auto max-w-160">
            <span className="eyebrow justify-center text-white!">Get started</span>
            <h2 className="mb-4 mt-4.5 text-[clamp(2.1rem,4vw,3.3rem)]! text-white">
              Ready to put your books in <span className="text-accent">safe hands?</span>
            </h2>
            <p className="mb-9.5 text-[1.1rem] text-white/70">
              Book a free consultation and we&apos;ll show you exactly how we can help — no obligation, no
              jargon.
            </p>
            <Link
              href="/contact"
              className="btn inline-flex items-center gap-2 rounded bg-white px-[30px] py-[15px] text-sm text-[#1a1a1a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              Book a free consultation
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-5.5 text-sm font-medium text-white/55">
              Or email us at hello@accusense.co — we reply within one business day.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
