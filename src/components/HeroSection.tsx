import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Youtube } from "lucide-react";

export function HeroSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // Typewriter for Book Blog Circle (right)
  const blogPhrase = 'Words that empowers. Wisdom that transforms.';
  const [typedBlog, setTypedBlog] = useState("");
  const [blogLoop, setBlogLoop] = useState(0);
  useEffect(() => {
    let i = 0;
    setTypedBlog("");
    const interval = setInterval(() => {
      setTypedBlog(blogPhrase.slice(0, i + 1));
      i++;
      if (i === blogPhrase.length) {
        clearInterval(interval);
        setTimeout(() => setBlogLoop(loop => loop + 1), 1800); // restart after delay
      }
    }, 40);
    return () => clearInterval(interval);
  }, [blogLoop]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20"
      data-aos="fade-up"
    >
      {/* Background Effects (remove left circle) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Personal App Revolution summary inside original size glowing blue 3D circle */}
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
            <div className="aspect-square w-56 sm:w-64 md:w-96 relative flex items-center justify-center ">
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-300 border-4 border-blue-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px] flex items-center justify-center"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 py-3 overflow-hidden">
                <h2 className="text-base md:text-lg font-extrabold mb-1 text-center leading-snug break-words whitespace-normal text-blue-900 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[90%]">
                  Personal App Revolution
                </h2>
                <div className="text-sm md:text-base text-blue-900 font-medium leading-snug max-w-[90%] space-y-1 break-words whitespace-normal overflow-hidden">
                  <p className="mb-1">Your Digital Identity, Income Engine & Creative Space</p>
                  <ul className="list-disc list-inside text-left mx-auto w-fit">
                    <li>Food & machines: The agricultural and industrial revolutions.</li>
                    <li>Knowledge: The information revolution.</li>
                  </ul>
                  <p className="mt-1 font-semibold text-center">Now, a new era begins—<br/>The Personal App Revolution.</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-full md:w-auto shadow-md mt-2"
                  onClick={() => navigate('/personal-app')}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          {/* Center: Main Heading and Paragraph (static) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0" data-aos="zoom-in" data-aos-delay="400">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#8B5CF6', minHeight: '2.5em' }}>
              Grow Your Innovation with Damodara Smart Tech
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              We help forward-thinking companies build stunning digital experiences that drive growth and delight users. Founded in 2024, our mission is to empower your business with the latest in technology and creativity.
            </p>
          </div>
          {/* Right: Job Vacancy Circle - UPDATED FOR CLOSED APPLICATION */}
          <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="aspect-square w-56 sm:w-64 md:w-96 relative flex items-center justify-center ">
              <div className="absolute inset-0 rounded-full opacity-80 shadow-2xl shadow-gray-400/30 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 border-4 border-gray-200 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 py-4 overflow-hidden">
                <h2 className="text-base md:text-xl lg:text-2xl font-extrabold mb-2 min-h-[2em] text-center leading-snug break-words whitespace-normal text-gray-900 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[90%]">
                  Position Closed
                </h2>
                <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 text-center leading-tight text-gray-800 max-w-[90%]">
                  Python Web Scraper & UI/UX Designer
                </h3>
                <div className="text-sm md:text-base lg:text-base text-gray-900 font-medium leading-snug max-w-[90%] break-words whitespace-normal overflow-hidden mb-2 space-y-1">
                  <p className="mb-1 font-semibold">⏰ Deadline Passed: 10 Aug 2025</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 text-gray-900 w-full md:w-auto shadow-md mt-2 opacity-60 cursor-not-allowed"
                  disabled
                >
                  Application Closed
                </Button>
                <div className="flex flex-col items-center mt-3">
                  <p className="text-xs md:text-sm font-semibold text-gray-800">
                    Follow us for future updates:{" "}
                    <a
                      href="https://youtube.com/@damodarasmarttechpvtlted?si=4UUnn7yl48bKIXw4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-800 hover:text-red-600 transition-colors"
                    >
                      <Youtube size={16} className="ml-1" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
