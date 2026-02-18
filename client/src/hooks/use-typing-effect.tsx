import { useState, useEffect } from "react";

export function useTypingEffect(
  texts: string[],
  typeSpeed: number = 150,
  deleteSpeed: number = 100,
  pauseTime: number = 2000
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let nextTimeout = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && currentText === fullText) {
        nextTimeout = pauseTime;
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        nextTimeout = 500;
      }

      return nextTimeout;
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typeSpeed, deleteSpeed, pauseTime]);

  return currentText;
}
