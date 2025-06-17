import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { RotatingQuotes } from "./RotatingQuotes";

export function AboutSection() {
  const features = [
    "Innovative digital solutions",
    "Expert team of professionals",
    "Customer-centered approach",
    "Quality-driven development",
    "Reliable support & maintenance",
    "Timely project delivery"
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl uppercase tracking-wider text-neon-purple mb-3 font-bold">About Us</h2>
          <h3 className="text-2xl md:text-3xl mb-6">
            Transforming Ideas into <span className="gradient-text">Digital Excellence</span>
          </h3>
          <p className="text-base text-muted-foreground">
            We are a passionate team of experts dedicated to delivering cutting-edge solutions
            that help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg">
                Founded in 2024 by Dr. Dev and Dr. Chirag, DAMODARA SMART TECH has been at the forefront of digital innovation,
                helping businesses of all sizes embrace technology and achieve their goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-gradient-blue-purple rounded-full p-1 flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Mission Card */}
              <div className="aspect-video overflow-hidden glass-card rounded-2xl border border-white/10 shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"></div>
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <h4 className="text-4xl font-bold mb-4">Our Mission</h4>
                  <p className="mb-6 text-muted-foreground text-base">
                    "At Damodara Smart Tech, our mission is to align smartness with service — to humanity and to the planet."
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    We believe technology must serve not just profits, but also people and the planet. This is how true smartness looks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose & Philosophy Section */}
        <div className="mt-20">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="gradient-text">🌱 Our Purpose & Philosophy</span>
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <blockquote className="text-xl italic text-muted-foreground">
                  "We started Damodara Smart Tech not just to build smarter systems, but to build a smarter way of living. In every product, we see a promise to the future."
                </blockquote>
                <p className="text-lg">
                  Every solution we design is meant to make lives more intentional, more joyful, and more conscious.
                </p>
              </div>

              <div className="space-y-4">
                <blockquote className="text-xl italic text-muted-foreground">
                  "Smart tech is not about machines taking over. It's about machines making space for more human possibilities."
                </blockquote>
                <p className="text-lg">
                  Let machines do the repetitive — let humans do the meaningful.
                </p>
              </div>

              <div className="space-y-4">
                <blockquote className="text-xl italic text-muted-foreground">
                  "We use Smart Tech not to replace people, but to restore their time, energy, and creativity."
                </blockquote>
                <p className="text-lg">
                  Our goal is not efficiency alone, but empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Our Founders</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-semibold">Dr. Dev</h4>
                  <p className="text-sm text-neon-blue">Co-founder & CEO</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                With extensive experience in technological innovation, Dr. Dev brings visionary leadership 
                and strategic direction to DAMODARA SMART TECH.
              </p>
            </div>
            
            {/* Founder 2 */}
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-semibold">Dr. Chirag</h4>
                  <p className="text-sm text-neon-purple">Co-founder & CTO</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                A brilliant technologist with a passion for innovation, Dr. Chirag leads the technical 
                development and research initiatives at DAMODARA SMART TECH.
              </p>
            </div>
          </div>
        </div>

        {/* Rotating Quotes */}
        <div className="mt-16">
          <RotatingQuotes />
        </div>
      </div>
    </section>
  );
}
