import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

import Footer from "@/components/footer";
import BackgroundEffects from "@/components/background-effects";

export default function Home() {
  useEffect(() => {
    document.title = "Sheraz Ahmed - Full Stack Developer & AI Enthusiast";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sheraz Ahmed - Software Engineering student, MERN Stack Developer, and AI Enthusiast from Pakistan. Building innovative web applications and AI solutions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Sheraz Ahmed - Software Engineering student, Full Stack Developer, and AI Enthusiast from Pakistan. Building innovative web applications and AI solutions.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <main className="mx-auto w-full max-w-[100vw]">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
