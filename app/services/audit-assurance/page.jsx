import PageHero from "@/components/shared/PageHero";
import AuditAssuranceInfo from "@/components/services/AuditAssuranceInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Audit & Assurance — Accusense Advisors",
  description: "An honest, independent look at the numbers you rely on.",
};

export default function AuditAssurancePage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="Audit & Assurance"
        title={
          <>
            An independent look
            <br />
            at <span className="text-accent">your numbers.</span>
          </>
        }
        description="Chartered, regulated audit and assurance work — so your stakeholders can trust your financials as much as you do."
      />
      <AuditAssuranceInfo />
      <CTA
        heading={
          <>
            Give your stakeholders <span className="text-accent">real confidence.</span>
          </>
        }
        description="Book a free consultation and find out what an independent audit could confirm — or uncover."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
