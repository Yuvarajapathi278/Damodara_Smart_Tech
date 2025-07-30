import type { FC, ReactNode } from "react";
import {
  Code, Brain, Cloud, Lock, Rocket,
  MonitorSmartphone, Database, Bug, BarChart2, Globe, FileText
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  details: string;
  detailedInfo: Array<{ title: string; items: string[] }>;
  icon: FC;
}

export const services: Service[] = [
  {
    slug: "core-software",
    title: "✅ Core Software Development Services",
    description: "Foundational services every software/IT company offers",
    details: "These are foundational services every software/IT company offers.",
    detailedInfo: [
      {
        title: "Core Services",
        items: [
          "Custom Software Development",
          "Web Application Development",
          "Mobile App Development (iOS & Android)",
          "Enterprise Software Solutions (ERP, CRM, SCM, etc.)",
          "UI/UX Design & Prototyping"
        ]
      }
    ],
    icon: Code,
  },
  {
    slug: "ai-data",
    title: "✅ AI & Data-Driven Services",
    description: "For companies leveraging Artificial Intelligence and Data Science",
    details: "For companies leveraging Artificial Intelligence and Data Science.",
    detailedInfo: [
      {
        title: "AI & Data Services",
        items: [
          "AI/ML Model Development",
          "Natural Language Processing (NLP)",
          "Computer Vision Solutions",
          "Chatbots & Virtual Assistants",
          "Predictive Analytics & Business Intelligence",
          "Data Engineering & Data Warehousing"
        ]
      }
    ],
    icon: Brain,
  },
  {
    slug: "cloud-devops",
    title: "✅ Cloud & DevOps Services",
    description: "Ensuring scalable, efficient, and reliable infrastructure",
    details: "Ensuring scalable, efficient, and reliable infrastructure.",
    detailedInfo: [
      {
        title: "Cloud & DevOps",
        items: [
          "Cloud Migration & Management (AWS, Azure, GCP)",
          "DevOps Automation & CI/CD Pipelines",
          "Serverless Computing",
          "Infrastructure as Code (IaC)",
          "Cloud Security & Compliance"
        ]
      }
    ],
    icon: Cloud,
  },
  {
    slug: "automation",
    title: "✅ Automation & Smart Process Engineering",
    description: "For industries looking to automate workflows and reduce human effort",
    details: "For industries looking to automate workflows and reduce human effort.",
    detailedInfo: [
      {
        title: "Automation Services",
        items: [
          "Business Process Automation (BPA)",
          "Robotic Process Automation (RPA)",
          "AI-driven Workflow Automation",
          "IoT + AI Integration for Smart Devices",
          "Edge AI Deployment"
        ]
      }
    ],
    icon: Rocket,
  },
  {
    slug: "digital-transformation",
    title: "✅ Digital Transformation Services",
    description: "Helping traditional businesses adapt to the digital age",
    details: "Helping traditional businesses adapt to the digital age.",
    detailedInfo: [
      {
        title: "Digital Transformation",
        items: [
          "Legacy System Modernization",
          "Digital Strategy Consulting",
          "Industry 4.0 Transformation",
          "eCommerce Platform Development",
          "Digital Twin Technology"
        ]
      }
    ],
    icon: Globe,
  },
  {
    slug: "cybersecurity",
    title: "✅ Cybersecurity & Compliance",
    description: "Essential services to protect data and ensure trust",
    details: "Essential services to protect data and ensure trust.",
    detailedInfo: [
      {
        title: "Cybersecurity Services",
        items: [
          "Penetration Testing & Vulnerability Assessment",
          "Zero Trust Architecture Implementation",
          "Compliance Services (GDPR, HIPAA, SOC 2)",
          "Secure Code Review & App Security",
          "Identity and Access Management (IAM)"
        ]
      }
    ],
    icon: Lock,
  },
  {
    slug: "product-development",
    title: "✅ Product Development as a Service (PDaaS)",
    description: "Ideal for startups and enterprise MVPs",
    details: "Ideal for startups and enterprise MVPs.",
    detailedInfo: [
      {
        title: "Product Development",
        items: [
          "Idea to MVP Execution",
          "Product-Market Fit Advisory",
          "Cross-Platform App Development",
          "User Testing & Iterative Design",
          "Version Upgrades & Scaling"
        ]
      }
    ],
    icon: MonitorSmartphone,
  },
  {
    slug: "industry-solutions",
    title: "✅ Industry-Specific Smart Solutions",
    description: "Verticals you can specialize in using your tech stack",
    details: "Verticals you can specialize in using your tech stack.",
    detailedInfo: [
      {
        title: "Industry Solutions",
        items: [
          "Smart Healthcare (AI diagnostics, wearable integration)",
          "Smart Education (LMS, AI tutors, adaptive learning)",
          "Smart Agriculture (IoT + AI for precision farming)",
          "Smart Manufacturing (AI for quality control, supply chain)",
          "Smart Cities (traffic systems, surveillance, air quality sensors)"
        ]
      }
    ],
    icon: Database,
  },
  {
    slug: "consulting-rd",
    title: "✅ Consulting & R&D",
    description: "For institutions, government, and enterprises",
    details: "For institutions, government, and enterprises.",
    detailedInfo: [
      {
        title: "Consulting & Research",
        items: [
          "AI & Data Science Consulting",
          "Innovation Labs & Research as a Service (RaaS)",
          "Tech Feasibility Studies",
          "Proof of Concept (PoC) & Prototyping",
          "Academic Collaboration for Tech Transfer"
        ]
      }
    ],
    icon: Bug,
  },
  {
    slug: "saas-platform",
    title: "✅ SaaS & Platform Development",
    description: "Recurring revenue models",
    details: "Recurring revenue models.",
    detailedInfo: [
      {
        title: "SaaS & Platform Services",
        items: [
          "SaaS Product Design & Hosting",
          "API & SDK Development",
          "Subscription Management & Analytics",
          "Platform-as-a-Service (PaaS)",
          "White-Label Product Creation"
        ]
      }
    ],
    icon: BarChart2,
  },
  {
    slug: "integration",
    title: "✅ Smart Integration Services",
    description: "Connecting software, hardware, and the real world",
    details: "Connecting software, hardware, and the real world.",
    detailedInfo: [
      {
        title: "Integration Services",
        items: [
          "IoT Systems Integration",
          "AI + Robotics Integration",
          "Sensor + Cloud Platforms",
          "Smart Home & Smart Office Solutions"
        ]
      }
    ],
    icon: Globe,
  },
  {
    slug: "showroom",
    title: "✅ Software Showroom / Marketplace Support",
    description: "Your new idea",
    details: "Your new idea.",
    detailedInfo: [
      {
        title: "Showroom & Marketplace",
        items: [
          "App Showroom & Demo Zones",
          "B2B App Marketplace Setup",
          "UX Testing for Apps",
          "Cross-app Integration Tools"
        ]
      }
    ],
    icon: FileText,
  }
];