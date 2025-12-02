import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Alumni = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 mx-auto text-center">
        <div className="container mx-auto px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">Alumni</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-4xl mx-auto text-center">
            Our alumni association and advisory board support the Alpha through
            mentorship, events, and stewardship. Contact the groups below for alumni
            relations, donations, or to get involved.
             <br />
             <span className="mt-4 block">
               Visit the Alpha Xi alumni website: <a href="https://alphaxialumni.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">alphaxialumni.org</a>
             </span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto justify-center">
            <Card className="border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Alpha Xi Alumni Association
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">President:</strong>
                    <span className="text-muted-foreground">Michael Kosusko</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">Vice President:</strong>
                    <span className="text-muted-foreground">Paul Kokosinski</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">Secretary:</strong>
                    <span className="text-muted-foreground">Alexander Barresi</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">Treasurer:</strong>
                    <span className="text-muted-foreground">Michael O'Neill</span>
                  </div>
                </div>
                <a
                  href="mailto:secretary@alphaxialumni.org"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-4"
                >
                  <Mail className="h-4 w-4 transition-transform duration-300 hover:animate-spin" />
                  Contact the Alumni Association
                </a>
                  <a
                    href="https://alphaxialumni.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-2 ml-10"
                  >
                    Visit Alumni Website
                  </a>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Alpha Xi Alumni Advisory Board
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">President:</strong>
                    <span className="text-muted-foreground">Aleksander Dimoski</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">Vice President:</strong>
                    <span className="text-muted-foreground">Theodore Sherman</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">Secretary:</strong>
                    <span className="text-muted-foreground">Liam Walker</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-foreground w-32">Treasurer:</strong>
                    <span className="text-muted-foreground">Kameron Rashidzada</span>
                  </div>
                </div>
                <a
                  href="mailto:aleksdimoski890@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-4"
                >
                  <Mail className="h-4 w-4 transition-transform duration-300 hover:animate-spin" />
                  Contact the Advisory Board
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
