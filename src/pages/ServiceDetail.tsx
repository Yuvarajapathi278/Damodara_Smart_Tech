import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Code, Brain, Cloud, Lock, Rocket, MonitorSmartphone, Database, Bug, BarChart2, Globe, FileText } from "lucide-react";
import { services } from "@/serviceData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";

// Map of icons for services
const iconMap = {
  "✅ Core Software Development Services": Code,
  "✅ AI & Data-Driven Services": Brain,
  "✅ Cloud & DevOps Services": Cloud,
  "✅ Automation & Smart Process Engineering": Rocket,
  "✅ Digital Transformation Services": Globe,
  "✅ Cybersecurity & Compliance": Lock,
  "✅ Product Development as a Service (PDaaS)": MonitorSmartphone,
  "✅ Industry-Specific Smart Solutions": Database,
  "✅ Consulting & R&D": Bug,
  "✅ SaaS & Platform Development": BarChart2,
  "✅ Smart Integration Services": Globe,
  "✅ Software Showroom / Marketplace Support": FileText,
};

const ServiceDetail: React.FC = () => {
  // Extract the `slug` parameter from the URL (e.g., /services/ai-data)
  const { slug } = useParams<{ slug: string }>();

  // Find the service that matches the `slug`
  const service = services.find((s) => s.slug === slug);

  // If the service is not found, show a 404-like message
  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-red-500">404 - Service Not Found</h1>
        <p className="mt-4 text-gray-600">The service you are looking for does not exist.</p>
        <Link to="/services" className="mt-6 text-primary hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  // Get the corresponding icon for the service
  const Icon = iconMap[service.title];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Background */}
      <VideoBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="container px-4 py-12 mx-auto">
          {/* Back Button */}
          <Link to="/services" className="flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          {/* Service Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

            {/* Description */}
            <p className="text-gray-600 mb-6">{service.description}</p>

            {/* Detailed Information */}
            <div className="mt-8">
              {service.detailedInfo.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-primary">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServiceDetail;
