import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ContactSection() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="contact" className="py-16 relative" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl tracking-wider text-neon-purple mb-3 font-bold">Contact Us</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Start Your <span className="gradient-text">Digital Journey</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            Have a project in mind? We'd love to hear from you.
          </p>
          
          <Button 
            onClick={handleContactClick}
            className="bg-gradient-blue-purple hover:opacity-90 transition-opacity px-8 py-3 text-lg font-semibold"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
