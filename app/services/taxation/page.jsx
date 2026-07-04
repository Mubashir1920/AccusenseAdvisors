import PageHero from "@/components/shared/PageHero";
import TaxationInfo from "@/components/services/TaxationInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Taxation Services — Accusense Advisors",
  description: "Tax handled properly — filed on time, and never a rupee more than owed.",
};

export default function TaxationPage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="Taxation"
        title={
          <>
            Tax done properly,
            <br />
            <span className="text-accent">never a surprise.</span>
          </>
        }
        description="Corporate and individual tax handled with precision — compliant filings, smart planning, and zero missed deadlines."
      />
      <TaxationInfo />
      <CTA
        heading={
          <>
            Stop guessing what you <span className="text-accent">owe.</span>
          </>
        }
        description="Book a free consultation and get a clear picture of your tax position — before it becomes a problem."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
