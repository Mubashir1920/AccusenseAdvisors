import PageHero from "@/components/shared/PageHero";
import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import OurValues from "@/components/about/OurValues";
import CTA from "@/components/shared/CTA";

export const metadata = {
  title: "About Us — Accusense Advisors",
  description:
    "We're Accusense — a chartered accounting practice built to do things properly: precise, transparent, and genuinely on your side.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About"
        title={
          <>
            The people behind
            <br />
            your <span className="text-accent">numbers.</span>
          </>
        }
        description="We're Accusense — a chartered accounting practice built to do things properly: precise, transparent, and genuinely on your side."
      />
      <OurStory />
      <WhyChooseUs />
      <OurValues />
      <CTA
        heading={
          <>
            Let&apos;s build something <span className="text-accent">solid</span> together.
          </>
        }
        description="Book a free consultation and see what it's like to have accountants who are genuinely on your side."
      />
    </main>
  );
}
