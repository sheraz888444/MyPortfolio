import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

export default function Hero() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

  const typingTexts = [
    "full-stack Websites(React and Node.js)",
    "Desktop apps with .NET(C#)",
    " AI&ML Based Solutions",
    " Mobile Apps with Flutter",
    "E-Commerce Platforms",
    "Console Applications(C#)",
  ];

  const typingText = useTypingEffect(typingTexts, 150, 100, 2000);

  useEffect(() => {
    const animateValue = (
      start: number,
      end: number,
      duration: number,
      setter: (value: number) => void
    ) => {
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        setter(value);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    animateValue(0, 30, 1500, setProjectsCount);
    animateValue(0, 2, 1500, setExperienceYears);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/SHERAZ-RESUME.pdf"; // <-- file public/ folder me hona chahiye
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SHERAZ-RESUME.pdf"; // download ke waqt naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in">
            <h2 className="text-2xl text-muted-foreground mb-4" data-testid="hero-greeting">
              Hi, I'm
            </h2>
            <h1
              className="text-6xl lg:text-8xl font-bold mb-6 gradient-text"
              data-testid="hero-name"
              data-parallax="0.08"
            >
              Sheraz
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-2">Currently working on</p>
            <div
              className="text-xl lg:text-2xl text-primary font-semibold mb-8 min-h-[3.5rem] lg:min-h-[4rem]"
              data-testid="hero-typing"
            >
              <span className="typing-text">{typingText}</span>
            </div>
            <p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              data-testid="hero-description"
            >
              I see coding not as a job but as a craft — a way to design
              solutions that solve real problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume 
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="glass text-foreground px-8 py-3 font-semibold hover-lift border-primary/20 hover:border-primary/50"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-xs mx-auto lg:mx-0">
              <div className="glass rounded-2xl px-5 py-4 text-left">
                <p className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  {projectsCount}+
                </p>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="glass rounded-2xl px-5 py-4 text-left">
                <p className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  {experienceYears}+
                </p>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end fade-in">
            <div
              className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72"
              data-parallax="0.18"
              data-testid="img-profile"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-accent/40 to-primary/80 blur-3xl opacity-70" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/60 shadow-2xl bg-background/80">
                <img
                  src={profileImage}
                  alt="Sheraz Ahmed - Software Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
