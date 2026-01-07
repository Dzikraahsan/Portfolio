import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const currentYear = new Date().getFullYear();

AOS.init({
  offset: 100,
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  disableMutationObserver: true,
});

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#eaebed]/90 text-sm">
            &copy; {currentYear} Dzikra Ahsan Imawan. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent text-[#eaebed] hover:bg-[#4ca1af]"
              asChild
            >
              <a
                href="https://github.com/Dzikraahsan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent text-[#eaebed] hover:bg-[#4ca1af]"
              asChild
            >
              <a
                href="https://www.instagram.com/dzii27/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent text-[#eaebed] hover:bg-[#4ca1af]"
              asChild
            >
              <a href="mailto:dzikraahsan10@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
