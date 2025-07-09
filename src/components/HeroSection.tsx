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
          {/* Right Side: Animated Circle with Blog Text */}
          <div className="relative flex items-center justify-center animate-fade-in animate-float-slow" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square w-full max-w-[420px] md:max-w-[480px] mx-auto relative flex items-center justify-center">
              {/* Animated Circle */}
              <div className="absolute inset-0 bg-[hsl(var(--soft-blue))]/30 rounded-full animate-pulse opacity-70"></div>
              {/* Blog text centered in circle */}
              <div className="relative z-10 flex flex-col justify-center items-center w-[80%] h-[80%] mx-auto text-center">
                <span className="text-xs md:text-sm lg:text-base uppercase tracking-wider text-purple-700 bg-purple-200/40 px-3 py-1 rounded-full mb-2 inline-block font-sans">Latest Info</span>
                <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold mb-3 min-h-[3.5em] text-center leading-snug break-words whitespace-normal font-['Space Grotesk'],font-['Inter'],sans-serif" style={{ color: '#F59E42' }}>
                  {typedTitle}
                  <span className="animate-pulse">|</span>
                </h2>
                <span className="text-xs md:text-sm text-muted-foreground mb-3 block font-sans">9th July 25</span>
                <p className="text-xs md:text-sm lg:text-base mb-4 text-center leading-relaxed font-medium font-['Space Grotesk'],font-['Inter'],sans-serif text-[hsl(var(--foreground))]">
                  Explore how 2025 is set to redefine technology with advances in generative AI, quantum computing, sustainable tech, and more. Discover what’s next for business, society, and innovation.
                </p>
                <button
                  className="bg-gradient-blue-purple text-white px-4 py-2 rounded font-semibold text-xs md:text-sm lg:text-base hover:opacity-90 transition-opacity font-sans"
                  onClick={() => window.location.href = '/blog/tech-trends-2025'}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
