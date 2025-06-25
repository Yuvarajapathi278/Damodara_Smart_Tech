import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-16 px-4">
      <div className="glass-card max-w-2xl w-full p-8 rounded-2xl shadow-lg animate-blog-glow">
        <span className="text-xs uppercase tracking-wider text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full mb-2 inline-block">Latest Blog</span>
        <h1 className="text-3xl font-bold mb-4">🤖💼 AI Won't Replace Jobs — It Will Multiply Them</h1>
        <span className="text-sm text-muted-foreground mb-4 block">June 25, 2025</span>
        <div className="prose prose-lg text-foreground mb-8">
          <p>Contrary to popular fear, AI is not a job destroyer — it's a job multiplier. Like the internet, electricity, or the printing press in olden days, Now AI shifts human effort from repetitive tasks to higher-value thinking, creating entirely new industries, roles, and ecosystems.</p>
          <h2>📈 Here's How AI Multiplies Opportunities:</h2>
          <ol>
            <li><b>Automation Creates Room for Creativity</b><br/>AI automates routine, time-consuming tasks (like data entry, scheduling, or document review), freeing humans to focus on empathy, innovation, and leadership — areas where machines will never excel.</li>
            <li><b>New Jobs, New Roles, New Industries</b><br/>From AI trainers, model explainers, robotics technicians, to AI ethicists, entire career paths are being born. These weren't even imaginable a decade ago.</li>
            <li><b>Startups & MSMEs Get Superpowers</b><br/>Small businesses can now scale like giants. A 5-person team with AI tools can serve the world — creating more entrepreneurial activity, hiring, and value creation across sectors.</li>
            <li><b>AI Amplifies Human Skills</b><br/>Doctors + AI = faster diagnosis. Teachers + AI = personalized learning. Farmers + AI = predictive crop planning. AI is not replacing humans — it's upgrading them.</li>
            <li><b>New Support Ecosystems</b><br/>Every AI system needs data labeling, compliance checks, deployment experts, UX designers, customer support, ethics boards, translators — creating layers of new jobs in tech, business, and social domains.</li>
          </ol>
          <h3>🌱 Summary: "AI doesn't eliminate human potential — it unlocks it."</h3>
          <p>It's not about man versus machine. It's man + machine against inefficiency, injustice, and inaccessibility.</p>
        </div>
        <Button className="bg-gradient-blue-purple text-white" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default BlogDetails; 
