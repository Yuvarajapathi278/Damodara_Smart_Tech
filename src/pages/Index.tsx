import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Youtube, Linkedin } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [angle, setAngle] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="why-choose-us" className="py-20 relative" data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl tracking-wider text-neon-purple mb-3 font-bold">Why Choose Us</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Your Trusted <span className="gradient-text">Technology Partner</span>
              </h3>
              <p className="text-base text-muted-foreground">
                We combine technical expertise with business acumen to deliver solutions 
                that drive real results for your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold mb-4">Expert team</h4>
                <p className="text-muted-foreground">
                  Our team of experienced professionals brings years of industry expertise to every project.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold mb-4">Innovative solutions</h4>
                <p className="text-muted-foreground">
                  We stay ahead of the curve with cutting-edge technologies and creative problem-solving.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold mb-4">Client-focused</h4>
                <p className="text-muted-foreground">
                  Your success is our priority. We work closely with you to understand and meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="careers" className="py-20 relative" data-aos="fade-up" data-aos-delay="500">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl tracking-wider text-neon-purple mb-3 font-bold">Careers</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                <span className="gradient-text">Join Our Innovative Team</span>
              </h3>
              <p className="text-base text-muted-foreground">
                We're expanding our team with multiple exciting opportunities. Be part of building the future of technology.
              </p>
              {/* Updated status notice */}
              <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                🎉 Shortlisted candidates announced!
              </div>
            </div>
            
            {/* Job Opportunities Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Full Stack Developer */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center bg-background/80 hover:scale-105 transition-transform">
                <span className="text-sm uppercase tracking-wider text-blue-700 bg-blue-200/40 px-3 py-1 rounded-full mb-4 font-bold">
                  2 Openings
                </span>
                <h4 className="text-xl font-bold mb-3 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Build end-to-end web applications with modern frameworks and scalable architecture.
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  <strong>Skills:</strong> React • Node.js • Database Design • API Development
                </div>
              </div>

              {/* UI/UX Designer */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center bg-background/80 hover:scale-105 transition-transform">
                <span className="text-sm uppercase tracking-wider text-green-700 bg-green-200/40 px-3 py-1 rounded-full mb-4 font-bold">
                  2 Openings
                </span>
                <h4 className="text-xl font-bold mb-3 text-gradient bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  UI/UX Designer
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Create intuitive and beautiful user experiences that delight our clients and users.
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  <strong>Skills:</strong> Figma • User Research • Prototyping • Design Systems
                </div>
              </div>

              {/* Python Web Scraper */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center bg-background/80 hover:scale-105 transition-transform">
                <span className="text-sm uppercase tracking-wider text-purple-700 bg-purple-200/40 px-3 py-1 rounded-full mb-4 font-bold">
                  2 Openings
                </span>
                <h4 className="text-xl font-bold mb-3 text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Python Web Scraper
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop robust data extraction and automation solutions for various web platforms.
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  <strong>Skills:</strong> Python • BeautifulSoup • Scrapy • Data Processing
                </div>
              </div>
            </div>

            {/* Active View Candidates Button */}
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                onClick={() => navigate('/shortlisted-candidates')}
              >
                View Shortlisted Candidates
              </Button>
            </div>

            {/* SUBSCRIPTION SECTION */}
            <div className="text-center mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 max-w-2xl mx-auto border border-white/20">
              <h4 className="text-lg font-bold mb-3 text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stay Connected with Us!
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                It's delightful to subscribe for present & future updates on tech insights, job openings, and company news.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="https://youtube.com/@damodarasmarttechpvtlted?si=4UUnn7yl48bKIXw4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  <Youtube size={20} className="mr-2" />
                  Subscribe on YouTube
                </a>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>📍 <strong>Location:</strong> Chennai | <strong>Type:</strong> Full-time | <strong>Status:</strong> Shortlisted</p>
            </div>
          </div>
        </div>
        <div id="contact" className="py-20 relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl tracking-wider text-neon-purple mb-3 font-bold">Contact us</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Start your <span className="gradient-text">digital journey</span>
              </h3>
              <p className="text-base text-muted-foreground">
                Have a project in mind? Let's discuss how we can help bring your vision to life.
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => navigate('/contact')}
              >
                Send Us a Message
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
