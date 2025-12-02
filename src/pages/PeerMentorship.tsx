import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PeerMentorship = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">
            Alpha Xi Peer Mentorship Program
          </h1>
          <div className="prose prose-lg max-w-4xl mb-8 text-center">
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Become a mentor and connect with active brothers. Mentors meet monthly
              (virtual or in-person) to provide career advice and guidance.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              If you have questions, contact Joseph Katz at{" "}
              <a
                href="mailto:katzlodge@gmail.com"
                className="text-primary hover:text-accent underline"
              >
                katzlodge@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSckBnZ9pj6M4RFTQQVySHtLYGU6hWyca30ylHTh2GWnuNTrJg/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Peer Mentor Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PeerMentorship;
