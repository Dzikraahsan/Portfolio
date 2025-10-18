import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Dzikra Ahsan Imawan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Front-End Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web applications
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Button asChild>
            <a href="#projects">View My Project</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Dzikraahsan" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/dzii27/?__pwa=1" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:dzikraahsan10l@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
