import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { InfoCards } from "@/components/InfoCards";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <InfoCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
