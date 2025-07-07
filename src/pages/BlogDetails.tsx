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
        <h1 className="text-3xl font-bold mb-4 blog-sans-serif">🤖🌐 The Rise of Edge AI: Transforming Technology in 2025</h1>
        <span className="text-sm text-muted-foreground mb-4 block">7/7/25</span>
        <div className="prose prose-lg text-foreground mb-8 blog-sans-serif">
          <p>Edge AI is at the forefront of 2025's technology revolution, bringing intelligence and real-time decision-making directly to devices at the edge of networks. Unlike traditional cloud-based AI, Edge AI processes data locally, enabling faster responses, enhanced privacy, and reduced bandwidth usage.</p>
          <h2>🌐 What is Edge AI?</h2>
          <p>Edge AI refers to deploying artificial intelligence algorithms on local devices—such as smartphones, sensors, autonomous vehicles, and industrial machines—rather than relying solely on centralized cloud servers. This shift allows for real-time analytics and decision-making where data is generated.</p>
          <h2>🚀 Key Benefits in 2025</h2>
          <ul>
            <li><b>Ultra-Low Latency:</b> Instant processing for applications like autonomous vehicles, healthcare monitoring, and smart cities.</li>
            <li><b>Enhanced Privacy:</b> Sensitive data stays on the device, reducing exposure and improving compliance with regulations.</li>
            <li><b>Energy Efficiency:</b> Local processing reduces the need for constant data transmission, saving energy and bandwidth.</li>
            <li><b>Scalability:</b> Supports the explosive growth of IoT and connected devices.</li>
          </ul>
          <h2>🏥 Real-World Applications</h2>
          <ul>
            <li><b>Healthcare:</b> Wearables and medical devices provide real-time health insights and early anomaly detection.</li>
            <li><b>Manufacturing:</b> Predictive maintenance and quality control powered by on-site AI.</li>
            <li><b>Smart Cities:</b> Traffic management, energy optimization, and public safety systems run efficiently with local AI.</li>
            <li><b>Retail:</b> Personalized shopping experiences and inventory management in real time.</li>
          </ul>
          <h3>🔮 The Future of Edge AI</h3>
          <p>As Edge AI continues to evolve, it will empower businesses and individuals with smarter, faster, and more secure technology. The fusion of AI and edge computing is set to redefine how we interact with the digital world in 2025 and beyond.</p>
        </div>
        <Button className="bg-gradient-blue-purple text-white" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default BlogDetails; 
