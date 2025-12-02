import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const History = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Our History</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Since 1883, Alpha Xi has been one of the longest continually active chapters of Chi Psi. 
              Our rich history at Stevens Institute of Technology spans generations of brothers who have 
              contributed to both the campus community and society at large.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
