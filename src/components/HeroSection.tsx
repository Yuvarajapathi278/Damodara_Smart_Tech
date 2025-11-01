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
        <div className="absolute bottom-20 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 sm:w-48 sm:h-48 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Personal App Revolution - UNCHANGED */}
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
            <div className="aspect-square w-36 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-300 border-4 border-blue-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 sm:px-4 py-4 overflow-hidden">
                <h2 className="text-xs sm:text-base lg:text-lg font-extrabold mb-2 text-center leading-tight break-words text-blue-900 font-['Space Grotesk'],font-['Inter'],sans-serif">
                  Personal App Revolution
                </h2>
                <div className="text-xs sm:text-sm lg:text-base text-blue-900 font-medium leading-tight space-y-1 break-words overflow-hidden">
                  <p className="mb-2">Your Digital Identity, Income Engine & Creative Space</p>
                  <ul className="list-disc list-inside text-left mx-auto w-fit text-xs sm:text-sm leading-tight space-y-1">
                    <li>Food & machines: Agricultural & industrial</li>
                    <li>Knowledge: Information revolution</li>
                  </ul>
                  <p className="mt-2 font-semibold text-center text-xs sm:text-sm leading-tight">Now, a new era begins—<br />The Personal App Revolution.</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-4/5 shadow-md mt-3 text-xs sm:text-sm py-2"
                  onClick={() => navigate('/personal-app')}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Center: Main Heading - ENLARGED ON MOBILE AND HEIGHT ALIGNED */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-3 w-full">
                {/* Adjust logo height as needed: */}
                {/* Place logo here if you have a logo SVG/component, else skip */}
                {/* Example: <img src={LogoImg} alt="Logo" className="h-10 sm:h-14 lg:h-20" /> */}
                <h1
                  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-1"
                  style={{ color: '#8B5CF6', minHeight: '2.5em' }}
                >
                  Damodara Smart Tech
                </h1>
              </div>
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-purple-700 font-bold mb-4">
                Grow Your Innovation
              </span>
            </div>
            <p className="text-xs sm:text-base lg:text-lg text-muted-foreground max-w-xl">
              We provide cutting-edge digital solutions for all people, professions, and enterprises — crafting intelligent experiences that inspire, engage, and accelerate growth.
              Our mission is to empower every idea with the perfect fusion of technology, creativity, and purpose.
            </p>
          </div>

          {/* Right: Selected Candidates Circle - MOBILE SIZE REDUCED */}
          <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="aspect-square w-36 sm:w-80 md:w-80 lg:w-96 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-green-400/30 bg-gradient-to-br from-green-100 via-green-50 to-green-300 border-4 border-green-100 transform-gpu hover:scale-105 transition-transform duration-700 blur-[1px]"></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 sm:px-4 py-4 overflow-hidden">
                <h2 className="text-xs sm:text-lg lg:text-xl font-extrabold mb-3 text-center leading-tight break-words text-green-700 font-['Space Grotesk'],font-['Inter'],sans-serif">
                  🎉 Selected Candidates
                </h2>
                <div className="text-xs sm:text-sm lg:text-base text-green-700 font-medium leading-tight break-words overflow-hidden mb-3 text-center">
                  <p className="font-semibold text-green-800">
                    We are excited to welcome our new team members!
                  </p>
                  <p className="text-xs sm:text-sm text-green-600 mt-2">
                    Click below to see who joined our team
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-4/5 shadow-md mt-2 text-xs sm:text-sm py-2"
                  onClick={() => navigate('/selected-candidates')}
                >
                  View Selected Team
                </Button>
                <div className="flex flex-col items-center mt-3 text-xs font-semibold text-gray-600">
                  <p className="text-center mb-1 leading-tight">Subscribe for latest tech & updates!</p>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href="https://www.youtube.com/@DamodaraSmartTech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-red-600 transition-colors underline text-xs"
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
        </div>
      </div>
    </section>
  );
}
