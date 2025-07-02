import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Why Choose Us", sectionId: "why-choose-us" },
  { label: "Portfolio", sectionId: "portfolio" },
  { label: "Careers", sectionId: "careers" },
  { label: "Contact", sectionId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: "smooth" 
      });
      setMobileMenuOpen(false);
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: "smooth" 
        });
      }
    }
  }, [location]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center w-full px-6">
        <div className="ml-auto flex flex-col items-end" style={{ lineHeight: 1.1, minWidth: 'max-content' }}>
          <span className="text-5xl md:text-5xl font-extrabold leading-tight tracking-normal" style={{ letterSpacing: '0em', color: '#2743A6', minWidth: 'max-content' }}>
            Damodara Smart Tech
          </span>
          <span className="text-xl md:text-xl font-bold mt-[-0.2em] text-left" style={{ color: '#38BDF8', marginLeft: '-14rem' }}>
            Smart Solutions. Automate Services.
          </span>
        </div>
        <div className="ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 ml-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-muted-foreground hover:text-foreground transition-colors py-1 px-2 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:bg-transparent"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 p-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-lg py-2 border-b border-muted hover:text-neon-blue transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="mt-4 w-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
