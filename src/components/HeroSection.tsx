import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-students.png";

const CALENDLY_URL = "https://calendly.com/your-link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,hsl(250_65%_55%/0.08),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,hsl(165_70%_42%/0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">98% Visa Approval Rate</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Your dream uni,{" "}
              <span className="text-gradient-hero">our expertise</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We simplify the student visa process so you can focus on what matters — your education. Expert guidance from application to approval.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base px-8 rounded-xl" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Meeting
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 rounded-xl">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {[
                { number: "15K+", label: "Students Helped" },
                { number: "50+", label: "Countries" },
                { number: "98%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-hero border border-border">
                <img
                  src={heroImage}
                  alt="Happy international students with passports and acceptance letters"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl p-4 shadow-card-hover border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-warm flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Visa Approved!</div>
                    <div className="text-xs text-muted-foreground">Just now • USA F-1 Visa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
