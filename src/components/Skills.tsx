import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React JS", logoUrl: "https://cdn.simpleicons.org/react/61DAFB", percentage: 43 },
        { name: "CSS", logoUrl: "https://cdn.simpleicons.org/css/06B6D4", percentage: 80 },
        { name: "JavaScript", logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E", percentage: 72 },
        { name: "TypeScript", logoUrl: "https://cdn.simpleicons.org/typescript/3178C6", percentage: 67 },
        { name: "HTML/CSS", logoUrl: "https://cdn.simpleicons.org/html5/E34F26", percentage: 90 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", logoUrl: "https://cdn.simpleicons.org/nodedotjs/339933", percentage: 34 },
        { name: "Python", logoUrl: "https://cdn.simpleicons.org/python/3776AB", percentage: 41 },
        { name: "MySQL", logoUrl: "https://cdn.simpleicons.org/mysql/4479A1", percentage: 82 },
        { name: "SQL", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1", percentage: 80 },
        { name: "PHP", logoUrl: "https://cdn.simpleicons.org/php/777BB4", percentage: 76 },
        { name: "TIDB", logoUrl: "https://cdn.simpleicons.org/databricks/FF3621", percentage: 85 },
        { name: "Firebase", logoUrl: "https://cdn.simpleicons.org/firebase/FFCA28", percentage: 73 },
      ],
    },
    {
      title: "Framework",
      skills: [
        { name: "Laravel", logoUrl: "https://cdn.simpleicons.org/laravel/FF2D20", percentage: 70 },
        { name: "Bootstrap CSS", logoUrl: "https://cdn.simpleicons.org/bootstrap/7952B3", percentage: 85 },
        { name: "Vue", logoUrl: "https://cdn.simpleicons.org/vuedotjs/4FC08D", percentage: 10 },
        { name: "Vite", logoUrl: "https://cdn.simpleicons.org/vite/646CFF", percentage: 20 },
        { name: "Tailwind CSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4", percentage: 44 },
      ],
    },
    {
      title: "Deployments",
      skills: [
        { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/181717", percentage: 88 },
        { name: "Vercel", logoUrl: "https://cdn.simpleicons.org/vercel/000000", percentage: 85 },
        { name: "Railway", logoUrl: "https://cdn.simpleicons.org/railway/0B0D0E", percentage: 80 },
        { name: "Cloudinary", logoUrl: "https://cdn.simpleicons.org/cloudinary/3448C5", percentage: 90 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", logoUrl: "https://cdn.simpleicons.org/git/F05032", percentage: 80 },
        { name: "VS Code", logoUrl: "https://api.iconify.design/vscode-icons:file-type-vscode.svg", percentage: 85 },
        { name: "Figma", logoUrl: "https://cdn.simpleicons.org/figma/F24E1E", percentage: 74 },
        { name: "Canva", logoUrl: "https://cdn.simpleicons.org/canva/00C4CC", percentage: 89 },
      ],
    },
    {
      title: "Gaming",
      skills: [
        {
          name: "eFootball", logoUrl: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1762339157/efootball-logo_jrnfza.png", percentage: 99
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-[25px] font-bold text-center mb-9 md:mb-12 md:text-4xl formular-bold">SKILLS</h2>

        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" data-aos="fade-up">
            {skillCategories.map((category) => (
              <Card key={category.title} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                            aria-label={skill.name}
                          >
                            <img
                              src={skill.logoUrl}
                              alt={skill.name}
                              className="w-6 h-8 flex-shrink-0 object-contain transition-transform duration-200 hover:scale-110 active:scale-110"
                            />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          align="center"
                          sideOffset={6}
                          collisionPadding={10}
                          avoidCollisions={true}
                          className="px-2.5 py-1.5 text-xs sm:text-sm font-medium bg-popover text-popover-foreground border border-border shadow-lg rounded-md z-[100] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-150"
                        >
                          {skill.name}
                        </TooltipContent>
                      </Tooltip>

                      <div className="flex-1">
                        <Progress
                          value={skill.percentage}
                          className="h-4 rounded-md [&>div]:bg-[#4ca1af] [&>div]:rounded-none"
                        />
                      </div>

                      <div className="w-9 text-right">
                        <span className="efootball-sans-bold text-sm">{skill.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
