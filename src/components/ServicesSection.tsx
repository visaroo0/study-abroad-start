import { FileText, Globe, GraduationCap, HeadphonesIcon, Plane, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Visa Application",
    description: "Complete assistance with documentation, form filling, and application submission for all visa types.",
  },
  {
    icon: GraduationCap,
    title: "University Admission",
    description: "Guidance on choosing the right university and program, with help on admission applications.",
  },
  {
    icon: Globe,
    title: "Country Counseling",
    description: "Expert advice on studying in USA, UK, Canada, Australia, Germany, and 50+ other destinations.",
  },
  {
    icon: ShieldCheck,
    title: "Interview Prep",
    description: "Mock interviews and personalized coaching to ensure you're fully prepared for your visa interview.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "From flight booking to accommodation, we help you settle into your new country with ease.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Arrival Help",
    description: "Ongoing support after you land — bank accounts, SIM cards, campus orientation, and more.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            End-to-End Visa Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From your first consultation to your first day on campus, we've got every step covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
