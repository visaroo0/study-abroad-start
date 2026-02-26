import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    country: "India → USA",
    text: "VisaPath made my F-1 visa process incredibly smooth. I got my visa approved on the first attempt! The team was supportive every step of the way.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    country: "Egypt → UK",
    text: "I was overwhelmed with the Tier 4 visa requirements, but VisaPath simplified everything. Their interview prep was a game-changer.",
    rating: 5,
  },
  {
    name: "Li Wei",
    country: "China → Canada",
    text: "Professional, responsive, and incredibly knowledgeable. They helped me secure my study permit in record time. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Students Love Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from students who successfully got their visas with our help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-semibold text-card-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
