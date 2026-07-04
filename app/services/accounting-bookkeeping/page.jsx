import PageHero from "@/components/shared/PageHero";
import AccountingBookkeepingInfo from "@/components/services/AccountingBookkeepingInfo";
import CTA from "@/components/shared/CTA";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Accounting & Bookkeeping — Accusense Advisors",
  description:
    "Accurate, current books — reconciled, reported, and ready whenever you need them.",
};

export default function AccountingBookkeepingPage() {
  return (
    <main>
      <PageHero
        parent={{ label: "Services", href: "/services" }}
        crumb="Bookkeeping"
        title={
          <>
            Books that are always
            <br />
            <span className="text-accent">accurate and current.</span>
          </>
        }
        description="Day-to-day bookkeeping and monthly accounting handled end to end, so your numbers are always ready when you need them."
      />
      <AccountingBookkeepingInfo />
      <CTA
        heading={
          <>
            Ready for books you can <span className="text-accent">actually rely on?</span>
          </>
        }
        description="Book a free consultation and see how straightforward your monthly accounting can be."
      />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
