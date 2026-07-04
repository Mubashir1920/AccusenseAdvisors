import Hero from "@/components/home/Hero";
import Services from "@/components/shared/Services";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/Reviews";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Reviews />
      <CTA />
    </main>
  );
}
