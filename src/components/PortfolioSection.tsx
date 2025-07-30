import React, { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  video: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Financial Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Interactive financial analytics dashboard with real-time data visualization.",
    video: "/Financial_Dashboard_Video.mp4"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Full-featured online store with product management and payment integration.",
    video: "/Ecommerce_Dashboard.mp4"
  },
  {
    id: 3,
    title: "Health & Fitness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Mobile application for tracking fitness goals and health metrics.",
    video: "/Health_Fitness_App.mp4"
  },
  {
    id: 4,
    title: "Branding Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Comprehensive digital marketing campaign that increased brand awareness by 78%.",
    video: "/Branding_Campaign.mp4"
  }
];

export function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "Web App", "Web Development", "Mobile App", "Digital Marketing"];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 relative" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-4xl md:text-5xl tracking-wider text-neon-purple mb-3 font-bold">Our Work</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h3>
          <p className="text-base text-muted-foreground">
            Explore our portfolio of successful projects and see how we've helped 
            businesses transform their digital presence.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="400">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${filter === category ? "bg-gradient-blue-purple text-white" : "border border-white/20 text-foreground"}`}
              onClick={() => setFilter(category)}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="600">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-xl border border-white/10 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden rounded-lg">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ opacity: 1 }}
                >
                  Sorry, your browser does not support embedded videos.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
              </div>
              <div className="p-6 relative">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
