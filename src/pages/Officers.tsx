import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const officers = [
  {
    number: "#1",
    name: "Matthew Werner",
    title: "President",
    email: "president@lodge804.com",
  },
  {
    number: "#2",
    name: "Jacob Lopez",
    title: "Vice President/Lodge Manager",
    email: "vp@lodge804.com",
  },
  {
    number: "#3",
    name: "Michael Zanone",
    title: "Secretary",
    email: "secretary@lodge804.com",
  },
  {
    number: "#4",
    name: "Joseph Welsko",
    title: "Treasurer",
    email: "treasurer@lodge804.com",
  },
];

const Officers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Officers</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map((officer) => (
              <Card
                key={officer.number}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {officer.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {officer.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {officer.title}
                      </p>
                      <a
                        href={`mailto:${officer.email}`}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Officers;
