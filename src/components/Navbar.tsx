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
      <div className="w-full px-4 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left Section: Logo + Brand */}
        <div className="flex flex-col cursor-pointer" onClick={handleLogoClick}>
          <div className="flex items-center">
            <img src="/DST_logo.png" alt="Damodara Smart Tech Logo" className="w-12 h-12 md:w-16 md:h-16 mr-3" />
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-normal text-primary whitespace-nowrap">
              Damodara Smart Tech
            </span>
          </div>
          <span className="text-sky-400 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mt-1 md:pl-8 self-end md:self-end md:pr-1" style={{ minWidth: 'max-content' }}>
            Smart Solutions. Automate Services.
          </span>
        </div>

        {/* Right Section: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 mt-4 md:mt-0">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-muted-foreground hover:text-foreground transition-colors py-1 px-2"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden gap-2 ml-auto mt-0">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-white dark:bg-background flex flex-col items-center p-6 gap-6 overflow-y-auto animate-fade-in">
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-full mb-2">
              <img src="/DST_logo.png" alt="Damodara Smart Tech Logo" className="w-12 h-12 mr-2" />
              <span className="text-3xl font-extrabold text-primary">Damodara Smart Tech</span>
            </div>
            <span className="text-sky-400 text-base font-medium mt-1 text-center w-full">
              Smart Solutions. Automate Services.
            </span>
          </div>

          <nav className="flex flex-col w-full gap-4 mt-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-lg font-medium w-full text-left py-2 border-b border-border hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto w-full">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-bold py-2"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
