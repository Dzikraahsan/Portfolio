import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Python", "MySQL", "SQL", "PHP", "TIDB", "FireBase"],
    },
    {
      title: "Framework",
      skills: ["Laravel", "Bootstrap CSS", "Vue", "Vite", "Tailwind CSS"],
    },
    {
      title: "Deployments",
      skills: ["GitHub", "Vercel", "Railway", "Cloudinary"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Canva"],
    },
    {
      title: "Gaming",
      skills: ["eFootball", "Clash Of Clans"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
