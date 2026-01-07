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
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-[25px] text-[#eaebed] font-bold text-center mb-7 md:mb-10 md:text-4xl formular-bold">
          ABOUT ME
        </h2>

        <div className="md:max-w-[50rem] mx-auto">
          <Card className="bg-transparent">
            <CardContent className="p-8" data-aos="fade-up">
              <p className="text-[14px] md:text-lg justify text-[#eaebed]/90 leading-relaxed mb-4">
                I'm a 12th-grade student majoring in Software Engineering at
                SMKN 1 Maja. I'm interested in front-heavy fullstack developer
                and continue to hone my programming skills.
              </p>
              <p className="text-[14px] md:text-lg justify text-[#eaebed]/90 leading-relaxed">
                In the future, I'm determined to become a professional
                front-heavy fullstack developer capable of creating useful and
                innovative digital solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
