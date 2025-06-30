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
        <h1 className="text-3xl font-bold mb-4 blog-sans-serif">⚛️🚀 The Rise of Quantum Computing: What You Need to Know</h1>
        <span className="text-sm text-muted-foreground mb-4 block">1/7/25</span>
        <div className="prose prose-lg text-foreground mb-8 blog-sans-serif">
          <p>Quantum computing is set to revolutionize technology by solving problems that are impossible for classical computers. In this blog, we explore what quantum computing is, how it works, and why it matters for the future of science, business, and everyday life.</p>
          <h2>⚛️ What is Quantum Computing?</h2>
          <p>Quantum computing leverages the principles of quantum mechanics to process information in fundamentally new ways. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits, or qubits, which can exist in multiple states at once thanks to superposition and entanglement.</p>
          <h2>🚀 How Does It Work?</h2>
          <ol>
            <li><b>Qubits:</b> The basic unit of quantum information, capable of representing both 0 and 1 simultaneously.</li>
            <li><b>Superposition:</b> Qubits can be in a combination of states, allowing quantum computers to process a vast number of possibilities at once.</li>
            <li><b>Entanglement:</b> Qubits can be linked so that the state of one instantly influences the state of another, no matter the distance.</li>
            <li><b>Quantum Gates:</b> Operations that manipulate qubits, enabling complex computations that are infeasible for classical computers.</li>
          </ol>
          <h2>🌟 Why Does It Matter?</h2>
          <ul>
            <li><strong>Unprecedented Speed:</strong> Quantum computers can solve certain problems exponentially faster than classical computers.</li>
            <li><strong>Breakthroughs in Science:</strong> From drug discovery to materials science, quantum computing could unlock new frontiers.</li>
            <li><strong>Advanced Cryptography:</strong> Quantum computers could break current encryption methods, leading to new, more secure systems.</li>
            <li><strong>Optimization:</strong> Industries like logistics, finance, and manufacturing could benefit from solving complex optimization problems.</li>
          </ul>
          <h3>🔮 The Future of Quantum Computing</h3>
          <p>While practical, large-scale quantum computers are still in development, progress is accelerating. Companies and governments are investing heavily in quantum research, and the first real-world applications are beginning to emerge. Staying informed about quantum computing is essential for anyone interested in the future of technology.</p>
        </div>
        <Button className="bg-gradient-blue-purple text-white" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default BlogDetails; 
