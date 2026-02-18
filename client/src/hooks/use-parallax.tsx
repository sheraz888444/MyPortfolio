import { useEffect } from "react";

// Simple parallax hook: elements with data-parallax="<speed>" will translateY based on scroll.
// speed is a number like 0.2 (slower) or 0.6 (faster). Positive moves opposite to scroll.
export function useParallax() {
  useEffect(() => {
    const elements: Array<{ el: HTMLElement; speed: number }> = [];

    document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
      const raw = el.getAttribute("data-parallax") || "0.2";
      const speed = parseFloat(raw) || 0.2;
      elements.push({ el, speed });
      // ensure will-change for better performance
      el.style.willChange = "transform";
    });

    let rafId: number | null = null;

    const onFrame = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight;

      for (const { el, speed } of elements) {
        const rect = el.getBoundingClientRect();
        // Compute normalized position from -1 (above) to 1 (below)
        const offset = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
        const translateY = -offset * 30 * speed; // max ~30px
        el.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }

      rafId = requestAnimationFrame(onFrame);
    };

    rafId = requestAnimationFrame(onFrame);

    const onResize = () => {
      // Recompute bounds on resize
    };

    window.addEventListener("resize", onResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      elements.forEach(({ el }) => {
        el.style.willChange = "";
        el.style.transform = "";
      });
    };
  }, []);
}

export default useParallax;
