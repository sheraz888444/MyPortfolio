import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiPython,
  SiSharp,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFlutter,
  SiDart,
} from "react-icons/si";

export default function Skills() {
  useScrollAnimation();

  const categories = [
    {
      title: "Frontend ",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Backend ",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C#", icon: SiSharp, color: "#68217A" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL / SQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
      ],
    },
    {
      title: "Mobile App Development",
      skills: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-sm text-accent uppercase tracking-widest mb-3">
            Technical Proficiency
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & Expertise
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A blend of technical depth and practical experience across full-stack development, 
            mobile applications, and AI-driven software engineering. 
            Constantly learning and evolving to build efficient, scalable, and modern solutions.
          </p>
        </div>

        {/* Technical Categories */}
        <div className="space-y-14">
          {categories.map((category, i) => (
            <div key={i} className="fade-in">
              <h4 className="text-2xl font-semibold mb-6 text-center text-primary">
                {category.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-4 hover-lift flex flex-col items-center justify-center transition-transform duration-300"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 bg-primary/10">
                      <skill.icon
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <h5 className="text-sm sm:text-base font-medium text-center">
                      {skill.name}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
