import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">About Alpha Xi</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Alpha Xi chapter of Chi Psi has been a cornerstone of brotherhood at Stevens Institute of Technology since 1883. 
              For over 140 years, we've been developing young men through our core values of friendship, learning, and service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
