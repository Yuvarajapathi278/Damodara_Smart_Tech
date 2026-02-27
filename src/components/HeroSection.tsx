import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Youtube, Linkedin } from "lucide-react";

export function HeroSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoverDisabled, setHoverDisabled] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverDisabled) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const isLeft = e.clientX - rect.left < rect.width / 2;
    if (isLeft && !isFlipped) setIsFlipped(true);
    if (!isLeft && isFlipped) setIsFlipped(false);
  };

  const handleMouseLeave = () => {
    if (!hoverDisabled) setIsFlipped(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20"
      data-aos="fade-up"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[80px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
         {/* Left: Flippable Card - Focus Grid & Happiness */}
<div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
  <div 
    className="aspect-square w-80 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center cursor-pointer"
    onClick={() => setIsFlipped(!isFlipped)}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
      perspective: '1000px',
    }}
  >
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      {/* Front: Focus Grid App */}
      <div
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-indigo-400/30 bg-gradient-to-br from-indigo-100 via-indigo-50 to-indigo-300 border-4 border-indigo-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
        <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-6 py-5 overflow-hidden h-full">
          <h2 className="text-xs md:text-base lg:text-lg font-extrabold mb-2 text-center leading-tight break-words text-indigo-700 font-['Space Grotesk'],font-['Inter'],sans-serif">
            📱 Focus Grid
          </h2>
          <div className="text-[10px] md:text-xs text-indigo-700 font-medium leading-snug mb-3">
            <p className="font-bold text-indigo-800 mb-1.5 text-[11px] md:text-xs">
              Master Your Focus, Elevate Your Potential
            </p>
            <ul className="text-left list-none space-y-1 text-[10px] md:text-xs font-semibold mx-auto inline-block">
              <li>✨ Intelligent content curation</li>
              <li>📝 AI-powered learning insights</li>
              <li>⚡ Distraction-free experience</li>
              <li>🎯 Personalized growth pathways</li>
              <li>🚀 Holistic development awaits...</li>
            </ul>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg mt-2 text-[9px] md:text-[10px] py-1.5 px-3 md:px-4 font-bold hover:scale-105 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://play.google.com/store/apps/details?id=com.focusgrid.app', '_blank');
            }}
            onMouseEnter={() => setHoverDisabled(true)}
            onMouseLeave={() => setHoverDisabled(false)}
          >
            Explore Now 🎯
          </Button>
          <p className="text-[9px] text-indigo-600 font-semibold mt-3 italic">✨ Click to reveal wisdom ✨</p>
        </div>
      </div>

      {/* Back: Happiness Philosophy */}
      <div
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'rotateY(180deg)'
        }}
      >
        <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-300 border-4 border-blue-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px] flex items-center justify-center"></div>
        <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-6 py-5 overflow-hidden h-full">
          <h2
            className="text-xs md:text-sm lg:text-base font-extrabold mb-2 text-center leading-tight break-words text-blue-900 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[13rem] mx-auto"
            style={{ wordBreak: 'break-word' }}
          >
            Make Happiness Follow You
          </h2>
          <ul className="text-[10px] md:text-xs lg:text-sm text-blue-900 font-medium space-y-1.5 text-left list-none mb-3 mx-auto w-11/12">
            <li className="leading-tight">✓ Right action brings effortless ease</li>
            <li className="leading-tight">✓ Happiness emerges naturally, not forced</li>
            <li className="leading-tight">✓ Choose rightness, witness the shift</li>
          </ul>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white w-fit shadow-md mt-2 text-[10px] md:text-xs py-2 px-3 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/personal-app');
            }}
            aria-label="Explore happiness and mindful living"
          >
            Discover More
          </Button>
          <div className="flex flex-col items-center mt-4 text-[10px] font-semibold text-blue-700">
            <p className="text-center leading-tight">Join our community</p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.youtube.com/@DamodaraSmartTech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-red-600 transition-colors text-[9px]"
              >
                <Youtube size={10} className="mr-1" /> YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/damodara-smart-tech-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-blue-600 transition-colors"
              >
                <Linkedin size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          {/* Center: Main Heading */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0" data-aos="zoom-in" data-aos-delay="400">
            <h1 className="text-2.1xl md:text-2.9xl lg:text-3.9xl xl:text-4xl font-bold leading-tight mb-6" style={{ color: '#8B5CF6', minHeight: '2.5em' }}>
              Grow Your Innovation with Damodara Smart Tech
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl">
              We provide cutting-edge digital solutions for all people, professions, and enterprises — crafting intelligent experiences that inspire, engage, and accelerate growth.
              Our mission is to empower every idea with the perfect fusion of technology, creativity, and purpose.
            </p>
          </div>
         {/* Right: SettlesU Platform */}
<div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
  <div className="aspect-square w-80 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
    <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-amber-400/30 bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-300 border-4 border-amber-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
    <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-6 py-5 overflow-hidden">
      <h2 className="text-xs md:text-base lg:text-lg font-extrabold mb-2 text-center leading-tight break-words text-amber-800 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[90%]">
        🌟 SettlesU—Your Life Orchestrator
      </h2>
      <div className="text-[10px] md:text-xs text-amber-800 font-medium leading-snug mb-2 text-center w-full">
        <p className="font-bold text-amber-900 mb-1.5 text-[11px] md:text-xs">
          Where Opportunity Meets Purpose
        </p>
        <ul className="text-left list-none space-y-0.5 md:space-y-1 text-[10px] md:text-xs font-semibold mx-auto inline-block text-amber-800">
          <li>💼 Intelligent talent matching & mentorship</li>
          <li>🤝 Global hiring ecosystem reimagined</li>
          <li>🎓 Holistic career advancement pathways</li>
          <li>🚀 Something extraordinary awaits...</li>
        </ul>
      </div>
      <p className="text-[8px] md:text-[9px] text-amber-700 font-semibold mt-3 italic">Crafted for those ready to settle wisely</p>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
