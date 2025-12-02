import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Brothers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Our Brothers</h1>
          <p className="text-muted-foreground text-lg">Meet the brothers of Alpha Xi.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brothers;
