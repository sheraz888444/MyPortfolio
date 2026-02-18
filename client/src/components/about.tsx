import { Code, Layers, Smartphone, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// ✅ Import images from assets
import AIImage from "@/assets/AI.png";
import NetImage from "@/assets/Net.png";
import MobImage from "@/assets/mob.png";
import MernImage from "@/assets/mern.png";

export default function About() {
  useScrollAnimation();

  const cards = [
    {
      icon: Layers,
      title: "Full Stack Developer",
      description:
        "Designing and developing scalable web applications using the MERN stack — MongoDB, Express, React, and Node.js — with a focus on clean architecture, performance, and responsive UI/UX.",
      image: MernImage,
    },
    {
      icon: Code,
      title: ".NET Developer",
      description:
        "Building robust and interactive desktop and enterprise-grade applications using C# and the .NET framework, integrating efficient backend logic with modern user interfaces.",
      image: NetImage,
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Engineer",
      description:
        "Developing intelligent systems using Python, TensorFlow, and PyTorch — from NLP-driven chatbots and deep learning models to predictive analytics and real-world automation solutions.",
      image: AIImage,
    },
    {
      icon: Smartphone,
      title: "Mobile App Developer",
      description:
        "Creating high-performance, cross-platform mobile applications with Flutter and Dart, ensuring seamless experiences across Android and iOS platforms.",
      image: MobImage,
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Header Section ===== */}
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-sm text-accent uppercase tracking-widest mb-4"
            data-testid="about-subtitle"
          >
            Introduction
          </h2>
          <h3
            className="text-4xl lg:text-5xl font-bold mb-8"
            data-testid="about-title"
          >
            Overview.
          </h3>

          <p
            className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            data-testid="about-description"
          >
            I’m a{" "}
            <strong className="text-primary">
              passionate software engineer
            </strong>{" "}
            who loves turning ideas into impactful digital experiences. My
            expertise spans{" "}
            <strong className="text-primary">
              full-stack web development (MERN, .NET)
            </strong>
            ,{" "}
            <strong className="text-primary">
              mobile app engineering (Flutter, Dart)
            </strong>
            , and{" "}
            <strong className="text-primary">
              AI-driven solutions using Python, NLP, and deep learning
            </strong>
            . <br />
            <br />
            I thrive at the intersection of{" "}
            <strong className="text-primary">
              creativity and problem-solving
            </strong>
            , building software that is not only efficient and scalable but also
            intuitive and user-centric. Whether it’s an AI model that understands
            human language or a cross-platform app with flawless UX, my goal is
            to deliver{" "}
            <strong className="text-primary">
              intelligent, future-ready solutions
            </strong>{" "}
            that make a measurable difference.
          </p>
        </div>

        {/* ===== Expertise Cards ===== */}
        <div id="expertise" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="glass rounded-xl p-6 text-center hover-lift fade-in shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-testid={`card-service-${index}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                data-testid={`img-service-${index}`}
              />
              <h4
                className="text-xl font-semibold mb-2 text-foreground"
                data-testid={`text-service-title-${index}`}
              >
                {card.title}
              </h4>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                data-testid={`text-service-description-${index}`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
