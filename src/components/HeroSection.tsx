import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  // Typing animation for blog title
  const blogTitle = "🤖💼 AI Won't Replace Jobs — It Will Multiply Them";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(blogTitle.slice(0, i + 1));
      i++;
      if (i === blogTitle.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[hsl(var(--dusty-rose))]/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Transform Your Business With 
                <span className="block mt-2 text-[hsl(var(--navy))]">
                  Damodara Smart Tech
                </span>
              </h1>
              <p className="text-base text-muted-foreground">
                We help forward-thinking companies build stunning digital experiences 
                that drive growth and delight users. Founded in 2024.
              </p>
            </div>
          </div>
          
          {/* Latest Blog Card */}
          <div className="relative animate-fade-in animate-float-slow" style={{ animationDelay: "0.2s" }}>
            <div className="w-full max-w-md mx-auto glass-card rounded-2xl p-8 shadow-lg flex flex-col gap-4 animate-blog-glow">
              <span className="text-xs uppercase tracking-wider text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full mb-2 inline-block">Latest Blog</span>
              <h2 className="text-2xl font-bold mb-2 min-h-[2.5em]">
                {typedTitle}
                <span className="animate-pulse">|</span>
              </h2>
              <span className="text-sm text-muted-foreground mb-2">June 25, 2025</span>
              <p className="text-base text-muted-foreground mb-4">
                Contrary to popular fear, AI is not a job destroyer — it's a job multiplier. Like the internet, electricity, or the printing press in olden days, Now AI shifts human effort from repetitive tasks to higher-value thinking, creating entirely new industries, roles, and ecosystems.
              </p>
              <button
                className="bg-gradient-blue-purple text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
                onClick={() => window.location.href = '/blog/ai-wont-replace-jobs'}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
