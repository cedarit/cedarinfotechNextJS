import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TransformationModel from "@/components/TransformationModel";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import IndustriesSection from "@/components/IndustriesSection";
import FoundersSection from "@/components/FoundersSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TransformationModel />
        <ServicesSection />
        <ImpactSection />
        <IndustriesSection />
        <FoundersSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
