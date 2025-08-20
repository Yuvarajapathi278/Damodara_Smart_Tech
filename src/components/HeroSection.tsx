import React, { useState, useEffect } from "react";
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
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Personal App Revolution */}
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
          {/* Center: Main Heading */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0" data-aos="zoom-in" data-aos-delay="400">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#8B5CF6', minHeight: '2.5em' }}>
              Grow Your Innovation with Damodara Smart Tech
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              We help forward-thinking companies build stunning digital experiences that drive growth and delight users. Founded in 2024, our mission is to empower your business with the latest in technology and creativity.
            </p>
          </div>
          {/* Right: Job Vacancy Circle - RE-ENABLED */}
          <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="aspect-square w-56 sm:w-64 md:w-96 relative flex items-center justify-center ">
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-green-400/30 bg-gradient-to-br from-green-100 via-blue-50 to-green-300 border-4 border-green-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 py-4 overflow-hidden">
                <h2 className="text-base md:text-xl lg:text-2xl font-extrabold mb-2 min-h-[2em] text-center leading-snug break-words whitespace-normal text-green-900 font-['Space Grotesk'],font-['Inter'],sans-serif max-w-[90%]">
                  We're Hiring!
                </h2>
                <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 text-center leading-tight text-green-800 max-w-[90%]">
                  3 Exciting Positions Available
                </h3>
                <div className="text-xs md:text-sm lg:text-base text-green-900 font-medium leading-snug max-w-[90%] break-words whitespace-normal overflow-hidden mb-2 space-y-1">
                  <p className="mb-1">📍 Chennai | Full-time</p>
                  <p className="mb-1">🎯 6 Total Openings (2 each)</p>
                  <p className="mb-1 font-semibold text-red-700">⏰ Deadline: 26 Aug 2025</p>
                  <p className="text-xs md:text-xs lg:text-sm">Full Stack Dev • UI/UX Designer • Python Scraper</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 text-green-900 w-full md:w-auto shadow-md mt-2"
                  onClick={() => navigate('/apply')}
                >
                  Apply Now
                </Button>
                <div className="flex flex-col items-center mt-3 text-xs md:text-sm font-semibold text-green-800">
                  <p>Follow us for updates</p>
                  <div className="flex items-center gap-4 mt-1">
                    <a
                      href="https://youtube.com/@damodarasmarttechpvtlted?si=4UUnn7yl48bKIXw4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-green-600 transition-colors underline"
                    >
                      Click here <Youtube size={16} className="ml-1" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/damodara-smart-tech-pvt-ltd-1810b0377"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-blue-600 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
