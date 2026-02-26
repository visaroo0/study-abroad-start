import { ClipboardList, FileSearch, MessageSquare, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    description: "Book a free session to discuss your goals, preferred countries, and budget.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Document Review",
    description: "We review and organize all required documents to ensure a flawless application.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Application & Filing",
    description: "Our experts handle the complete visa application and submission process.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Visa Approved!",
    description: "Receive your visa and get ready for an incredible academic journey abroad.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Four Simple Steps to Your Visa
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes getting your student visa effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-hero mx-auto flex items-center justify-center mb-6 shadow-hero">
                <item.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="text-sm font-bold text-secondary">{item.step}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
