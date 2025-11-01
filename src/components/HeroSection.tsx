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
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Personal App Revolution */}
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
            <div className="aspect-square w-32 sm:w-56 md:w-80 lg:w-96 relative flex items-center justify-center">
              {/* Reduced size circle bg: mobile < sm < md < lg */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-300 border-4 border-blue-100 blur-[1px]" 
                style={{ width: "100%", height: "100%" }}></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 py-4 overflow-hidden">
                <h2 className="text-xs sm:text-base md:text-lg lg:text-xl font-extrabold mb-2 text-center leading-tight break-words text-blue-900 font-['Space Grotesk'],font-['Inter'],sans-serif">
                  Personal App Revolution
                </h2>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-900 font-medium leading-tight space-y-1 break-words overflow-hidden">
                  <p className="mb-2">Your Digital Identity, Income Engine & Creative Space</p>
                  <ul className="list-disc list-inside text-left mx-auto w-fit text-xs sm:text-sm md:text-base leading-tight space-y-1">
                    <li>Food & machines: Agricultural & industrial</li>
                    <li>Knowledge: Information revolution</li>
                  </ul>
                  <p className="mt-2 font-semibold text-center text-xs sm:text-sm md:text-base leading-tight">Now, a new era begins—<br />The Personal App Revolution.</p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-4/5 shadow-md mt-3 text-xs sm:text-sm md:text-base py-2"
                  onClick={() => navigate('/personal-app')}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Center: Company name/tag - Big and aligned */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8 mb-8 md:mb-0" data-aos="zoom-in" data-aos-delay="400">
            <h1
              className="
                font-bold leading-tight mb-4
                text-purple-700
                text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              "
              style={{ minHeight: '2.5em' }}
            >
              Damodara Smart Tech
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl">
              Grow Your Innovation
              <br />
              We provide cutting-edge digital solutions for all people, professions, and enterprises — crafting intelligent experiences that inspire, engage, and accelerate growth.
              Our mission is to empower every idea with the perfect fusion of technology, creativity, and purpose.
            </p>
          </div>

          {/* Right: Selected Candidates */}
          <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="aspect-square w-32 sm:w-56 md:w-80 lg:w-96 relative flex items-center justify-center">
              {/* Reduced size circle bg: mobile < sm < md < lg */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-80 shadow-2xl shadow-green-400/30 bg-gradient-to-br from-green-100 via-green-50 to-green-300 border-4 border-green-100 blur-[1px]" 
                style={{ width: "100%", height: "100%" }}></div>
              <div className="relative z-10 flex flex-col justify-center items-center w-11/12 h-11/12 mx-auto text-center px-2 py-4 overflow-hidden">
                <h2 className="text-xs sm:text-base md:text-lg lg:text-xl font-extrabold mb-3 text-center leading-tight break-words text-green-700 font-['Space Grotesk'],font-['Inter'],sans-serif">
                  🎉 Selected Candidates
                </h2>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-green-700 font-medium leading-tight break-words overflow-hidden mb-3 text-center">
                  <p className="font-semibold text-green-800">
                    We are excited to welcome our new team members!
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-green-600 mt-2">
                    Click below to see who joined our team
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-blue-purple text-white w-4/5 shadow-md mt-2 text-xs sm:text-sm md:text-base py-2"
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
