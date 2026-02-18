import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleDownloadResume = () => {
    const resumeUrl = "/SHERAZ-RESUME.pdf"; // file public/ folder me honi chahiye
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SHERAZ-RESUME.pdf"; // download ke waqt naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="py-12 text-center border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-4" data-testid="footer-title">
          Thanks for scrolling.
        </h3>
        <div className="flex justify-center gap-8 mb-8">
          <Button
            onClick={handleDownloadResume}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
            data-testid="button-footer-resume"
          >
            Resume
          </Button>
        </div>
        <p className="text-muted-foreground" data-testid="footer-copyright">
          © 2024 Sheraz Ahmed. Made with ❤️ and lots of ☕
        </p>
      </div>
    </footer>
  );
}
