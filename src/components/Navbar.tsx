import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            VisaPath
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <Button size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#services" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#process" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Testimonials</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Contact</a>
          <Button size="sm" className="w-fit">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
