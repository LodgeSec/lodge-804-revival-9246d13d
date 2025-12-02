import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const brothersByClass = {
  "2025": [
    "Jacob Lopez",
    "Brian Sampson",
    "Ryan Tierney",
    "Matthew Werner",
  ],
  "2026": [
    "Aidan Fazioli",
    "Matthew Mammano",
    "Nicholas Messina",
    "Joseph Katz",
    "Nicholas Mirigliani",
    "Aidan Robinson",
    "Cristian Ortiz",
    "Joseph Welsko",
    "Andrew Yurovchak",
    "Miles Cabreza",
    "Hissam Effendi",
    "Blake Whartenby",
    "Kyle Van Kouch",
  ],
  "2027": [
    "Michael Zanone",
    "Shane Mitchell",
    "Pavel Ryutov",
    "Michael DeRiso",
    "Michael Moschello",
    "Gabriel Castillo",
    "Marco Facao",
    "Adrian Chacon",
    "Pasha Ryutov",
  ],
  "2028": [
    "Dylan Ohnsorg",
    "James Johnson",
    "Ahmed Shetewi",
    "Ted Janaqi",
  ],
};

const Brothers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterBrothers = (brothers: string[]) => {
    if (!searchQuery.trim()) return brothers;
    return brothers.filter((name) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const hasResults = (brothers: string[]) => {
    return filterBrothers(brothers).length > 0;
  };

  const allClassesEmpty = Object.values(brothersByClass).every(
    (brothers) => !hasResults(brothers)
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">Brothers</h1>

          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search brothers by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          {allClassesEmpty && searchQuery && (
            <div className="text-muted-foreground py-4">No matches found</div>
          )}

          <Tabs defaultValue="2025" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="2025">2025</TabsTrigger>
              <TabsTrigger value="2026">2026</TabsTrigger>
              <TabsTrigger value="2027">2027</TabsTrigger>
              <TabsTrigger value="2028">2028</TabsTrigger>
            </TabsList>

            {Object.entries(brothersByClass).map(([year, brothers]) => {
              const filteredBrothers = filterBrothers(brothers);
              const showPanel = !searchQuery || filteredBrothers.length > 0;

              return (
                <TabsContent
                  key={year}
                  value={year}
                  className={showPanel ? "" : "hidden"}
                >
                  <div className="grid md:grid-cols-2 gap-3">
                    {filteredBrothers.map((name) => (
                      <div
                        key={name}
                        className="bg-card border border-border rounded-lg p-4 flex justify-between items-center hover:border-primary/50 transition-colors"
                      >
                        <strong className="text-foreground font-semibold">
                          {name}
                        </strong>
                        <span className="text-muted-foreground text-sm">
                          Class of {year}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brothers;
