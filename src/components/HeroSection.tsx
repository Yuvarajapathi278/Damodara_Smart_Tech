import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  // Typing animation for blog title
  const blogTitle = "\ud83d\ude80 The Next Wave: 2025’s Breakthroughs in AI, Quantum, and Green Tech";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(blogTitle.slice(0, i + 1));
      i++;
      if (i === blogTitle.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Typing animation for Premier Job Opportunity label
  const labelText = "Premier Job Opportunity";
  const [typedLabel, setTypedLabel] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedLabel(labelText.slice(0, i + 1));
      i++;
      if (i === labelText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[hsl(var(--dusty-rose))]/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#8B5CF6' }}>
                Accelerate Growth and Innovation with Damodara Smart Tech
              </h1>
              <p className="text-base text-muted-foreground">
                We help forward-thinking companies build stunning digital experiences 
                that drive growth and delight users. Founded in 2024.
              </p>
            </div>
          </div>
          {/* Right Side: Animated Circle with Hot Job Vacancy */}
          <div className="relative flex items-center justify-center animate-fade-in animate-float-slow" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square w-full max-w-[420px] md:max-w-[480px] mx-auto relative flex items-center justify-center">
              {/* Animated Circle */}
              <div className="absolute inset-0 bg-[hsl(var(--soft-blue))]/30 rounded-full animate-pulse opacity-70"></div>
              {/* Hot Job Vacancy text centered in circle */}
              <div className="relative z-10 flex flex-col justify-center items-center w-[85%] h-[85%] mx-auto text-center">
                {/* Premier Job Opportunity label with typing animation */}
                <span className="text-xs md:text-sm lg:text-base uppercase tracking-wider text-red-700 bg-red-200/40 px-3 py-1 rounded-full mb-2 inline-block font-sans font-bold">
                  {typedLabel}
                  {typedLabel.length < labelText.length && <span className="animate-pulse">|</span>}
                </span>
                <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold mb-2 min-h-[2.5em] text-center leading-snug break-words whitespace-normal text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-['Space Grotesk'],font-['Inter'],sans-serif">
                  Vacancies for Full Stack Developer
                </h2>
                <p className="text-xs md:text-sm lg:text-base mb-2 text-center leading-relaxed font-medium font-['Space Grotesk'],font-['Inter'],sans-serif text-[hsl(var(--foreground))]">
                  We're recruiting Full Stack Developers to help us build innovative, high-quality web and mobile applications. If you're passionate about app development and eager to work with modern technologies, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs md:text-sm mb-2 justify-center">
                  <span className="font-semibold text-foreground">Role:</span>
                  <span className="text-muted-foreground">Full Stack Developer</span>
                  <span className="hidden sm:inline mx-2 text-muted-foreground">|</span>
                  <span className="font-semibold text-foreground">Vacancies:</span>
                  <span className="text-muted-foreground">2</span>
                  <span className="hidden sm:inline mx-2 text-muted-foreground">|</span>
                  <span className="font-semibold text-foreground">Application Deadline:</span>
                  <span className="text-muted-foreground">12th July 25</span>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-blue-purple text-white w-full md:w-auto shadow-md hover:scale-105 transition-transform mt-2"
                  onClick={() => window.location.href = '/apply'}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
