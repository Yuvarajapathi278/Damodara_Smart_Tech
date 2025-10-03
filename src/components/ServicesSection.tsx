import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, Service } from "@/serviceData";

interface ServiceCardProps extends Service {}

const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  title,
  description,
  icon: IconComponent,
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Define background images for each service category
  const backgroundMap: { [key: string]: string } = {
    "✅ Core Software Development Services": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ AI & Data-Driven Services": "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Cloud & DevOps Services": "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "✅ Automation & Smart Process Engineering": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Digital Transformation Services": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Cybersecurity & Compliance": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Product Development as a Service (PDaaS)": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Industry-Specific Smart Solutions": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Consulting & R&D": "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ SaaS & Platform Development": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Smart Integration Services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "✅ Software Showroom / Marketplace Support": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  };

  const backgroundImage = backgroundMap[title] || "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
  };

  return (
    <Link
      ref={cardRef}
      to={`/services/${slug}`}
      className="glass-card rounded-xl overflow-hidden group flex flex-col justify-between h-full w-full text-left relative cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
        willChange: 'transform'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300" />
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
      
      {/* Content */}
      <div className="relative z-10 p-4 flex flex-col justify-between h-full text-white transform transition-transform duration-300 group-hover:translateZ-10">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-center text-white drop-shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1">{title}</h3>
          <p className="text-gray-200 text-sm text-center mb-4 line-clamp-2 drop-shadow-md transform transition-all duration-300 group-hover:text-white group-hover:scale-105">{description}</p>
        </div>
        
        <div className="mt-auto flex items-center justify-center gap-1 text-white font-medium text-sm transform transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-300">
          <span className="drop-shadow-lg">Know More</span>
          <ArrowRight className="w-3 h-3 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
        </div>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full" 
           style={{ 
             animation: 'shine 0.8s ease-out',
             animationDelay: '0.2s'
           }} 
      />
    </Link>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
