import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Officers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Officers</h1>
          <p className="text-muted-foreground text-lg">Leadership of Alpha Xi chapter.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Officers;
