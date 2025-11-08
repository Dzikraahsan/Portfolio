import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    disableMutationObserver: true,
  });

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8" data-aos="fade-up">
              <p className="text-[14px] md:text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a 12th-grade student majoring in Software Engineering at SMKN 1 Maja.
                I'm interested in front-heavy fullstack developer and continue to hone my programming skills.
              </p>
              <p className="text-[14px] md:text-lg text-muted-foreground leading-relaxed">
                In the future, I'm determined to become a professional front-heavy fullstack developer capable of
                creating useful and innovative digital solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
