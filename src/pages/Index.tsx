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
// import RotatableSeatMap from '../components/RotatableSeatMap';

const Index = () => {
  const navigate = useNavigate();
  const [angle, setAngle] = useState(0);

  // No AOS needed, Framer Motion handles animations

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
                Be part of a dynamic team that's shaping the future of digital technology. 
                Explore exciting career opportunities with us.
              </p>
            </div>
            {/* Premier Job Opportunity 3D Hover Card */}
            {(() => {
              const labelText = "Premier Job Opportunity";
              const [typedLabel, setTypedLabel] = React.useState("");
              React.useEffect(() => {
                let i = 0;
                const interval = setInterval(() => {
                  setTypedLabel(labelText.slice(0, i + 1));
                  i++;
                  if (i === labelText.length) clearInterval(interval);
                }, 40);
                return () => clearInterval(interval);
              }, []);
              return (
                <div className="flex justify-center">
                  <div className="glass-card rounded-2xl border border-white/10 p-3 md:p-4 flex flex-col gap-2 md:gap-3 items-center w-full max-w-2xl shadow-xl transition-transform hover:scale-[1.025] hover:shadow-2xl bg-background/80" style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
                    <span className="text-xs md:text-sm lg:text-base uppercase tracking-wider text-green-700 bg-green-200/40 px-3 py-1 rounded-full mb-2 inline-block font-sans font-bold">
                      {typedLabel}
                      {typedLabel.length < labelText.length && <span className="animate-pulse">|</span>}
                    </span>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-extrabold mb-1 text-center leading-snug break-words whitespace-normal text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-['Space Grotesk'],font-['Inter'],sans-serif">
                      Python Web Scraper & UI/UX Designer
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base mb-1 text-center leading-relaxed font-medium font-['Space Grotesk'],font-['Inter'],sans-serif text-[hsl(var(--foreground))]">
                      Build lean, fast applications combining Python web scraping automation with modern UI/UX design for our fast-growing tech solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-1 gap-y-1 text-xs md:text-sm mb-1 justify-center">
                      <span className="font-semibold text-foreground">📍 Location:</span>
                      <span className="text-muted-foreground">Chennai</span>
                      <span className="hidden sm:inline mx-2 text-muted-foreground">|</span>
                      <span className="font-semibold text-foreground">Type:</span>
                      <span className="text-muted-foreground">Full-time</span>
                      <span className="hidden sm:inline mx-2 text-muted-foreground">|</span>
                      <span className="font-semibold text-foreground">Vacancies:</span>
                      <span className="text-muted-foreground">2</span>
                    </div>
                    <div className="text-xs md:text-sm text-center text-muted-foreground mb-2">
                      <strong>Key Skills:</strong> Python web scraping • UI/UX design • Data extraction & automation
                    </div>
                    <Button
                      size="lg"
                      className="bg-gradient-blue-purple text-white w-full md:w-auto shadow-md mt-1"
                      onClick={() => window.location.href = 'mailto:damodarasmarttech@gmail.com?subject=Application for Python Web Scraper & UI/UX Designer&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the Python Web Scraper & UI/UX Designer position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0AExperience: %0D%0APortfolio/GitHub: %0D%0A%0D%0AI have attached my resume for your review.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              );
            })()}
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
