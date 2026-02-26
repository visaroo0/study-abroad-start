import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-hero p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(170_50%_40%/0.2),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/75">
              Book a free consultation today and take the first step toward studying at your dream university abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8">
                Call Us: +1 (800) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
