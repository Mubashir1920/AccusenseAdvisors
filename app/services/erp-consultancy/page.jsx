import PageHero from "@/components/shared/PageHero";
import ErpConsultancyInfo from "@/components/services/ErpConsultancyInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "ERP Consultancy — Accusense Advisors",
  description: "Systems that fit how your business actually runs.",
};

export default function ErpConsultancyPage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="ERP Consultancy"
        title={
          <>
            Systems built around
            <br />
            <span className="text-accent">how you operate.</span>
          </>
        }
        description="From selecting the right ERP to configuring it around your workflows, we make your systems work for you — not the other way around."
      />
      <ErpConsultancyInfo />
      <CTA
        heading={
          <>
            Ready to outgrow your <span className="text-accent">spreadsheets?</span>
          </>
        }
        description="Book a free consultation and we'll show you what the right system could take off your plate."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
