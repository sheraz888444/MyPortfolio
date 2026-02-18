import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import singhImg from "@/assets/singh.png";
import crImg from "@/assets/cr.png";
import arfatImg from "@/assets/arfat.jpeg";
import usmanImg from "@/assets/usman.jpeg";
import niazImg from "@/assets/niaz.png";

export default function Testimonials() {
  useScrollAnimation();

  const testimonials = [
    {
      name: "Tanveer Habib",
      position: "Senior Developer at TechCorp",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content:
        "Working with Sheraz and his brother Saqib this Summer was a brilliant experience. Both of them are dedicated towards their work.",
      rating: 5,
    },
    {
      name: "Arfat Muzammil",
      position: "Colleague at COMSATS",
      image: arfatImg,
      content:
        "Very cooperative but a little bit scared of being low graded for doing all this help 🙂",
      rating: 5,
    },
    {
      name: "Gulpreet Singh",
      position: "Project Manager at InnovateLab",
      image: singhImg,
      content:
        "Working with Sheraz on the AI Assistant project was incredible. His attention to detail and innovative approach exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Rao Hasnain Kamaal(CR)",
      position: "Colleague at COMSATS",
      image: crImg,
      content:
        "As a student nowadays, he has brilliant character and when he comes to building projects, it always matters!",
      rating: 5,
    },
    {
      name: "Ahmed Khan",
      position: "Lecturer at BZU Multan",
      image:niazImg,
        content:
        "Sheraz is an amazing collaborator. His passion for AI and web development inspires everyone around him. He's definitely going places!",
      rating: 5,
    },
    
    
    {
      name: "Usman Dogar",
      position: "Colleague at COMSATS",
      image: usmanImg,
      content:
        "Studying with you always felt like you genuinely wanted the other person to understand everything. Whatever you knew, you explained completely without expecting any benefit in return. There was no envy or jealousy, and you never thought, ‘What if this person gets ahead of me if I teach them this?’ Overall, it was a really great experience.",
      rating: 5,
    },
  ];

  // Duplicate testimonials to create an infinite scroll effect
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-sm text-accent uppercase tracking-widest mb-4"
            data-testid="testimonials-subtitle"
          >
            What others say
          </h2>
          <h3
            className="text-4xl lg:text-5xl font-bold mb-8"
            data-testid="testimonials-title"
          >
            Testimonials.
          </h3>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {scrollingTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="testimonial-card rounded-xl p-8 hover-lift fade-in bg-white/10 backdrop-blur-md shadow-md w-[320px] flex-shrink-0"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <h4
                      className="font-semibold"
                      data-testid={`text-testimonial-name-${index}`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-testimonial-position-${index}`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p
                  className="text-muted-foreground mb-4"
                  data-testid={`text-testimonial-content-${index}`}
                >
                  "{testimonial.content}"
                </p>
                <div
                  className="flex text-accent"
                  data-testid={`rating-testimonial-${index}`}
                >
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 fill-current"
                      data-testid={`star-testimonial-${index}-${starIndex}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
