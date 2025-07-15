import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  // Typewriter for Tech Circle
  const techPhrases = [
    "Vacancies for Full Stack Developer",
    "Join Our Tech Team",
    "Innovate With Us"
  ];
  const [techIndex, setTechIndex] = useState(0);
  const [typedTech, setTypedTech] = useState("");
  useEffect(() => {
    let i = 0;
    setTypedTech("");
    const interval = setInterval(() => {
      setTypedTech(techPhrases[techIndex].slice(0, i + 1));
      i++;
      if (i === techPhrases[techIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setTechIndex((prev) => (prev + 1) % techPhrases.length);
        }, 1800);
      }
    }, 40);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [techIndex]);

  // Typewriter for Book Blog Circle
  const blogPhrases = [
    'Explore, Review, Inspire',
    'Stories, Books & More'
  ];
  const [blogIndex, setBlogIndex] = useState(0);
  const [typedBlog, setTypedBlog] = useState("");
  useEffect(() => {
    let i = 0;
    setTypedBlog("");
    const interval = setInterval(() => {
      setTypedBlog(blogPhrases[blogIndex].slice(0, i + 1));
      i++;
      if (i === blogPhrases[blogIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setBlogIndex((prev) => (prev + 1) % blogPhrases.length);
        }, 1800);
      }
    }, 40);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [blogIndex]);

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
      data-aos="fade-up"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[hsl(var(--dusty-rose))]/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Tech Circle */}
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="aspect-square w-56 sm:w-64 md:w-96 max-w-[90vw] relative flex items-center justify-center ">
              {/* 3D-like effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 border-4 border-blue-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-1 sm:px-2 py-2 overflow-hidden">
                <span className="text-xs md:text-sm uppercase tracking-wider text-red-700 bg-red-200/40 px-3 py-1 rounded-full mb-2 inline-block font-sans font-bold">
                  {typedLabel}
                  {typedLabel.length < labelText.length && <span className="animate-pulse">|</span>}
                </span>
                <h2 className="text-base md:text-lg font-extrabold mb-2 min-h-[2em] text-center leading-snug break-words whitespace-normal text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-['Space Grotesk'],font-['Inter'],sans-serif">
                  {typedTech}
                  {typedTech.length < techPhrases[techIndex].length && <span className="animate-pulse">|</span>}
                </h2>
                <p className="text-xs md:text-sm mb-2 text-center leading-relaxed font-medium font-['Space Grotesk'],font-['Inter'],sans-serif text-[hsl(var(--foreground))]">
                  We're recruiting Full Stack Developers to help us build innovative, high-quality web and mobile applications.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-x-1 gap-y-1 text-xs md:text-sm mb-1 justify-center">
                  <span className="font-semibold text-foreground">Role:</span>
                  <span className="text-muted-foreground">Full Stack Developer</span>
                  <span className="hidden sm:inline mx-1 text-muted-foreground">|</span>
                  <span className="font-semibold text-foreground">Vacancies:</span>
                  <span className="text-muted-foreground">2</span>
                  <span className="hidden sm:inline mx-1 text-muted-foreground">|</span>
                  <span className="font-semibold text-foreground">Apply:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-full md:w-auto shadow-md mt-1 text-xs opacity-60 cursor-not-allowed"
                  disabled
                >
                  Application Closed
                </Button>
              </div>
            </div>
          </div>

          {/* Center: Main Heading and Paragraph (static) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#8B5CF6', minHeight: '2.5em' }}>
              Grow Your Innovation with Damodara Smart Tech
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              We help forward-thinking companies build stunning digital experiences that drive growth and delight users. Founded in 2024, our mission is to empower your business with the latest in technology and creativity.
            </p>
          </div>

          {/* Right: Book Blog Circle */}
          <div className="flex-1 flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="aspect-square w-56 sm:w-64 md:w-96 max-w-[90vw] relative flex items-center justify-center ">
              {/* 3D-like effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-yellow-400/30 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-300 border-4 border-yellow-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-1 sm:px-2 py-2 overflow-hidden">
                <span className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-green-700 bg-green-200/40 px-2 sm:px-3 py-1 rounded-full mb-2 inline-block font-sans font-bold max-w-full break-words whitespace-normal text-center">
                  Explore life's most important aspects
                </span>
                <h2 className="text-xs sm:text-sm md:text-lg font-extrabold mb-2 min-h-[2em] text-center leading-snug break-words whitespace-normal text-gradient bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent font-['Space Grotesk'],font-['Inter'],sans-serif max-w-full break-words">
                  {typedBlog}
                  {typedBlog.length < blogPhrases[blogIndex].length && <span className="animate-pulse">|</span>}
                </h2>
                <p className="text-xs sm:text-sm md:text-base mb-2 text-center leading-relaxed font-medium font-['Space Grotesk'],font-['Inter'],sans-serif text-[hsl(var(--foreground))] max-w-full break-words">
                  Explore world-class favorite books, stories, and more!
                </p>
                <Button
                  size="sm"
                  className="w-full md:w-auto shadow-md mt-1 text-base opacity-80 cursor-not-allowed bg-white"
                  disabled
                >
                  <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent animate-gradient-text font-extrabold drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" style={{WebkitTextStroke: '0.5px #222', fontSize: 'clamp(0.85rem, 3vw, 1.15rem)'} as React.CSSProperties}>
                    Info Coming Soon
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
