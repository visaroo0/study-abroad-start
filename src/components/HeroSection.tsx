import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-students.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(170_50%_40%/0.15),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground/90">98% Visa Approval Rate</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Your Dream University,{" "}
              <span className="text-secondary">Our Visa Expertise</span>
            </h1>

            <p className="text-lg text-primary-foreground/75 max-w-lg leading-relaxed">
              We simplify the student visa process so you can focus on what matters most — your education. Expert guidance from application to approval.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">
                Start Your Application
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8">
                Free Consultation
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {[
                { number: "15K+", label: "Students Helped" },
                { number: "50+", label: "Countries" },
                { number: "98%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary-foreground">{stat.number}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-hero">
                <img
                  src={heroImage}
                  alt="Happy international students with passports and acceptance letters"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card-hover border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent-foreground" />
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
