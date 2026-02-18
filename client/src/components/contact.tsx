import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "itssheraz78618@gmail.com",
      link: "mailto:itssheraz78618@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 326 7654138",
      link: "tel:+923267654138"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Multan, Punjab, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sheraz888444",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href:"https://www.linkedin.com/in/sheraz-ahmed-824788381/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/therealsheraz/",
      label: "Instagram"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4" data-testid="contact-subtitle">
            Get in touch
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-8" data-testid="contact-title">
            Contact Me
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Contact Us"
              className="w-full h-auto rounded-xl shadow-lg"
              data-testid="img-contact"
              data-parallax="0.12"
            />
          </div>

          <div className="space-y-8 fade-in">
            <div className="glass rounded-xl p-8">
              <h4 className="text-2xl font-semibold mb-6" data-testid="contact-cta-title">
                Contact Information
              </h4>
              <div className="space-y-6 mt-6 pt-6 border-t border-border/50">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-center gap-4" data-testid={`contact-info-${index}`}>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1" data-testid={`contact-info-title-${index}`}>
                        {info.title}
                      </h5>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`link-contact-${index}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground" data-testid={`text-contact-${index}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
