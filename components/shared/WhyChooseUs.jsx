import { FiCheckSquare, FiClock, FiStar, FiCheck } from "react-icons/fi";

const points = [
  {
    icon: FiCheckSquare,
    title: "Precision, guaranteed",
    description: "Every figure checked and reconciled. Your books are always ready when you need them.",
  },
  {
    icon: FiClock,
    title: "Responsive, always",
    description: "Talk directly to the accountant handling your work — not a call centre or a ticket queue.",
  },
  {
    icon: FiStar,
    title: "Transparent pricing",
    description: "Fixed-fee engagements agreed upfront. You always know exactly what you're paying for.",
  },
];

const stats = [
  { label: "Fixed", caption: "Transparent fees" },
  { label: "Direct", caption: "Personal contact" },
  { label: "Chartered", caption: "Regulated practice" },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-line bg-paper py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-18">
        <div>
          <span className="eyebrow">Why Accusense</span>
          <h2 className="mb-4 mt-4 text-[clamp(2rem,3.6vw,2.9rem)]!">
            A practice that treats your business like its own
          </h2>
          <p className="mb-8 text-[1.05rem] text-muted">
            We started this firm to do accounting the way it should be done — precise, transparent, and
            genuinely on your side. No jargon, no surprises, no chasing.
          </p>

          <ul className="flex flex-col gap-6">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a]">
                  <point.icon className="h-[22px] w-[22px] text-white" strokeWidth={1.8} />
                </span>
                <div>
                  <h4 className="mb-1 text-[1.08rem]!">{point.title}</h4>
                  <p className="text-[14.5px] font-medium leading-[1.5] text-muted">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[18px] bg-[#1a1a1a] p-10 text-white shadow-[0_40px_80px_-34px_rgba(26,26,26,0.5)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(130% 90% at 100% 0%, rgba(208,11,20,0.18), transparent 55%)",
              }}
            />
            <div className="relative">
              <div className="text-[3.4rem] font-bold leading-none tracking-[-0.03em] text-white">100%</div>
              <div className="mt-1.5 text-sm font-medium text-white/60">
                Compliance-ready, filed on time, every time
              </div>

              <div className="my-7 h-px bg-white/10" />

              <div className="flex justify-between gap-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex-1">
                    <b className="block text-2xl font-bold">{stat.label}</b>
                    <span className="text-[12.5px] font-medium text-white/60">{stat.caption}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-[40px] -left-[18px] flex items-center gap-3 rounded-xl bg-white px-[18px] py-[14px] text-[#1a1a1a] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)]">
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-accent">
              <FiCheck className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
            <div>
              <b className="block text-sm leading-tight">Books balanced</b>
              <span className="text-xs text-muted">Reviewed & signed off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
