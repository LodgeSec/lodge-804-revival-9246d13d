import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import chiPsiSeal from "@/assets/chi-psi-seal.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Alpha Xi of{" "}
                <span className="text-primary">Chi Psi</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Taking the idea of Brotherhood to heart — Chi Psi develops young men 
                socially, intellectually, and morally at Stevens Institute of Technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                <Link to="/about">About Alpha Xi</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
              >
                <Link to="/peer-mentorship">Peer Mentorship</Link>
              </Button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img
                src={chiPsiSeal}
                alt="Chi Psi Fraternity Seal"
                className="relative w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
