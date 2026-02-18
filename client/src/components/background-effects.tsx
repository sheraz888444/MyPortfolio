import { useEffect, useRef } from "react";
import { useParallax } from "@/hooks/use-parallax";

export default function BackgroundEffects() {
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const cursorLinesRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background particles animation
    const particlesContainer = particlesContainerRef.current;
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 25000);
    };
    
    const particleInterval = setInterval(createParticle, 500);
    
    // Initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  useEffect(() => {
    // 3D cursor following lines
    const cursorLines = cursorLinesRef.current;
    if (!cursorLines) return;

    const lines: HTMLDivElement[] = [];
    
    for (let i = 0; i < 5; i++) {
      const line = document.createElement('div');
      line.className = 'cursor-line';
      cursorLines.appendChild(line);
      lines.push(line);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      lines.forEach((line, index) => {
        const delay = index * 50;
        setTimeout(() => {
          line.style.left = `${e.clientX - 1}px`;
          line.style.top = `${e.clientY - 25}px`;
          line.style.transform = `rotate(${Math.sin(Date.now() * 0.001 + index) * 20}deg)`;
        }, delay);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      lines.forEach(line => line.remove());
    };
  }, []);

  // scroll progress bar
  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // enable parallax on elements that opt-in with data-parallax
  useParallax();

  return (
    <>
      <div id="particles-container" ref={particlesContainerRef} />
      <div id="cursor-lines" ref={cursorLinesRef} />
      <div className="scroll-progress" ref={progressRef} aria-hidden />
    </>
  );
}
