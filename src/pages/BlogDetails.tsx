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
        <h1 className="text-3xl font-bold mb-4 blog-sans-serif">🤖💼 The Future of Work: Automation, AI, and the Human Touch</h1>
        <span className="text-sm text-muted-foreground mb-4 block">3/7/25</span>
        <div className="prose prose-lg text-foreground mb-8 blog-sans-serif">
          <p>The workplace is evolving faster than ever, driven by rapid advances in automation and artificial intelligence. In this blog, we explore how technology is reshaping jobs, the skills needed for the future, and why the human touch remains irreplaceable in the age of smart machines.</p>
          <h2>🤖 What is Driving the Change?</h2>
          <p>Automation and AI are transforming industries by taking over repetitive tasks, analyzing massive datasets, and enabling smarter decision-making. From manufacturing robots to AI-powered chatbots, technology is augmenting human capabilities and creating new opportunities.</p>
          <h2>💡 The Skills of Tomorrow</h2>
          <ol>
            <li><b>Digital Literacy:</b> Understanding and leveraging digital tools is now essential in almost every field.</li>
            <li><b>Creativity & Problem-Solving:</b> As machines handle routine work, uniquely human skills like creativity and critical thinking become more valuable.</li>
            <li><b>Emotional Intelligence:</b> The ability to connect, empathize, and collaborate remains a key differentiator in the workplace.</li>
            <li><b>Adaptability:</b> Lifelong learning and flexibility are crucial as roles and technologies evolve.</li>
          </ol>
          <h2>🌍 The Human Touch</h2>
          <ul>
            <li><strong>Collaboration:</strong> Teams that blend human insight with AI-driven analysis achieve the best results.</li>
            <li><strong>Ethics & Responsibility:</strong> Humans must guide the ethical use of technology and ensure it benefits society.</li>
            <li><strong>Well-being:</strong> Balancing productivity with mental health and job satisfaction is more important than ever.</li>
          </ul>
          <h3>🔮 Looking Ahead</h3>
          <p>The future of work is not about humans versus machines, but about partnership. By embracing technology and nurturing our uniquely human strengths, we can build a future where work is more meaningful, creative, and inclusive.</p>
        </div>
        <Button className="bg-gradient-blue-purple text-white" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default BlogDetails; 
