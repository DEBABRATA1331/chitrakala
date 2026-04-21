import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import About from "@/components/About";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <InteractiveCanvas />
        <About />
        <GallerySection />
        <Testimonials />
        <PricingSection />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
