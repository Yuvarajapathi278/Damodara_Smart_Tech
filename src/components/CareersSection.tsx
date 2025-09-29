import React from "react";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CareersSection() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <section id="careers" className="py-20 relative" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--royal-blue))]/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[hsl(var(--royal-purple))]/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl uppercase tracking-wider text-neon-purple mb-3 font-bold">Careers</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Join Our <span className="gradient-text">Innovation Journey</span>
          </h3>
          <p className="text-base text-muted-foreground mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation.
            Join our team and be part of something extraordinary!
          </p>
          
          {/* Apply Now Button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleApplyClick}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-3"
            >
              <Users size={20} className="mr-2" />
              Apply Now
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
