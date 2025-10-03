import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  sectionId?: string;
  path?: string;
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
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
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
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
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

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      navigate(item.path);
      setMobileMenuOpen(false);
    } else if (item.sectionId) {
      scrollToSection(item.sectionId);
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
      <div className="w-full px-4 md:px-6 flex items-center justify-between">
        {/* Logo and Company Info - LEFT SIDE */}
        <div className="flex flex-col cursor-pointer" onClick={handleLogoClick}>
          {/* Logo + Company Name Row */}
          <div className="flex items-center">
            <img
              src="/DST_logo.png"
              alt="Damodara Smart Tech Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-normal text-dst-darkgreen ml-2 md:ml-3 leading-tight">
              Damodara Smart Tech
            </span>
          </div>
          {/* Tagline - Aligned with "Damodara" start */}
          <div style={{ marginLeft: '12rem' }}>
            <span className="text-dst-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight block w-fit">
              Smart Solutions. Automate Services.
            </span>
          </div>
        </div>

        {/* Desktop Navigation + Theme Toggle - RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 lg:px-3 text-sm lg:text-base whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Toggle - RIGHT SIDE */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-white dark:bg-background flex flex-col items-center p-6 gap-6 overflow-y-auto animate-fade-in md:hidden">
          {/* Mobile Brand Block */}
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-full mb-2">
              <img src="/DST_logo.png" alt="Damodara Smart Tech Logo" className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-3 flex flex-col items-start justify-center">
                <span className="text-xl font-extrabold text-dst-darkgreen leading-none tracking-tight mb-2">
                  Damodara Smart Tech
                </span>
                <span className="text-dst-gold text-sm font-semibold leading-none tracking-normal mt-0.5">
                  Smart Solutions. Automate Services.
                </span>
              </div>
            </div>
          </div>

          <nav className="flex flex-col w-full gap-4 mt-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
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
