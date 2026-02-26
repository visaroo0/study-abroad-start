import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-warm flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-background" style={{ fontFamily: 'var(--font-display)' }}>
                VisaPath
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Trusted student visa consultancy helping thousands achieve their study abroad dreams since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {["Visa Application", "University Admission", "Interview Prep", "Pre-Departure Support"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-background/60 hover:text-background transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Destinations</h4>
            <ul className="space-y-2">
              {["USA", "United Kingdom", "Canada", "Australia", "Germany"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-background/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-background/60">info@visapath.com</li>
              <li className="text-sm text-background/60">+1 (800) 123-4567</li>
              <li className="text-sm text-background/60">123 Education Ave, New York</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">© 2026 VisaPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
