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
          {/* Left: Personal App Revolution - FIXED WITH LARGER MOBILE CIRCLES */}
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
            <div className="aspect-square w-80 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-300 border-4 border-blue-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px] flex items-center justify-center"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-4 py-4 overflow-hidden">
                <h2 className="text-sm md:text-base lg:text-lg font-extrabold mb-2 text-center leading-tight break-words text-blue-900 font-['Space Grotesk'],font-['Inter'],sans-serif">
                  Personal App Revolution
                </h2>
                <div className="text-xs md:text-sm lg:text-base text-blue-900 font-medium leading-tight space-y-1 break-words overflow-hidden">
                  <p className="mb-2">Your Digital Identity, Income Engine & Creative Space</p>
                  <ul className="list-disc list-inside text-left mx-auto w-fit text-xs md:text-sm leading-tight space-y-1">
                    <li>Food & machines: Agricultural & industrial</li>
                    <li>Knowledge: Information revolution</li>
                  </ul>
                  <p className="mt-2 font-semibold text-center text-xs md:text-sm leading-tight">Now, a new era begins—<br/>The Personal App Revolution.</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-4/5 shadow-md mt-3 text-xs md:text-sm py-2"
                  onClick={() => navigate('/personal-app')}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Center: Main Heading */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0" data-aos="zoom-in" data-aos-delay="400">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6" style={{ color: '#8B5CF6', minHeight: '2.5em' }}>
              Grow Your Innovation with Damodara Smart Tech
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl">
              We help forward-thinking companies build stunning digital experiences that drive growth and delight users. Founded in 2024, our mission is to empower your business with the latest in technology and creativity.
            </p>
          </div>
          
          {/* Right: Job Vacancy Circle - Updated for Shortlisted Candidates */}
          <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="aspect-square w-80 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full opacity-60 shadow-2xl shadow-green-400/30 bg-gradient-to-br from-green-100 via-green-50 to-green-300 border-4 border-green-100 transform-gpu transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-4 py-4 overflow-hidden">
                <h2 className="text-sm md:text-lg lg:text-xl font-extrabold mb-2 text-center leading-tight break-words text-green-700 font-['Space Grotesk'],font-['Inter'],sans-serif">
                  Job Opportunities
                </h2>
                <h3 className="text-xs md:text-base lg:text-lg font-bold mb-2 text-center leading-tight text-gray-600">
                  3 Positions
                </h3>
                <div className="text-xs md:text-sm lg:text-base text-purple-600 font-medium leading-tight break-words overflow-hidden mb-2 space-y-1">
                  <p className="mb-1">📍 Chennai | Full-time</p>
                  <p className="mb-1">🎯 6 Total Openings (2 each)</p>
                  <p className="mb-1 font-semibold text-green-700">📋 The shortlisted candidates list will be published tomorrow</p>
                  <p className="text-xs leading-tight">Full Stack • UI/UX • Python</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-4/5 shadow-md mt-2 text-xs md:text-sm py-2"
                >
                  Stay Tuned...!!
                </Button>
                <div className="flex flex-col items-center mt-3 text-xs md:text-sm font-semibold text-gray-600">
                  <p className="text-center mb-1 leading-tight">It's delightful to subscribe for latest tech, jobs & updates!</p>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href="https://youtube.com/@damodarasmarttechpvtlted?si=4UUnn7yl48bKIXw4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-red-600 transition-colors underline text-xs"
                    >
                      Click here <Youtube size={12} className="ml-1" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/damodara-smart-tech-pvt-ltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-blue-600 transition-colors"
                    >
                      <Linkedin size={12} />
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
