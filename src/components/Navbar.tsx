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
      <div className="w-full px-4 md:px-6 flex items-center justify-between flex-wrap gap-y-2">
        {/* Logo + Company Info */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/DST_logo.png"
            alt="Damodara Smart Tech Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col justify-center h-full">
            <div className="text-[3.5rem] sm:text-[3.5rem] md:text-[3.5rem] font-black text-dst-darkgreen leading-none tracking-tight">
              Damodara Smart Tech
            </div>
            <div
              className="text-[1.8rem] sm:text-[1.8rem] md:text-[1.9rem] font-semibold text-dst-gold leading-none tracking-tight"
              style={{ paddingLeft: "3.5ch", maxWidth: "32ch" }}
            >
              Smart Solutions. Automate Services.
            </div>
          </div>
        </div>

        {/* Desktop Nav + Theme Toggle */}
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

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-white dark:bg-background flex flex-col items-center p-6 gap-6 overflow-auto min-h-screen md:hidden">
          <div className="flex items-center gap-3">
            <img src="/DST_logo.png" alt="Logo" className="w-14 h-14 rounded-full object-cover" />
            <div className="flex flex-col">
              <div className="text-[1.5rem] font-black text-dst-darkgreen leading-none max-w-[28ch]">
                Damodara Smart Tech
              </div>
              <div
                className="text-[0.9rem] font-semibold text-dst-gold leading-none"
                style={{ paddingLeft: "3.5ch", maxWidth: "32ch" }}
              >
                Smart Solutions. Automate Services.
              </div>
            </div>
          </div>

          <nav className="flex flex-col w-full gap-4 mt-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-base font-medium w-full text-left py-2 border-b border-border hover:text-accent transition-colors"
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