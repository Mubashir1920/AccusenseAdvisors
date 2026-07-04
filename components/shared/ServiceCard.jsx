import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ServiceCard({ number, icon: Icon, title, description, href }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_26px_50px_-26px_rgba(26,26,26,0.28)]">
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />

      <span className="absolute right-8 top-[30px] text-sm font-bold text-line transition-colors duration-300 group-hover:text-accent/35">
        {number}
      </span>

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
      </div>

      <h3 className="mb-3 font-semibold text-xl!">{title}</h3>
      <p className="mb-5 text-[14.5px] font-medium text-muted">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 group-hover:gap-3 group-hover:text-accent"
      >
        Learn more
        <FiArrowRight className="h-[15px] w-[15px]" />
      </Link>
    </article>
  );
}
