import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PeerMentorship = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Peer Mentorship</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our peer mentorship program connects younger brothers with experienced members, 
              fostering personal growth, academic success, and professional development.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PeerMentorship;
