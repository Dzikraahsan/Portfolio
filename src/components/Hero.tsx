import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r text-[#4ca1af]">Dzikra Ahsan Imawan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Front-End Developer</p>
          <p className="text-1x1 text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web applications
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Button variant="outline" asChild className="bg-[#4ca1af] hover:bg-[#2c3e50] text-white border-[#212327] hover:border-[#4ca1af] !important">
            <a href="#projects">View My Project</a>
          </Button>
          <Button variant="outline" className="bg-[#eaebed] hover:bg-[#2c3e50] text-[#212327] hover:text-white border-black hover:border-[#4ca1af]" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-[#212327]">Build with:</span>
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer">
              <img
                src="https://api.iconify.design/logos:react.svg"
                alt="React"
                className="h-5 w-5"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                React
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <img
                src="https://res.cloudinary.com/da4fjxm1e/image/upload/v1760871197/logo-vite_hfrhcq.png"
                alt="Vite"
                className="h-5 w-5"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Vite
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <img
                src="https://api.iconify.design/logos:tailwindcss.svg"
                alt="Tailwind CSS"
                className="h-10 w-10"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Tailwind
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <img
                src="https://api.iconify.design/logos:typescript.svg"
                alt="TypeScript"
                className="h-7 w-7"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                TypeScript
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
