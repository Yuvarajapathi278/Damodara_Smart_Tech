import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-16 px-4">
      <div className="glass-card max-w-2xl w-full p-8 rounded-2xl shadow-lg">
        <style>{`
          .blog-sans-serif { font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; }
        `}</style>
        <span className="text-xs uppercase tracking-wider text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full mb-2 inline-block">Latest Blog</span>
        <h1 className="text-3xl font-bold mb-4 blog-sans-serif">🚀 Top 10 Technology Trends of 2025: AI, BCIs, and Sustainability</h1>
        <span className="text-sm text-muted-foreground mb-4 block">8/7/25</span>
        <div className="prose prose-lg text-foreground mb-8 blog-sans-serif">
          <p>2025 is a landmark year for technology, with innovations reshaping every aspect of our lives. Here are the top 10 technology trends to watch:</p>
          <ol>
            <li><b>Agentic AI:</b> Autonomous AI agents are revolutionizing business operations, decision-making, and productivity. Expect to see AI-powered assistants and digital workers in every industry.</li>
            <li><b>Brain-Computer Interfaces (BCIs):</b> Direct communication between the brain and devices is expanding human potential, from medical recovery to new ways of interacting with technology.</li>
            <li><b>Polyfunctional Robots:</b> Human-machine synergy is enabling robots to perform multiple tasks, adapt quickly, and work alongside people in manufacturing, healthcare, and logistics.</li>
            <li><b>Spatial Computing:</b> AR, VR, and mixed reality are merging digital and physical worlds, transforming entertainment, education, and design.</li>
            <li><b>Tailored AI Models:</b> Businesses are moving from general-purpose AI to custom models for better performance, privacy, and cost savings.</li>
            <li><b>Post-Quantum Cryptography:</b> New encryption methods are being developed to protect data from future quantum computers.</li>
            <li><b>AI-Powered Cybersecurity:</b> Proactive, automated defense systems are reducing response times and increasing threat detection accuracy.</li>
            <li><b>Hardware Innovation:</b> Advances like 3D chip stacking and photonic computing are pushing the limits of performance and efficiency.</li>
            <li><b>Sustainability Revolution:</b> Green tech and renewable energy are at the core of digital transformation, with companies racing to reduce their carbon footprint.</li>
            <li><b>Disinformation Defense:</b> New tools and regulations are emerging to combat AI-generated misinformation and ensure authenticity online.</li>
          </ol>
          <h3>🌟 Why These Trends Matter</h3>
          <p>These trends are not just buzzwords—they are shaping the future of business, society, and daily life. From smarter cities and healthcare to secure data and sustainable innovation, 2025 is set to be a year of transformation. Stay ahead by understanding and embracing these changes!</p>
        </div>
        <Button className="bg-gradient-blue-purple text-white" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default BlogDetails; 
