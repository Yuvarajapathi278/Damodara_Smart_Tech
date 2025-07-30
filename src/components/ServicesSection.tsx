import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Brain,
  Cloud,
  Lock,
  Rocket,
  MonitorSmartphone,
  Database,
  Bug,
  BarChart2,
  Globe,
  FileText,
} from "lucide-react";
import { services, Service } from "@/serviceData"; // Import services from serviceData.ts

interface ServiceCardProps extends Service {} // ServiceCardProps now extends the Service interface

const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  title,
  description,
  icon: IconComponent, // Rename icon to IconComponent
}) => {
  const colorMap: { [key: string]: string } = {
    "✅ Core Software Development Services": "bg-blue-100 text-blue-600",
    "✅ AI & Data-Driven Services": "bg-purple-100 text-purple-600",
    "✅ Cloud & DevOps Services": "bg-cyan-100 text-cyan-600",
    "✅ Automation & Smart Process Engineering": "bg-red-100 text-red-600",
    "✅ Digital Transformation Services": "bg-yellow-100 text-yellow-600",
    "✅ Cybersecurity & Compliance": "bg-green-100 text-green-600",
    "✅ Product Development as a Service (PDaaS)": "bg-orange-100 text-orange-600",
    "✅ Industry-Specific Smart Solutions": "bg-pink-100 text-pink-600",
    "✅ Consulting & R&D": "bg-indigo-100 text-indigo-600",
    "✅ SaaS & Platform Development": "bg-teal-100 text-teal-600",
    "✅ Smart Integration Services": "bg-gray-100 text-gray-600",
    "✅ Software Showroom / Marketplace Support": "bg-neutral-100 text-neutral-600",
  };

  const color = colorMap[title] || "bg-gray-100 text-gray-600"; // Default color

  // Explicitly type IconComponent
  const Icon = IconComponent as React.FC<{ className?: string }>;

  return (
    <Link
      to={`/services/${slug}`}
      className="glass-card rounded-xl p-4 transition-all duration-300 group flex flex-col justify-between h-full w-full text-left hover:scale-105 hover:shadow-xl"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: 'translateZ(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color} mx-auto transition-transform duration-300 group-hover:rotate-y-12`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(20px)',
          transition: 'transform 0.3s ease'
        }}
      >
        {/* Use Icon with className */}
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground text-sm text-center mb-4 line-clamp-2">{description}</p>
      <div className="mt-auto flex items-center justify-center gap-1 text-primary font-medium text-sm">
        <span>Know More</span>
        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export const ServicesSection = () => {
  return (
    <section className="py-16">
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