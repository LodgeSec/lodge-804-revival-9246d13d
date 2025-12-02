import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InfoCards } from "@/components/InfoCards";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-4xl space-y-4">
            <p className="text-foreground text-lg leading-relaxed">
              Chi Psi at Stevens Institute of Technology is a community where brotherhood, scholarship, and character are lived every day. Founded in 1883, the fraternity has built a multigenerational legacy of lifelong bonds and personal growth.
            </p>

            <p className="text-foreground text-lg leading-relaxed">
              Known on campus as Alpha Xi — The Lodge — our Alpha has long been a cornerstone of Stevens' Greek life. We champion academic excellence through mentorship, leadership, and support, encouraging members to pursue ambitious goals in the classroom and beyond and to become well-rounded in their fields.
            </p>

            <p className="text-foreground text-lg leading-relaxed">
              Leadership and service are equally central to our mission. Members step up in the Alpha and across campus, from leadership in the Student Government and clubs, distinguished involvement in campus research, or excellence in academics, the Lodge builds skills that endure well past graduation. Through philanthropy and volunteerism, Alpha Xi contributes meaningfully to the Stevens and Hoboken communities.
            </p>

            <p className="text-foreground text-lg leading-relaxed">
              As higher education evolves, our commitment to brotherhood, scholarship, and service remains constant. Guided by Chi Psi's ideals, Alpha Xi continues to shape lives and uphold a legacy of excellence that has been the longest of any fraternity on Castle Point.
            </p>

            <p className="text-muted-foreground italic mt-6">
              Alpha Xi of Chi Psi at Stevens Institute of Technology — 2025
            </p>
          </div>
        </div>
      </main>
      <InfoCards />
      <Footer />
    </div>
  );
};

export default About;
