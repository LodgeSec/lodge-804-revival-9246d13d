import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const History = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-8">History</h1>
          
          <div className="prose prose-lg max-w-4xl space-y-6 mx-auto text-center">
            <p className="text-foreground text-lg leading-relaxed">
              Alpha Xi is the oldest continuously active fraternity at Stevens Institute of Technology and has long been associated with 804 Castle Point Terrace (The Lodge). Since its founding on February 14th 1883, the Alpha has been a home for generations of students — promoting academic support, leadership development, and community service. Over the decades Alpha Xi has adapted to changing campus life while maintaining traditions that connect current members with alumni and the broader Stevens community.
            </p>

            <section className="bg-card border border-border rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Programs & Leadership</h3>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Leadership development is part of everyday Lodge life. Brothers participate in Chi Psi's signature programs — the Program for Self-Development (PSD), the Emmons Alpha Management Retreat (AMR), the Brotherhood Workshop (BW), the Outdoor Leadership Program (OLP), and the Program for Excellence (P4E) skill rotations — to build character, teamwork, and practical leadership skills.
                </p>

                <p className="text-foreground leading-relaxed">
                  Our President attends the Verne and Judy Istock Mid‑Year Leadership Retreat to sharpen chapter administration and values‑based leadership, bringing back practical tools for recruitment, governance, and member development.
                </p>

                <p className="text-foreground leading-relaxed">
                  For career readiness, Pathways to Excellence connects undergraduates with alumni mentorship, a job board, and professional resources. Learn more at{" "}
                  <a 
                    href="https://www.chipsi.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline"
                  >
                    Chi Psi National
                  </a>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
