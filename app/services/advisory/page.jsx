import PageHero from "@/components/shared/PageHero";
import AdvisoryInfo from "@/components/services/AdvisoryInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Advisory Services — Accusense Advisors",
  description: "The financial second opinion behind your biggest business decisions.",
};

export default function AdvisoryPage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="Advisory"
        title={
          <>
            The confidence behind
            <br />
            your <span className="text-accent">biggest decisions.</span>
          </>
        }
        description="Strategic financial guidance — forecasting, planning, and analysis — so every decision is backed by the numbers."
      />
      <AdvisoryInfo />
      <CTA
        heading={
          <>
            Make your next move with <span className="text-accent">real clarity.</span>
          </>
        }
        description="Book a free consultation and see how the right financial guidance changes the decisions you make."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
