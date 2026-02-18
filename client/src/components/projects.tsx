import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Projects() {
  useScrollAnimation();

  const projects = [
    {
      title: "Learning Management System (LMS)",
      description: "A full-featured Learning Management System built with PHP Laravel that allows admins to manage courses, instructors, and students, while learners can enroll in courses, view lessons, and track their progress.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFCqf4lXVPJXqfbfr4DWQvtSkb5af5U3sBQ&s",
      tags: ["#PHP", "#Laravel", "#MySQL", "#Bootstrap"],
      githubUrl: "https://github.com/sheraz888444/LMS_project",
      liveUrl: "#"
    },
   
    {
      title: "AI Assistant",
      description: "An intelligent AI-powered assistant built with modern web technologies to help users with various tasks and queries.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#AI", "#Open Ai API", "#React","#MoongoDB","#websearch API"],
      githubUrl: "https://github.com/sheraz888444/Ai-Assistant",
      liveUrl: "#" // Keep this or remove if not needed
    },
     {
      title: "AI Based Resume Analyzer",
      description: "An intelligent tool that automatically analyzes and ranks candidate resumes using machine learning and natural language processing (NLP).",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#Python", "#OpenAI API"],
      githubUrl: "https://github.com/sheraz888444/ResumeCritiquer",
      liveUrl: "#"
    },
    {
      title: "Railway Reservation System",
      description: "A full-stack railway reservation system built using the MERN stack. It allows passengers to search trains, check seat availability, book tickets, and manage reservations, while admins can manage routes, schedules, and users.",
      image: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#React", "#Node.js", "#Express", "#MongoDB", "#MERN"],
      githubUrl: "https://github.com/sheraz888444/railway-system-MERN",
      liveUrl: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A cross-platform mobile weather application built using Flutter and Dart that fetches real-time weather data via API and displays current conditions, temperature, humidity, and forecasts in a clean UI.",
      image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#Flutter", "#Dart", "#MobileApp", "#API"],
      githubUrl: "https://github.com/sheraz888444/WeatherApp",
      liveUrl: "#"
    },
     {
      title: "Language Detector",
      description: "An intelligent language detection tool that identifies the language of input text using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#Python", "#jupyter Notebook", "#NLP","#Naive bayes theoram"],
      githubUrl: "https://github.com/sheraz888444/Language_Detector",
      liveUrl: "#"
    },
    {
      title: "LinkUp Platform",
      description: "A comprehensive social networking platform connecting professionals and fostering meaningful collaborations.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#MERN", "#social api", "#tailwind" ,"#typescript based"],
      githubUrl: "https://github.com/sheraz888444/Linkup-Platform",
      liveUrl: "#"
    },
   
     {
      title: "iNotebook",
      description: "A full-stack notes application with cloud storage, allowing users to create, edit, and manage their notes securely.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["#nodejs", "#React", "#MongoDB"],
      githubUrl: "https://github.com/sheraz888444/SHERAZ-INOTEBOOK-FULLSTACK",
      liveUrl: "#"
    },
   
    {
      title: "Currency Converter",
      description: "A real-time currency converter application with live exchange rates and multiple currency support.",
      image:"data:image/jpeg;base64,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",
      tags: ["#JavaScript", "#API", "#bootstrap"],
      githubUrl: "https://github.com/sheraz888444/curr-converter",
      liveUrl: "#"
    }
  ];

  const handleDemoClick = () => {
    alert("Demo video will be available soon!");
  };

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4" data-testid="projects-subtitle">
            My Work
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-8" data-testid="projects-title">
            Projects.
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto" data-testid="projects-description">
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories and live demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card rounded-xl p-6 hover-lift fade-in"
              data-testid={`card-project-${index}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
                data-testid={`img-project-${index}`}
              />
              <h4 className="text-xl font-semibold mb-2 text-primary" data-testid={`text-project-title-${index}`}>
                {project.title}
              </h4>
              <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-primary/20 text-primary text-xs px-2 py-1 rounded"
                    data-testid={`tag-project-${index}-${tagIndex}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  data-testid={`link-project-github-${index}`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <button 
                  onClick={handleDemoClick}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  data-testid={`link-project-live-${index}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all duration-300 hover:scale-105">
            <a 
              href="https://github.com/sheraz888444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              data-testid="link-github-all-projects"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
