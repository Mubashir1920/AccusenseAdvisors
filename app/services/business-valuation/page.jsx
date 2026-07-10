import PageHero from "@/components/shared/PageHero";
import BusinessValuationInfo from "@/components/services/BusinessValuationInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Business Valuation — Accusense Advisors",
  description: "Independent, reliable, and professional business valuation services to help you make informed decisions with confidence.",
};

export default function BusinessValuationPage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="Business Valuation"
        title={
          <>
            Know exactly what your
            <br />
            business is <span className="text-accent">really worth.</span>
          </>
        }
        description="Independent, reliable, and professional valuations — for capital raises, M&A, sales, and financial reporting."
      />
      <BusinessValuationInfo />
      <CTA
        heading={
          <>
            Ready to put a number on <span className="text-accent">what you've built?</span>
          </>
        }
        description="Book a free consultation and find out what an independent valuation could mean for your next move."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
