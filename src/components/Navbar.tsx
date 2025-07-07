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
        <div className="ml-auto flex flex-col items-end md:items-end items-center w-full md:w-auto" style={{ lineHeight: 1.1 }}>
          <div className="flex items-center gap-3 cursor-pointer justify-center md:justify-end w-full md:w-auto" onClick={handleLogoClick}>
            <img src="/DST_logo.png" alt="Damodara Smart Tech Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-normal whitespace-nowrap" style={{ letterSpacing: '0em', color: '#2743A6' }}>
              Damodara Smart Tech
            </span>
          </div>
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-center md:text-right block w-full md:w-auto mt-1" style={{ color: '#38BDF8' }}>
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
        <div className="fixed inset-0 top-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center p-6 md:hidden animate-fade-in overflow-y-auto">
          {/* Branding at the top of mobile menu */}
          <div className="flex flex-col items-center w-full mb-6">
            <div className="flex items-center gap-3 mb-2 cursor-pointer justify-center w-full" onClick={handleLogoClick}>
              <img src="/DST_logo.png" alt="Damodara Smart Tech Logo" className="w-12 h-12" />
              <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold leading-tight tracking-normal whitespace-nowrap" style={{ letterSpacing: '0em', color: '#2743A6' }}>
                Damodara Smart Tech
              </span>
            </div>
            <span className="text-base xs:text-lg sm:text-xl font-bold text-center block w-full mt-1" style={{ color: '#38BDF8' }}>
              Smart Solutions. Automate Services.
            </span>
          </div>
          <nav className="flex flex-col gap-4 w-full">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-lg py-2 border-b border-muted hover:text-neon-blue transition-colors text-center bg-transparent border-none cursor-pointer w-full"
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
