import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    title: "Chi Psi",
    description:
      "Founded May 20, 1841 at Union College — Chi Psi was founded on principles of Brotherhood and as a social fraternity.",
  },
  {
    title: "Alpha Xi",
    description:
      "Alpha Xi (founded 1883) is one of the longest continually active Alphas. Our brothers lead across campus.",
  },
  {
    title: "Stevens",
    description:
      "Stevens Institute of Technology — a hub for engineering and innovation in Hoboken, NJ.",
  },
  {
    title: "Philanthropy",
    description:
      "Each year we support NF research, the Hoboken Homeless Shelter, and the Gordie Center, while raising thousands of dollars, and serving over 1,000 volunteer hours.",
  },
];

export const InfoCards = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
