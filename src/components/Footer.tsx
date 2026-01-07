import { useState, useCallback } from "react";
import { Github, Instagram, Mail } from "lucide-react";
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

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Dzikraahsan",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dzii27/?__pwa=1",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:dzikraahsan10@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Touch handler for mobile - keeps tooltip open
  const handleTouch = useCallback((e: React.TouchEvent, tooltipId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTouch(true);
    setOpenTooltip((prev) => (prev === tooltipId ? null : tooltipId));
  }, []);

  // Mouse handlers for desktop hover
  const handleMouseEnter = useCallback(
    (tooltipId: string) => {
      if (!isTouch) {
        setOpenTooltip(tooltipId);
      }
    },
    [isTouch]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isTouch) {
      setOpenTooltip(null);
    }
    setTimeout(() => setIsTouch(false), 100);
  }, [isTouch]);

  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#eaebed]/90 text-sm">
            &copy; {currentYear} Dzikra Ahsan Imawan. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isOpen = openTooltip === social.name;

              return (
                <div key={social.name} className="relative">
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    data-social-icon
                    className={`flex items-center justify-center w-10 h-10 rounded-md bg-transparent text-[#eaebed] hover:bg-[#4ca1af] transition-transform duration-200 ${
                      isOpen ? "scale-125" : "hover:scale-110"
                    }`}
                    aria-label={social.name}
                    onTouchEnd={(e) => handleTouch(e, social.name)}
                    onMouseEnter={() => handleMouseEnter(social.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Icon className="h-4 w-4" />
                  </a>

                  {isOpen && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs sm:text-sm font-medium bg-popover text-popover-foreground border border-border shadow-lg rounded-md z-[100] whitespace-nowrap animate-fade-in">
                      {social.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
