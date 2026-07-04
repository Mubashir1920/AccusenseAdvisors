import PageHero from "@/components/shared/PageHero";
import CorporateSecretarialInfo from "@/components/services/CorporateSecretarialInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Corporate & Secretarial — Accusense Advisors",
  description: "Stay compliant with every regulator, without lifting a finger.",
};

export default function CorporateSecretarialPage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="Corporate & Secretarial"
        title={
          <>
            Compliant with every
            <br />
            regulator, <span className="text-accent">always.</span>
          </>
        }
        description="From incorporation to statutory filings, we keep your company's legal standing in order — so penalties are never your problem."
      />
      <CorporateSecretarialInfo />
      <CTA
        heading={
          <>
            Let&apos;s keep your company <span className="text-accent">in good standing.</span>
          </>
        }
        description="Book a free consultation and find out exactly where your compliance stands today."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
