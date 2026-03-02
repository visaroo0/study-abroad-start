import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/your-link";

const CTASection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-12 sm:p-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(165_70%_42%/0.15),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/15">
              <Calendar className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground/90">Free 30-min consultation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Book a free consultation today and take the first step toward studying at your dream university abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button variant="hero" size="lg" className="text-base px-8 rounded-xl" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Meeting
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
