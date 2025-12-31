import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Youtube, Linkedin } from "lucide-react";

export function HeroSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

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
         {/* Left: Curiosity Topic */}
<div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
  <div className="aspect-square w-80 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
    <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-300 border-4 border-blue-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px] flex items-center justify-center"></div>
    <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-6 py-5 overflow-hidden">
      <h2
        className="text-xs md:text-sm lg:text-base font-extrabold mb-2 text-center leading-tight break-words text-blue-900 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[13rem] mx-auto"
        style={{ wordBreak: 'break-word' }}
      >
        Make the happiness to follow you..!
      </h2>
      <ul className="text-[11px] md:text-xs lg:text-sm text-blue-900 font-medium space-y-2 text-left list-disc list-inside mb-3 mx-auto w-11/12 max-w-xs">
        <li>Right action brings ease—no chasing needed.</li>
        <li>Happiness appears naturally, not by force.</li>
        <li>Try it: choose rightness and feel the change.</li>
      </ul>
      <Button
        size="sm"
        className="bg-gradient-blue-purple text-white w-[8.5rem] shadow-md mt-2 text-[10px] md:text-xs py-2 transition-all"
        onClick={() => navigate('/personal-app')}
        aria-label="Read more about happiness and rightness"
      >
        Read More
      </Button>
      <div className="flex flex-col items-center mt-4 text-[10px] font-semibold text-blue-700">
        <p className="text-center mb-1 leading-tight">Subscribe for latest tech & updates!</p>
        <div className="flex items-center gap-3 mt-1">
          <a
            href="https://www.youtube.com/@DamodaraSmartTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-red-600 transition-colors underline text-[10px]"
          >
            YouTube <Youtube size={10} className="ml-1" />
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
         {/* Right: Focus Grid App Promo - FIRE VERSION 🔥 */}
<div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
  <div className="aspect-square w-80 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
    <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-green-400/30 bg-gradient-to-br from-green-100 via-green-50 to-green-300 border-4 border-green-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
    <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-6 py-5 overflow-hidden">
      <h2 className="text-xs md:text-base lg:text-lg font-extrabold mb-2 text-center leading-tight break-words text-green-700 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[90%]">
        📱 Ready to Transform Your Learning?
      </h2>
      <div className="text-[10px] md:text-xs text-green-700 font-medium leading-snug mb-2 text-center w-full">
        <p className="font-bold text-green-800 mb-1.5 text-[11px] md:text-xs">
          Discover Focus Grid—Your Personal Growth Companion!
        </p>
        <p className="text-[10px] md:text-[11px] mb-2 text-green-600">
          Handpicked content that adapts to YOU. No distractions. Just pure learning & spiritual growth.
        </p>
        <ul className="text-left list-none space-y-0.5 md:space-y-1 text-[10px] md:text-xs font-extrabold mx-auto inline-block">
          <li>✨ Smart age-based curation</li>
          <li>📝 Video Notes and AI integrated Search</li>
          <li>⚡ Zero ads. Pure focus.</li>
          <li>🎯 Unlock achievement badges</li>
          <li>🚀 Much more exciting new features await you...</li>
        </ul>
      </div>
      <Button
        size="sm"
        className="bg-gradient-blue-purple text-white shadow-lg mt-1.5 text-[9px] md:text-[10px] py-1.5 px-3 md:px-4 font-bold hover:scale-105 transition-transform"
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.focusgrid.app', '_blank')}
      >
        Download Now—It's Free! 🎯
      </Button>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
