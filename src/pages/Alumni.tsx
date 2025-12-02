import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Alumni = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Alumni</h1>
          <p className="text-muted-foreground text-lg">Stay connected with Alpha Xi.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
