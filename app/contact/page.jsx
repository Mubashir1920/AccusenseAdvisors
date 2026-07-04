import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/shared/ContactSection";

export const metadata = {
  title: "Contact — Accusense Advisors",
  description:
    "Whether you're ready to switch, just starting out, or simply have a question — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        crumb="Contact"
        title={
          <>
            Let&apos;s start a<br />
            <span className="text-accent">conversation.</span>
          </>
        }
        description="Whether you're ready to switch, just starting out, or simply have a question — we'd love to hear from you."
      />
      <ContactSection />
    </main>
  );
}
