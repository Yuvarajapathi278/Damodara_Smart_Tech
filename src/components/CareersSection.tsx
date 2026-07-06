import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Sparkles, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CareersSection() {
  const navigate = useNavigate();

  return (
    <section id="careers" className="py-20 relative" data-aos="fade-up">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--royal-blue))]/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[hsl(var(--royal-purple))]/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border/60 bg-card/80 p-8 text-center shadow-xl backdrop-blur-sm md:p-12" data-aos="zoom-in" data-aos-delay="200">
          <div className="flex justify-center">
            <div className="rounded-full bg-purple-600/10 p-3 text-purple-600">
              <GraduationCap size={28} />
            </div>
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-wider text-neon-purple md:text-5xl">Smart Tech Internship Program</h2>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
            Innovate • Learn • Build • Grow
          </h3>
          <p className="mt-6 text-base text-muted-foreground">
            Join Damodara Smart Tech for a multidisciplinary internship experience with live projects, mentorship, and a chance to earn a performance-based stipend and PPO opportunity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => navigate('/internship/details')}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
            >
              <Sparkles size={18} className="mr-2" />
              View Internship Details
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/apply?program=internship')}
              size="lg"
            >
              <Wallet size={18} className="mr-2" />
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
