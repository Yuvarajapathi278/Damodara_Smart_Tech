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
        <span className="text-xs uppercase tracking-wider text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full mb-2 inline-block">Latest INFO</span>
        <h1 className="text-3xl font-bold mb-4 blog-sans-serif">🚀 The Next Wave: 2025’s Breakthroughs in AI, Quantum, and Green Tech</h1>
        <span className="text-sm text-muted-foreground mb-4 block">9th July 25</span>
        <div className="prose prose-lg text-foreground mb-8 blog-sans-serif">
          <p>2025 is set to redefine the boundaries of technology. Here are the most important breakthroughs to watch this year:</p>
          <ol>
            <li><b>Generative AI Everywhere:</b> AI is moving beyond text and images to generate code, music, video, and even physical product designs, transforming creative industries and business workflows.</li>
            <li><b>Quantum Computing Advances:</b> Quantum computers are solving problems once thought impossible, with breakthroughs in cryptography, drug discovery, and logistics optimization.</li>
            <li><b>Green Tech Revolution:</b> Sustainability is at the core of innovation, with new materials, energy storage, and carbon capture technologies scaling up worldwide.</li>
            <li><b>Edge AI & IoT:</b> Smarter, faster AI at the edge is powering autonomous vehicles, smart cities, and real-time analytics in manufacturing and healthcare.</li>
            <li><b>AI-Driven Cybersecurity:</b> Proactive, adaptive security systems are using AI to detect and neutralize threats before they cause harm.</li>
            <li><b>Spatial Computing:</b> AR, VR, and mixed reality are merging digital and physical worlds for immersive experiences in work, education, and entertainment.</li>
            <li><b>Personalized AI Agents:</b> Custom AI assistants are becoming indispensable for productivity, learning, and personal health.</li>
            <li><b>Decentralized Infrastructure:</b> Blockchain and Web3 technologies are enabling new models for finance, identity, and data ownership.</li>
            <li><b>Human-Tech Synergy:</b> Brain-computer interfaces and advanced prosthetics are expanding human potential and accessibility.</li>
            <li><b>Authenticity & Trust:</b> New standards and tools are emerging to combat deepfakes and misinformation, ensuring trust in digital content.</li>
          </ol>
          <h3>🌟 Why These Breakthroughs Matter</h3>
          <p>These trends are shaping the future of business, society, and daily life. Staying ahead means understanding and embracing these changes—2025 is the year to innovate boldly!</p>
        </div>
        <Button className="bg-gradient-blue-purple text-white" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default BlogDetails; 
