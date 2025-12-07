import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

const Projects = () => {
  const projects = [
    {
      title: "Kaifood",
      description: "Marketplace website for home made food selling business.",
      technologies: ["React JS", "Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Dzikraahsan/kaifood",
      demo: "https://www.kaifood.web.id/",
      isRealProject: true,
    },
    {
      title: "Portfolio",
      description: "Personal portfolio website created using HTML, CSS, and Javascript.",
      technologies: ["JavaScript", "Bootstrap", "HTML/CSS"],
      github: "https://github.com/Dzikraahsan/Portfolio",
      demo: "https://portfoliodzikra-2.vercel.app/",
    },
    {
      title: "Salary Management System",
      description: "Create a salary management system website using PHP, HTML, and CSS.",
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
      github: "https://github.com/Dzikraahsan/Management_gaji",
      demo: "",
    },
    {
      title: "Web School",
      description: "Create a school website using PHP, HTML, CSS, and Javascript.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Dzikraahsan/web_sekolah",
      demo: "",
    },
    {
      title: "Web Dream Home",
      description: "Create a Dream Home website using Laravel, PHP, HTML and CSS.",
      technologies: ["Laravel", "PHP", "HTML/CSS"],
      github: "https://github.com/Dzikraahsan/dream_home/tree/main",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-[25px] font-bold text-center mb-9 md:mb-12 md:text-4xl formular-bold">PROJECTS</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" data-aos="fade-up">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col relative">
              {project.isRealProject && (
                <Badge className="absolute rounded-sm top-7 right-6 bg-[#4ca1af] hover:bg-[#2c3e50] text-primary-foreground">
                  Real Project
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-[21px] md:text-[26px]">{project.title}</CardTitle>
                <CardDescription className="text-[13px] md:text-[15px] justify2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="hover:bg-[#2c3e50] hover:text-[#eaebed]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-[#4ca1af] hover:bg-[#2c3e50] text-white border-[#426370] hover:border-[#4ca1af]">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-[#eaebed] hover:bg-[#2c3e50] text-[#212327] hover:text-white border-[#426370] hover:border-[#4ca1af]">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
