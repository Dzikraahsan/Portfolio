import { useState, useEffect, useCallback, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disableMutationObserver: true,
    });
  }, []);

  // Handle click outside to close tooltip on mobile
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-skill-icon]")) {
        setOpenTooltip(null);
      }
    };

    document.addEventListener("touchend", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, []);

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
    [isTouch],
  );

  const handleMouseLeave = useCallback(() => {
    if (!isTouch) {
      setOpenTooltip(null);
    }
    // Reset touch flag after a delay to allow hover to work again
    setTimeout(() => setIsTouch(false), 100);
  }, [isTouch]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React JS",
          logoUrl: "https://cdn.simpleicons.org/react/61DAFB",
          percentage: 43,
        },
        {
          name: "CSS",
          logoUrl: "https://cdn.simpleicons.org/css/06B6D4",
          percentage: 80,
        },
        {
          name: "JavaScript",
          logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
          percentage: 72,
        },
        {
          name: "TypeScript",
          logoUrl: "https://cdn.simpleicons.org/typescript/3178C6",
          percentage: 67,
        },
        {
          name: "HTML/CSS",
          logoUrl: "https://cdn.simpleicons.org/html5/E34F26",
          percentage: 90,
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          logoUrl: "https://cdn.simpleicons.org/nodedotjs/339933",
          percentage: 34,
        },
        {
          name: "Python",
          logoUrl: "https://cdn.simpleicons.org/python/3776AB",
          percentage: 41,
        },
        {
          name: "MySQL",
          logoUrl: "https://cdn.simpleicons.org/mysql/4479A1",
          percentage: 82,
        },
        {
          name: "SQL",
          logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1",
          percentage: 80,
        },
        {
          name: "PHP",
          logoUrl: "https://cdn.simpleicons.org/php/777BB4",
          percentage: 76,
        },
        {
          name: "TIDB",
          logoUrl: "https://cdn.simpleicons.org/databricks/FF3621",
          percentage: 85,
        },
        {
          name: "Firebase",
          logoUrl: "https://cdn.simpleicons.org/firebase/FFCA28",
          percentage: 73,
        },
      ],
    },
    {
      title: "Framework",
      skills: [
        {
          name: "Laravel",
          logoUrl: "https://cdn.simpleicons.org/laravel/FF2D20",
          percentage: 70,
        },
        {
          name: "Bootstrap CSS",
          logoUrl: "https://cdn.simpleicons.org/bootstrap/7952B3",
          percentage: 85,
        },
        {
          name: "Vue",
          logoUrl: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
          percentage: 10,
        },
        {
          name: "Vite",
          logoUrl: "https://cdn.simpleicons.org/vite/646CFF",
          percentage: 20,
        },
        {
          name: "Tailwind CSS",
          logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
          percentage: 44,
        },
      ],
    },
    {
      title: "Deployments",
      skills: [
        {
          name: "GitHub",
          logoUrl: "https://cdn.simpleicons.org/github/FFFFFF",
          percentage: 88,
        },
        {
          name: "Vercel",
          logoUrl: "https://cdn.simpleicons.org/vercel/FFFFFF",
          percentage: 85,
        },
        {
          name: "Railway",
          logoUrl: "https://cdn.simpleicons.org/railway/FFFFFF",
          percentage: 80,
        },
        {
          name: "Cloudinary",
          logoUrl: "https://cdn.simpleicons.org/cloudinary/3448C5",
          percentage: 90,
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          logoUrl: "https://cdn.simpleicons.org/git/F05032",
          percentage: 80,
        },
        {
          name: "VS Code",
          logoUrl:
            "https://api.iconify.design/vscode-icons:file-type-vscode.svg",
          percentage: 85,
        },
        {
          name: "Figma",
          logoUrl: "https://cdn.simpleicons.org/figma/F24E1E",
          percentage: 74,
        },
        {
          name: "Canva",
          logoUrl: "https://cdn.simpleicons.org/canva/00C4CC",
          percentage: 89,
        },
      ],
    },
    {
      title: "Gaming",
      skills: [
        {
          name: "eFootball",
          logoUrl:
            "https://res.cloudinary.com/da4fjxm1e/image/upload/v1767783838/efootball-logo-white_qje5vp.png",
          percentage: 99,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto" ref={containerRef}>
        <h2 className="text-[25px] font-bold text-center text-[#eaebed] mb-7 md:mb-10 md:text-4xl formular-bold">
          SKILLS
        </h2>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="overflow-hidden bg-transparent"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-xl text-[#eaebed]">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-8 text-[#eaebed] ">
                {category.skills.map((skill) => {
                  const tooltipId = `${category.title}-${skill.name}`;
                  const isOpen = openTooltip === tooltipId;

                  return (
                    <div key={skill.name} className="flex items-center gap-4">
                      <div className="relative">
                        <button
                          type="button"
                          data-skill-icon
                          className={`cursor-pointer focus:outline-none rounded transition-transform duration-200 ${
                            isOpen ? "scale-125" : "hover:scale-110"
                          }`}
                          aria-label={skill.name}
                          onTouchEnd={(e) => handleTouch(e, tooltipId)}
                          onMouseEnter={() => handleMouseEnter(tooltipId)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <img
                            src={skill.logoUrl}
                            alt={skill.name}
                            className="w-8 h-7 -translate-y-[-3px] flex-shrink-0 object-contain pointer-events-none"
                          />
                        </button>

                        {isOpen && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs sm:text-sm font-medium bg-popover text-popover-foreground border border-border shadow-lg rounded-md z-[100] whitespace-nowrap animate-fade-in">
                            <p className="-translate-y-[1px] md:-translate-y-[0.75px]">
                              {skill.name}
                            </p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <Progress
                          value={skill.percentage}
                          className="h-4 rounded-md [&>div]:bg-[#4ca1af] [&>div]:rounded-none"
                        />
                      </div>

                      <div className="w-9 text-right">
                        <span className="efootball-sans-bold text-sm">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
