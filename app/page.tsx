import { Header } from "@/components/templates/header/Header";
import { Footer } from "@/components/templates/footer/Footer";
import { HeroSection } from "@/components/templates/hero/Hero";
import { TopicsSection } from "@/components/templates/topic/TopicSection";
import { HowItWorks } from "@/components/templates/how-it-works/HowItWorks";
import { Testimonials } from "@/components/templates/testimonials/Testimonials";
import { FinalCTA } from "@/components/templates/final-sta/FinalCTA";
import { Features } from "@/components/templates/features/Features";

export default function BloggyLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <TopicsSection />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
