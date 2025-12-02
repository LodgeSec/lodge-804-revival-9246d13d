import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InstagramFeed from "@/components/InstagramFeed";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Alpha Xi of{" "}
                <span className="text-primary">Chi Psi</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Taking the idea of Brotherhood to heart — Chi Psi develops young men 
                socially, intellectually, and morally at Stevens Institute of Technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
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
                <a href="https://brother.chipsi.org/mentorship/" target="_blank" rel="noopener noreferrer">Peer Mentorship</a>
              </Button>
            </div>
            {/* small sneak-peek preview of recent posts so users see images in the initial frame */}
            <div className="mt-8 -mb-12 relative z-20 flex justify-center">
              <div className="w-full max-w-3xl px-4">
                <InstagramFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
