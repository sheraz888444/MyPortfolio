import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// 🖼 Import local images
import comsatsImg from "@/assets/comsats.png";
import daanish2Img from "@/assets/daanish2.png";

export default function Education() {
  useScrollAnimation();

  const educationData = [
    {
      degree: "Software Engineering",
      institution: "COMSATS University",
      period: "Currently in 7th Semester • Feb 2023 - June 2027",
      description:
        " DSA, OOP, ML, Python, SDA,DATABASES,C++ and software development methodologies.",
      grade: "7th ",
      
      icon: GraduationCap,
      image: comsatsImg,
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Punjab Daanish Higher Secondary School Boys Mianwali",
      period: "Completed with distinction",
      description:
        "Strong foundation in computer science fundamentals, mathematics, and programming languages.",
      grade: "90%",
      gradeLabel: "Marks",
      icon: Award,
      image: daanish2Img,
    },
    {
      degree: "Secondary School Certificate",
      institution: "Punjab Daanish Secondary School Boys Mianwali",
      period: "Completed with excellent results",
      description:
        "Solid academic foundation with focus on science and mathematics.",
      grade: "91%",
      gradeLabel: "Marks",
      icon: BookOpen,
      image: daanish2Img,
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-sm text-accent uppercase tracking-widest mb-4"
            data-testid="education-subtitle"
          >
            Academic Journey
          </h2>
          <h3
            className="text-4xl lg:text-5xl font-bold mb-8"
            data-testid="education-title"
          >
            Education.
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line for large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`card-education-${index}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background z-10"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="glass rounded-xl p-6 hover-lift fade-in">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <img
                        src={edu.image}
                        alt={`${edu.degree} Education`}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-testid={`img-education-${index}`}
                      />
                      <div className="flex-1">
                        <h4
                          className="text-lg font-semibold mb-2 text-primary"
                          data-testid={`text-degree-${index}`}
                        >
                          {edu.degree}
                        </h4>
                        <h5
                          className="text-base font-medium mb-2"
                          data-testid={`text-institution-${index}`}
                        >
                          {edu.institution}
                        </h5>
                        <p
                          className="text-sm text-muted-foreground mb-3"
                          data-testid={`text-period-${index}`}
                        >
                          {edu.period}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-testid={`text-description-${index}`}
                        >
                          {edu.description}
                        </p>
                      </div>
                      <div className="text-center sm:text-left">
                        <span
                          className="text-xl font-bold text-accent"
                          data-testid={`text-grade-${index}`}
                        >
                          {edu.grade}
                        </span>
                        <p
                          className="text-xs text-muted-foreground"
                          data-testid={`text-grade-label-${index}`}
                        >
                          {edu.gradeLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer (only on large screens) */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
