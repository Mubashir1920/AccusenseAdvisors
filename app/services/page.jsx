import PageHero from "@/components/shared/PageHero";
import Services from "@/components/shared/Services";
import WhyServicesStandOut from "@/components/services/WhyServicesStandOut";
import CTA from "@/components/shared/CTA";

export const metadata = {
  title: "Services — Accusense Advisors",
  description:
    "From day-to-day bookkeeping to strategic advisory, we cover the full financial picture — so you can focus on running your business.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumb="Services"
        title={
          <>
            Everything your business
            <br />
            needs, <span className="text-accent">under one roof.</span>
          </>
        }
        description="From day-to-day bookkeeping to strategic advisory, we cover the full financial picture — so you can focus on running your business."
      />
      <Services
        eyebrow="What we do"
        heading="Our services"
        description="Comprehensive, tailored, and delivered with precision — every service backed by a chartered, regulated practice."
      />
      <WhyServicesStandOut />
      <CTA
        heading={
          <>
            Not sure which service you <span className="text-accent">need?</span>
          </>
        }
        description="Book a free consultation and we'll help you figure out exactly where we can add the most value — no obligation, no jargon."
      />
    </main>
  );
}
